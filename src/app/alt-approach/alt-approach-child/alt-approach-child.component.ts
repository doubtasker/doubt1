import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

import { AltApproachComponent } from '../alt-approach.component';



@Component({
  selector: 'app-alt-approach-child',
  templateUrl: './alt-approach-child.component.html',
  styleUrls: ['./alt-approach-child.component.css']
})
export class AltApproachChildComponent implements OnInit {

  constructor(private altApproachCallback: AltApproachComponent) { }

  

  d?: Date ;
  


  ngOnInit(): void {
  }
 
  updateNotedDateInChild()
  {
    this.d= new Date();
  }

  emitDataToParent()
  {

   this.altApproachCallback.onJsonString(JSON.stringify(new Date()));
  }

}
