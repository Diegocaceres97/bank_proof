import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getAllUsers() {
    return this.http.get(environment.api + 'users');
  }
  getAllComments() {
    return this.http.get(environment.api + 'comments');
  }
  getComment(id: number) {
    return this.http.get(environment.api + 'comments/' + id);
  }
}
