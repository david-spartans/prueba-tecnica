import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/users.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: User = {
    id: 0,
    username: '',
    name: '',
    email: '',
    phone: '',
    website: '',
  };

  constructor(
    private _usersService: UsersService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  goBack() {
    this._router.navigateByUrl('users');
  }

  getUser(id: number) {
    this._usersService.getUserById(id).subscribe((resp: any) => {
      this.user = resp;
    });
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.getUser(params['id']);
    });
  }
}
