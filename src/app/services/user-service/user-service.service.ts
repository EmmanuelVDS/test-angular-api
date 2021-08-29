import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User";
import {Album} from "../../models/Album";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private _usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  /**
   * Method to get all the Users from an API
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._usersUrl);
  }

  /**
   * Method to get one User from his id in the API
   * @param id
   */
  getUser(id: number): Observable<User> {
    const url = `${this._usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  /**
   * Method to get all the albums of an User from his id in the API
   * @param id
   */
  getAlbumsUser(id: number): Observable<Album[]> {
    const url = `${this._usersUrl}/${id}/albums`;
    return this.http.get<Album[]>(url);
  }
}
