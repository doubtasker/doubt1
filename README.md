# Doubt1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

##What is the doubt?

There are two approaches shown here for child component to parent component communication.  

###Standard approach:
Standard approach: For want of a better name called it the standard Approach. Its whats is commonly used.
src\app\std-approach\std-approach-child\std-approach-child.component.ts - It uses : 
- @Output() jsonStringEvent = new EventEmitter<string>(); and  
- this.jsonStringEvent.emit(JSON.stringify(new Date()));  

src\app\std-approach\std-approach.component.html - it uses  
- <app-std-approach-child (jsonStringEvent)="onJsonStringEvent($event)"></app-std-approach-child>

src\app\std-approach\std-approach.component.ts - it implements below to capture the emitted event   
- onJsonStringEvent(jsonStringEvent:string)

###Alternate approach:
Alternate approach: 
src\app\alt-approach\alt-approach-child\alt-approach-child.component.ts. In this event emitting is not used.
Instead Parent Component's method is directly invoked from child.

It may not be as cool looking as say having (jsonStringEvent)="onJsonStringEvent($event)" inside <app-std-approach-child/>

But is simpler. I am assuming its more straightforward to debug also.

###The doubt
Why do I not see anyone using the alternate approach?