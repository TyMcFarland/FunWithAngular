import { Injectable } from '@angular/core';

@Injectable()
export class HerolistService {

  heroes: any[];

  getHeroes() {
    return this.heroes;
  }

  getHero(id:number) {

  }

  constructor() { 
    this.heroes = [
    {
      id: 1,
      name: 'Admiral Ackbar',
      role: 'Support'
    },
    {
      id: 2,
      name: 'Princess Leia',
      role: 'Attacker'
    },
    {
      id: 3,
      name: 'Han Solo',
      role: 'Tank'
    },
    {
      id: 4,
      name: 'Count Dooku',
      role: 'Attacker'
    },
    {
      id: 5,
      name: 'Emperor Palpatine',
      role: 'Attacker'
    },
    {
      id: 6,
      name: 'Darth Vader',
      role: 'Attacker'
    }
  ]
  }
}
