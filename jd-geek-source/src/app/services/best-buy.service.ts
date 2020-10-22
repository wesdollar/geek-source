import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { TestData } from "../models/testdata.interface";
import * as configs from "../../assets/config.json";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BestBuyService {
  constructor(private http: HttpClient) {}
  contentTypeQuery = "?Content-type=%22application%2Fjson%22 HTTP/1.1";
  headers = new HttpHeaders({ "content-type": "application/json" });

  getTestData(): Observable<TestData> {
    const httpParams = new HttpParams()
      .set("show", configs.show)
      .set("pageSize", "3")
      .set("format", configs.format)
      .set("apiKey", configs.apiKey);

    const options = { params: httpParams };

    return this.http.get<TestData>(
      "https://api.bestbuy.com/v1/products?",
      options
    );
  }
}
