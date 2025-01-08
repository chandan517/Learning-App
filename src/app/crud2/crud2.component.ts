import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-crud2',
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './crud2.component.html',
  styleUrl: './crud2.component.scss'
})
export class Crud2Component {

  users: any[] = [];
  newUser: any = { name: '', email: '', password: '' };
  selectedUser: any = { name: '', email: '', password: '' };
  isEditMode = false;

  constructor(private userService: CrudService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((user) => {
      this.users = user;
    });
  }

  addUser() {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { name: '', email: '', password: '' }; 
    });
  }

  editUser(user: any) {
    this.selectedUser = { ...user };
    this.isEditMode = true;
  }

  updateUser() {
    this.userService.updateUser(this.selectedUser._id, this.selectedUser).subscribe(() => {
      this.loadUsers();
      this.isEditMode = false;
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

}
