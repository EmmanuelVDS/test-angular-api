import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumDetailComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    FormsModule
  ]
})
export class AlbumsModule { }
