import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent implements OnInit {
  title = 'Angular Project One';
  isAuth = false;

  appareilOne = 'TV';
  appareilTwo = 'PC';
  appareilThree = 'Machine Spécial Thé';

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000 );
  }

  onAllumer() {
    console.log('On allume tout !');
  }

  ngOnInit(): void {
  }
}
