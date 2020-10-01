import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class ApiService {
  constructor(private http: HttpClient) {}
  contentTypeQuery = '?Content-type=%22application%2Fjson%22 HTTP/1.1';
  headers = new HttpHeaders({'content-type': 'application/json'});

  getTestData() {
    var format = "JSON";
    var apiKey = "ma6v7d7sxqmp6tbsssu7rcas"
    const payload = JSON.stringify({apiKey, format});
    return this.http.get("https://api.bestbuy.com/v1/products?show=name,sku,salePrice,department&pageSize=3&format=json&apiKey=ma6v7d7sxqmp6tbsssu7rcas");
  }
}
