export class Person {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public email: string,
    public size: string,
    public runningClub?: string
  ) {}
}
