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
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*"
    })
  };

  constructor(private http: HttpClient) {}
  // createCategory(category: Hero): Observable<Hero> {
  //   console.log("service layer");
  //   console.log(category.content);
  //   return this.http.post<Hero>(
  //     "https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/createCategory/{id}",
  //     { id: "007", content: "dummy data" },
  //     this.httpOptions
  //   );
  // }

  createCategory(category: Hero) {
    return this.http.post(this.postUrl, category, this.httpOptions);
  }

  createGetAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(
      "https://0lkm60cp0g.execute-api.us-east-1.amazonaws.com/dev/getAllContent"
    );
  }
}
