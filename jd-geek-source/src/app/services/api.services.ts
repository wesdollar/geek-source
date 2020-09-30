import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class ApiService {
  constructor(private http: HttpClient) {}
  contentTypeQuery = '?Content-type=%22application%2Fjson%22 HTTP/1.1';
  headers = new HttpHeaders({'content-type': 'application/json'});

  getTestData() {
    const payload = JSON.stringify({});
    return this.http.post("https://api.bestbuy.com/v1/products((search=HP)&inStoreAvailability=true&(categoryPath.id=abcat0501000))?apiKey=ma6v7d7sxqmp6tbsssu7rcas&format=json" + this.contentTypeQuery, {headers: this.headers});
  }
}
