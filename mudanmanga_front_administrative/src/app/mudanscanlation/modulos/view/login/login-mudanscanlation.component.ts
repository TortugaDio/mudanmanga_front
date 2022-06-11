import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginMudanscanlationService } from '../../service/login-mudanscanlation.service';
import { UserRegisterComponent } from '../registro/user-register.component';

@Component({
  selector: 'app-login-mudanscanlation',
  templateUrl: './login-mudanscanlation.component.html',
  styleUrls: ['./login-mudanscanlation.component.scss']
})
export class LoginMudanscanlationComponent implements OnInit {

  @ViewChild(UserRegisterComponent, { static: false }) userRegisterComponent: UserRegisterComponent;
  
  constructor(
    public app: AppComponent,
    private loginMudanscanlationService: LoginMudanscanlationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginMudanscanlationService.login(null, null).subscribe(resp => {
      console.log(resp);
      this.router.navigate([''], { skipLocationChange: true });
    })
  }

  registro(){
     this.userRegisterComponent.iniciarComponente();
  }
}
