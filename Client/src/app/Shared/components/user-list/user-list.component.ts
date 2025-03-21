import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Core/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})

export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => (this.users = data),
      error: (err) => console.log('Error fetching users', err),
    });
  }
}
