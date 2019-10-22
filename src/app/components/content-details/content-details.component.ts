import { Component, OnInit, Input, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../../hero';
import { CreateServiceService } from 'src/services/create-service.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule]
})

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: [ './content-details.component.scss' ]
})
export class ContentDetailsComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private create: CreateServiceService
  ) {}

  ngOnInit(): void {
    console.log(this.hero);
  }
  submit(): void {
    console.log(this.hero.content);
    this.create.createCategory(this.hero)
      .subscribe(() => this.goBack());
  }
  // getHero(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.heroService.getHero(id)
  //     .subscribe(hero => this.hero = hero);


  goBack(): void {
    this.location.back();
  }

//  save(): void {
//     this.heroService.updateHero(this.hero)
//       .subscribe(() => this.goBack());
//   }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
