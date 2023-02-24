export class Evento{
  constructor(
      public id: number,
      public nombreEvento: string,
      public ciudad: string,
      public kms: Number,
      public fecha: Date,
      public img:string,
      public descripcion:string,
      ){    }
}