import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-datail',
  templateUrl: './hero-datail.component.html',
  styleUrls: ['./hero-datail.component.css']
})
export class HeroDatailComponent implements OnInit {
	@Input() hero: Hero;

  constructor(
  	private route: ActivatedRoute,
  	private heroService: HeroService,
  	private location: Location
  ) { }

  ngOnInit(): void {
  	this.getHero();
  }

  getHero(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.heroService.getHero(id)
    	.subscribe(hero => this.hero = hero);
	}

  goBack(): void {
    this.location.back();
  }

  save(): void {
     this.heroService.updateHero(this.hero)
       .subscribe(() => this.goBack());
   }
}
