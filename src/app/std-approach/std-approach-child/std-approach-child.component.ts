import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-std-approach-child',
  templateUrl: './std-approach-child.component.html',
  styleUrls: ['./std-approach-child.component.css']
})
export class StdApproachChildComponent implements OnInit {

  constructor() { }

  d?: Date ;
  @Output() jsonStringEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }
 
  updateNotedDateInChild()
  {
    this.d= new Date();
  }

  emitDataToParent()
  {
    this.jsonStringEvent.emit(JSON.stringify(new Date()));
  }

}
