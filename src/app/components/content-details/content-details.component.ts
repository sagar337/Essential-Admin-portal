import { Component, OnInit, Input, NgModule } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Hero } from "../../hero";
import { CreateServiceService } from "src/services/create-service.service";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [CommonModule]
})
@Component({
  selector: "app-content-details",

  templateUrl: "./content-details.component.html",
  styleUrls: ["./content-details.component.scss"]
})
export class ContentDetailsComponent implements OnInit {
  @Input() hero: Hero;

  heroes: Hero[] = [];
  identifier: string;
  show: boolean;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private create: CreateServiceService
  ) {}

  ngOnInit(): void {
    this.getAlllCategory();
    this.getCategory();
  }

  onDelete(id: string): void {
    const category = this.getDataText(id);

    this.create.deleteCategory(category);
  }

  getDataText(id: string): Hero {
    for (let element of this.heroes) {
      if (element.id === id) {
        return element;
      }
    }

    return this.hero;
  }
  submit(): void {
    console.log(this.hero.content);
    this.create.createCategory(this.hero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  updateCategory(): void {
    this.create.updateCategory(this.hero);
  }

  getCategory(): void {
    this.hero = this.getDataText(this.route.snapshot.paramMap.get("id"));

    console.log("content id get catCatory");
    console.log(this.hero.content);
    this.show = true;
    if (typeof this.hero === "undefined") {
      console.log("undefined");
      return null;
    }
  }
  getAlllCategory(): void {
    this.create.createGetAll().subscribe(heroes => (this.heroes = heroes));
    for (let element of this.heroes) {
      console.log(element.content);
    }
  }
}
