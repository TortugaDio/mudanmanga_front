import { Component, OnInit } from '@angular/core';
import { DtoUser } from '../../domain/dto/DtoUser';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userService: UserService,) { }

  displayModal: boolean = false;
  dto: DtoUser = new DtoUser();
  ngOnInit(): void {

  }

  iniciarComponente() {
    this.displayModal = true;
  }

  register() {
    this.userService.registerUser(this.dto).subscribe(resp => {
      console.log(resp);
    })
  }
}
