import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users.interface';
import { Router } from '@angular/router';
import { FilterComponent } from '../../components/filter/filter.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: User[];
  usersBkp: User[];

  constructor(private _usersService: UsersService, private _router: Router) {
    this.users = [];
    this.usersBkp = [];
  }

  goTo(id: number) {
    this._router.navigateByUrl('users/' + id);
  }

  filterByName(event: string | null) {
    if (event) {
      const usersFilter = this.usersBkp.filter((user) =>
        user.name.toLowerCase().includes(event)
      );
      this.users = usersFilter;
    } else {
      this.users = this.usersBkp;
    }
  }

  ngOnInit() {
    this._usersService.getUsers().subscribe((resp: any) => {
      this.users = resp;
      this.usersBkp = resp;
    });
  }
}
