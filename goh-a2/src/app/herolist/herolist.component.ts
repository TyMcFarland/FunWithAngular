import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { HerolistService } from './service/herolist.service';

@Component({
  selector: 'app-herolist',
  templateUrl: './templates/herolist.component.html',
  styleUrls: ['./styles/herolist.component.css']
})
export class HerolistComponent implements OnInit {

  heroes: any[];
  constructor(
    public herolistService: HerolistService,
    private router: Router
    ) { }

  ngOnInit() {
    this.heroes = this.herolistService.getHeroes();
  }

  routeToDetails(hero) {
    this.router.navigate(['detail/', hero.name]);
  }

}
