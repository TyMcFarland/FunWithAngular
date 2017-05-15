import { Injectable } from '@angular/core';

@Injectable()
export class HerolistService {

  heroes: any[];
  returnHero: {};

  getHeroes() {
    return this.heroes;
  }

  getHero(id:string) {
    this.heroes.filter(hero => {
      if (hero.id === id) {
        this.returnHero = hero;
      }
    });

    return this.returnHero;
  }

  constructor() { 
    this.heroes = [
    {
      id: '1',
      name: 'Admiral Ackbar',
      role: 'Support',
      isDarkSide: false,
      imagePath: 'assets/images/ackbar.jpg',
      description: 'Rebel Support that can Dispel debuffs and grant allies extra turns',
      alliances: [
        'Light Side',
        'Support',
        'Rebel',
        'Fleet Commander'
      ],
      stats: {
        power: '9050',
        speed: '119',
        health: '17,520',
        maxDamage: '4600'
      }
    },
    {
      id: '2',
      name: 'Princess Leia',
      role: 'Attacker',
      isDarkSide: false,
      imagePath: 'assets/images/leia.jpg',
      description: 'Well-rounded Rebel Attacker with extra attacks, Stealth, and team Critical bonuses.',
      alliances: [
        'Light Side',
        'Attacker',
        'Rebel'
      ],
      stats: {
        power: '8741',
        speed: '164',
        health: '15,559',
        maxDamage: '3844'
      }
    },
    {
      id: '3',
      name: 'Han Solo',
      role: 'Tank',
      isDarkSide: false,
      imagePath: 'assets/images/solo.jpg',
      description: 'Daring Attacker that stacks Criticals in his favor and always shoots first',
      alliances: [
        'Light Side',
        'Attacker',
        'Scoundrel',
        'Rebel'
      ],
      stats: {
        power: '8274',
        speed: '136',
        health: '17637',
        maxDamage: '8858'
      }
    },
    {
      id: '4',
      name: 'Count Dooku',
      role: 'Attacker',
      isDarkSide: true,
      imagePath: 'assets/images/newDooku.jpg',
      description: 'High-damage attacker with stun, bonus attacks, and incredible counter-attacking.',
      alliances: [
        'Dark Side',
        'Support',
        'Sith',
        'Separatist'
      ],
      stats: {
        power: '8547',
        speed: '167',
        health: '16,473',
        maxDamage: '4146'
      }
    },
    {
      id: '5',
      name: 'Emperor Palpatine',
      role: 'Attacker',
      isDarkSide: true,
      imagePath: 'assets/images/palpatine.jpg',
      description: 'Overwhelming Sith Support who inflicts Shock and can Stun targets for multiple turns',
      alliances: [
        'Dark Side',
        'Support',
        'Sith',
        'Empire'
      ],
      stats: {
        power: '8784',
        speed: '122',
        health: '15,263',
        maxDamage: '7324'
      }
    },
    {
      id: '6',
      name: 'Darth Vader',
      role: 'Attacker',
      isDarkSide: true,
      imagePath: 'assets/images/lord-vader.jpg',
      description: 'Fearsome Attacker that applies AoE Damage Over Time, and crushes debuffed targets for extra turns',
      alliances: [
        'Dark Side',
        'Attacker',
        'Human',
        'Sith',
        'Empire'
      ],
      stats: {
        power: '9482',
        speed: '121',
        health: '26,610',
        maxDamage: '8256'
      }
    }
  ]
  }
}
