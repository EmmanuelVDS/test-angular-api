import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import {AlbumDetailComponent} from "./album-detail/album-detail.component";

const routes: Routes = [
  { path: '', component: AlbumsComponent },
  { path: ':id', component: AlbumDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
