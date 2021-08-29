import { Component, OnInit } from '@angular/core';
import {Album} from "../../models/Album";
import {AlbumServiceService} from "../../services/album-service/album-service.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  _albums: Album[] = [];
  _albumsSearch: Album[] = [];
  inputValue = '';

  constructor(public albumService: AlbumServiceService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  /**
   * Method to get all the Albums and put them into arrays
   */
  private getAlbums() {
    this.albumService.getAlbums()
      .subscribe(albums => {
        this._albums = albums;
        this._albumsSearch = albums;
      });
  }

  /**
   * Method to search an Album in an input
   */
  searchInput() {
    this._albumsSearch = [];
    for (let album of this._albums) {
      if (album.title.toUpperCase().includes(this.inputValue.toUpperCase())){
        this._albumsSearch.push(album)
      }
    }
  }

}
