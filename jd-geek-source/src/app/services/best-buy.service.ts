import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { TestData } from "../models/testdata.interface";
import * as configs from "../../assets/config.json";
import { Observable } from "rxjs";
import { CommonProductsAPIData } from "../models/commonProductsAPIData.interface";
import { Categories } from "../models/Categories.interface";
import { CommonPortalData } from "../models/commonPortalData.interface";

@Injectable({
  providedIn: "root",
})
export class BestBuyService {
  constructor(private http: HttpClient) {}
  contentTypeQuery = "?Content-type=%22application%2Fjson%22 HTTP/1.1";
  headers = new HttpHeaders({ "content-type": "application/json" });

  getSingleCategorybyId(categoryID: string): Observable<Categories> {
    const httpUrl = `https://api.bestbuy.com/v1/categories(id=${categoryID})?`;
    const httpParams = new HttpParams()
      .set("show", "name,id,subCategories.name,subCategories.id")
      .set("pageSize", "10")
      .set("format", configs.format)
      .set("apiKey", configs.apiKey);
    const options = { params: httpParams };

    return this.http.get<Categories>(httpUrl, options);
  }

  getPortalProducts(offerTypes: string): Observable<CommonProductsAPIData> {
    const httpUrl = `https://api.bestbuy.com/v1/products(offers.type=${offerTypes})?`;
    const httpParams = new HttpParams()
      .set(
        "show",
        "image,name,customerReviewAverage,customerReviewCount,regularPrice,salePrice"
      )
      .set("pageSize", "10")
      .set("format", configs.format)
      .set("apiKey", configs.apiKey);

    const options = { params: httpParams };

    return this.http.get<CommonProductsAPIData>(httpUrl, options);
  }

  getTopLevelCategories(): Observable<Categories> {
    const httpUrl = "https://api.bestbuy.com/v1/categories(id=abcat*)?";
    const httpParams = new HttpParams()
      .set("show", "id,name")
      .set("format", configs.format)
      .set("apiKey", configs.apiKey);

    const options = { params: httpParams };

    return this.http.get<Categories>(httpUrl, options);
  }

  getSingleProduct(productID: number): Observable<CommonPortalData> {
    const httpUrl = `https://api.bestbuy.com/v1/products/${productID}.json?`;
    const httpParams = new HttpParams()
      .set(
        "show",
        "image,name,customerReviewAverage,customerReviewCount,regularPrice,salePrice"
      )
      .set("format", configs.format)
      .set("apiKey", configs.apiKey);

    const options = { params: httpParams };

    return this.http.get<CommonPortalData>(httpUrl, options);
  }

  getProductsByIds(productIDs: number[]): Observable<CommonProductsAPIData> {
    const httpUrl = `https://api.bestbuy.com/v1/products(sku in (${productIDs}))`;
    const httpParams = new HttpParams()
      .set(
        "show",
        "image,name,customerReviewAverage,customerReviewCount,regularPrice,salePrice"
      )
      .set("format", configs.format)
      .set("apiKey", configs.apiKey);

    const options = { params: httpParams };

    return this.http.get<CommonProductsAPIData>(httpUrl, options);
  }
}
