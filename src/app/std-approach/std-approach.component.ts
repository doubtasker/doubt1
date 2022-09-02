import { Component, OnInit, ViewChild } from '@angular/core';
import { StdApproachChildComponent } from './std-approach-child/std-approach-child.component';

@Component({
  selector: 'app-std-approach',
  templateUrl: './std-approach.component.html',
  styleUrls: ['./std-approach.component.css']
})
export class StdApproachComponent implements OnInit {
  @ViewChild(StdApproachChildComponent) child?:StdApproachChildComponent;
  constructor() { }
  dataFromChild?:string;
  ngOnInit(): void {
  }

  onJsonStringEvent(jsonStringEvent:string)
  {
    this.dataFromChild=jsonStringEvent;
  }

  callChildMethod():void{
    this.child?.updateNotedDateInChild();

  }

}
