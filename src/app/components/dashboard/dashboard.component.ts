import { Component, OnInit } from "@angular/core";
import { Hero } from "../../hero";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CreateServiceService } from "../../../services/create-service.service";
import { Content } from "@angular/compiler/src/render3/r3_ast";
// import { HeroService } from '../hero.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  hero: Hero = {
    id: "",
    content: ""
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private getService: CreateServiceService
  ) {}

  ngOnInit() {}
  goBack(): void {
    console.log("asd");
    this.location.back();
  }

  getCategory(): void {
    this.getService.createGetAll().subscribe(hero => {
      this.heroes = hero;
    });
  }

  createCategory(): void {
    console.log("created category");
    console.log(this.hero.content);
    this.getService.createCategory(this.hero).subscribe((res: Hero) => {
      console.log(res.content);
    });
  }
}
