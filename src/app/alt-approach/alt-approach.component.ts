import { Component, OnInit, ViewChild } from '@angular/core';
import { AltApproachChildComponent } from './alt-approach-child/alt-approach-child.component';



@Component({
  selector: 'app-alt-approach',
  templateUrl: './alt-approach.component.html',
  styleUrls: ['./alt-approach.component.css']
})
export class AltApproachComponent implements OnInit {
  @ViewChild(AltApproachChildComponent) child?:AltApproachChildComponent;
  constructor() { }

  onJsonString(jsonStringEvent: string): void {
    this.dataFromChild=jsonStringEvent;
  }

 
  dataFromChild?:string;
  ngOnInit(): void {
 
  }


  callChildMethod():void{
    this.child?.updateNotedDateInChild();

  }

}
