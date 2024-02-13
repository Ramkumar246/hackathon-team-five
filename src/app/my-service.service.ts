import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor(private http: HttpClient,private cookieService: CookieService) {}
  private apiUrl = 'your-api-url';

  // Example method to set a cookie
  setCookie() {
    this.cookieService.set('myCookie', 'cookieValue');
  }

  // Example method to get a cookie
  getCookie() {
    const cookieValue = this.cookieService.get('myCookie');
    console.log('Cookie Value:', cookieValue);
  }



  getSurveyData(): Observable<any> {
    const url = `${this.apiUrl}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(url,{headers});
  }
}
