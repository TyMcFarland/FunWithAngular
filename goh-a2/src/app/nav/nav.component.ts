import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  links: any[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.links = [
      {
        name: 'Units',
        path: ''
      }
    ]
  };

  navTo(link) {
    console.log(link);
    this.router.navigate([link.path]);
  }

}
