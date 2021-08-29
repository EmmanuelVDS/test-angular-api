import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album} from "../../models/Album";
import {AlbumServiceService} from "../../services/album-service/album-service.service";
import {Photo} from "../../models/Photo";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  _album?: Album;
  _photos?: Photo[];


  constructor(private albumService: AlbumServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAlbum();
    this.getPhotosAlbum()
  }

  /**
   * Method to get an Album
   * @private
   */
  private getAlbum() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id)
      .subscribe(albums => this._album = albums);
  }

  /**
   * Method to get all the Photos of an Album
   * @private
   */
  private getPhotosAlbum() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.albumService.getPhotosAlbum(id)
      .subscribe(photos => this._photos = photos);
  }
}
