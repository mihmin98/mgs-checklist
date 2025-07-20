export class UtilsService {
  public static convertStringToIdFormat(s: string): string {
    return s.replace(' ', '_');
  }
}