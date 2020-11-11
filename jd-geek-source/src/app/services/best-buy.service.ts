import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { TestData } from "../models/testdata.interface";
import * as configs from "../../assets/config.json";
import { Observable } from "rxjs";
import { CommonPortalData } from "../models/commonPortalData.interface";
import { CommonProductsAPIData } from "../models/commonProductsAPIData.interface";

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
  //https://api.bestbuy.com/v1/products(offers.type=digital_insert)?apiKey=ma6v7d7sxqmp6tbsssu7rcas&sort=image.asc&show=image,description,customerReviewAverage,customerReviewCount,regularPrice,salePrice&format=json

  getPortalProducts(): Observable<CommonProductsAPIData> {
    const httpParams = new HttpParams()
      .set(
        "show",
        "image,name,customerReviewAverage,customerReviewCount,regularPrice,salePrice"
      )
      .set("pageSize", "10")
      .set("format", configs.format)
      .set("apiKey", configs.apiKey);

    const options = { params: httpParams };

    return this.http.get<CommonProductsAPIData>(
      "https://api.bestbuy.com/v1/products(offers.type=digital_insert)?",
      options
    );
  }
}
