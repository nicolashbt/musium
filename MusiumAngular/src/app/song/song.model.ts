export class Song {
  public id!: number;
  public name!: string;
  public isActive: boolean = true;
  public filePath !: string;
  public duration!: number;
  public genreId!: number;

  constructor() { }

}
