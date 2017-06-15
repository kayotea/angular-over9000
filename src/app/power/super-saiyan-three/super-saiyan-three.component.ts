import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './super-saiyan-three.component.html',
  styleUrls: ['./super-saiyan-three.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit {
  @Input() powerMult; //get power multiplyer from parent
  messages: Array<boolean> = [false];
  ngOnChanges(){
    this.messages = [this.over9000()];
  }
  //called by ngOnChanges()
  over9000(){
    console.log("powerMult:",this.powerMult);
    if (this.powerMult*250 > 9000 && this.powerMult*250 <= 20000){
      return true;
    } else {
      return false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
