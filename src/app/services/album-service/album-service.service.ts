import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "../../models/Album";
import {Photo} from "../../models/Photo";

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  private _albumsUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  /**
   * Method to get all the Albums from an API
   */
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl);
  }

  /**
   * Method to get one Album from his id in the API
   * @param id
   */
  getAlbum(id: number): Observable<Album> {
    const url = `${this._albumsUrl}/${id}`;
    return this.http.get<Album>(url);
  }

  /**
   * Method to get all the photos of an Album from his id in the API
   * @param id
   */
  getPhotosAlbum(id: number): Observable<Photo[]> {
    const url = `${this._albumsUrl}/${id}/photos`;
    return this.http.get<Photo[]>(url);
  }
}
