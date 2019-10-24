import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Hero } from "src/app/hero";

@Injectable({
  providedIn: "root"
})
export class CreateServiceService {
  postUrl =
    "https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/createCategory";

  putUrl =
    "https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/updateCategory/{id}";

  getUrl = "";

  deleteUrl =
    "https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/deleteContent/{id}";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    })
  };

  constructor(private http: HttpClient) {}

  getCategory(id: string): Observable<Hero> {
    const url = `${this.getUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

  createCategory(category: Hero) {
    return this.http.post(this.postUrl, category, this.httpOptions);
  }

  createGetAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(
      "https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/getAllContent"
    );
  }

  updateCategory(category: Hero): Observable<Hero> {
    return this.http.put<Hero>(this.putUrl, category, this.httpOptions);
  }

  deleteCategory(category: Hero) {
    const id = typeof category === "string" ? category : category.id;
    const url = `${this.deleteUrl}/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
