export class UtilsService {
  public static convertStringToIdFormat(s: string): string {
    return s.replaceAll(' ', '_');
  }

  public static getCardLevelStr(cardLevel: number): string {
    if (cardLevel === 0) {
      return 'No Card';
    }

    return `Card Level ${cardLevel}`;
  }
}