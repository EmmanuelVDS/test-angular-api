import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserServiceService} from "../../services/user-service/user-service.service";
import {ActivatedRoute} from "@angular/router";
import {Album} from "../../models/Album";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  _user?: User;
  _albums?: Album[];

  constructor(private userService: UserServiceService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getUser();
    this.getAlbumsUser()
  }

  /**
   * Method to get an User
   * @private
   */
  private getUser() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.getUser(id)
      .subscribe(users => this._user = users);
  }

  /**
   * Method to get all the Albums of an User
   * @private
   */
  private getAlbumsUser() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.userService.getAlbumsUser(id)
      .subscribe(albums => this._albums = albums);
  }


}
