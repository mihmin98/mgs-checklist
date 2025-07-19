import { UserData } from "../models/user-data";

export class UserDataService {
  private static readonly localStorageName = 'mgs-checklist';

  static userDataExists(): boolean {
    return localStorage.getItem(this.localStorageName) !== null;
  }
  
  static createUserData(): void {
    const userData = new UserData();
    localStorage.setItem(this.localStorageName, JSON.stringify(userData));
  }

  static getUserData(): UserData {
    if (!this.userDataExists()) {
      this.createUserData();
    }

    let userDataStr = localStorage.getItem(this.localStorageName);
    userDataStr = userDataStr !== null ? userDataStr : JSON.stringify(new UserData());
    return JSON.parse(userDataStr) as UserData;
  }

  static addObtainedItem(itemName: string): void {
    const userData = this.getUserData();
    if (userData.obtainedItems.filter(item => item === itemName).length === 0) {
      userData.obtainedItems.push(itemName);
    }

    localStorage.setItem(this.localStorageName, JSON.stringify(userData));
  }

  static removeObtainedItem(itemName: string): void {
    const userData = this.getUserData();
    userData.obtainedItems = userData.obtainedItems.filter(item => item !== itemName);

    localStorage.setItem(this.localStorageName, JSON.stringify(userData));
  }

  static isItemObtained(itemName: string): boolean {
    const userData = this.getUserData();
    return userData.obtainedItems.find(item => item === itemName) !== undefined;
  }

  static toggleObtainedItem(itemName: string): void {
    const isItemObtained = this.isItemObtained(itemName);
    if (isItemObtained) {
      this.removeObtainedItem(itemName);
    } else {
      this.addObtainedItem(itemName);
    }
  }
}
