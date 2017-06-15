import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './super-saiyan-four.component.html',
  styleUrls: ['./super-saiyan-four.component.css']
})
export class SuperSaiyanFourComponent implements OnInit {
  @Input() powerMult; //get power multiplyer from parent
  messages: Array<boolean> = [false, false, false];
  ngOnChanges(){
    this.messages = [this.over9000(), this.superlative(), this.theOne()];
  }
  //called by ngOnChanges()
  over9000(){
    console.log("powerMult:",this.powerMult);
    if (this.powerMult*500 > 9000 && this.powerMult*500 <= 20000){
      return true;
    } else {
      return false;
    }
  }
  superlative(){
    if (this.powerMult*500 > 20000 && this.powerMult*500 != 50000){
      return true;
    } else {
      return false;
    }
  }
  theOne(){
    if (this.powerMult*500 == 50000){
      return true;
    } else {
      return false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
