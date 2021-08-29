export class Photo {
  private _id: number;
  private _thumbnailUrl: string;


  constructor(id: number, thumbnailUrl: string, userId: number) {
    this._id = id;
    this._thumbnailUrl = thumbnailUrl;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get thumbnailUrl(): string {
    return this._thumbnailUrl;
  }

  set thumbnailUrl(value: string) {
    this._thumbnailUrl = value;
  }
}
