import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './super-saiyan-two.component.html',
  styleUrls: ['./super-saiyan-two.component.css']
})
export class SuperSaiyanTwoComponent implements OnInit {
  @Input() powerMult; //get power multiplyer from parent
  messages: Array<boolean> = [false, false];
  ngOnChanges(){
    this.messages = [this.over9000(), this.superlative()];
  }
  //called by ngOnChanges()
  over9000(){
    console.log("powerMult:",this.powerMult);
    if (this.powerMult*150 > 9000 && this.powerMult*150 <= 20000){
      return true;
    } else {
      return false;
    }
  }
  superlative(){
    if (this.powerMult*150 > 20000 && this.powerMult*150 != 50000){
      return true;
    } else {
      return false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
