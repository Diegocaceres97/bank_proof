import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public listUsers: any[] = [];
  public usersData: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.userList();
  }

  userList() {
    this.appService.getAllUsers().subscribe((users) => {
      this.listUsers.push(users);
    });
  }

  do() {
    const user = this.form.value.email;
    const password = this.form.value.password;

    for (let index = 0; index < this.listUsers.length; index++) {
      const element = this.listUsers[index];
      this.usersData = element;
    }
    const data = this.usersData.map(function (user: any) {
      return user.name;
    });

    this.Authentification(data, user, password);
  }

  Authentification(data: any, user: string, password: string) {
    data.forEach((dato: any) => {
      if (dato === user) {
        this.cookieService.set('token_access', 'ESTO_ES_DINAMICO', 1, '/');
        return this.router.navigate(['main']);
      }
      return false;
    });
  }
}
