import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { HerolistService } from '../herolist/service/herolist.service';

@Component({
  selector: 'app-herodetail',
  templateUrl: './templates/herodetail.component.html',
  styleUrls: ['./styles/herodetail.component.css']
})
export class HerodetailComponent implements OnInit, OnDestroy {

  hero: any;
  private sub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private herolistService: HerolistService
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {      
      this.hero = this.herolistService.getHero(params.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
