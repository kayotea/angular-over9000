import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power: number = 1;
  powerpoints: Array<number> = this.makePPs();
  makePPs(){
    let arr: Array<number> = [];
    for (let i = 1; i <= 100; i++){
      arr.push(i);
    }
    return arr;
  }

  invoked(event){
    console.log("Invoked", event);
  }
  constructor() { }

  ngOnInit() {
  }

}
