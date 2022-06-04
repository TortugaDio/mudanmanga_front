import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginMudanscanlationService } from '../../service/login-mudanscanlation.service';

@Component({
  selector: 'app-login-mudanscanlation',
  templateUrl: './login-mudanscanlation.component.html',
  styleUrls: ['./login-mudanscanlation.component.scss']
})
export class LoginMudanscanlationComponent implements OnInit {

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
}
