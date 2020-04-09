import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1 style="color:red;">Interpolation</h1><hr>
  <h2 class="text-special"> 
    Welcome {{name}} 
  </h2>
  <h2>Sum of 2+2 is {{2+2}}</h2>
  <h2>{{name.toUpperCase()}} it's length is {{name.length}} </h2>
  <h2 class="text-success">{{greetUser()}}</h2>
  <h3 style="color:red;">Property Binding myId as a referene variable in ts</h3><hr>
  <input type="text" value="Nagarjuna" [id]="myId">
  <h1 style="color:red;">ngStyle and ngClass usage</h1><hr>

  <h2 [ngClass]="messageClasses">Nagarjuna Reddy</h2>
  <h2 [style.color]="'orange'">Nagarjuna Reddy</h2>
  <h2 [style.color]=" hasError ? 'green':'blue'">Nagarjuna Reddy</h2>
  <h2 [ngStyle]="cusStyles">Nagarjuna Reddy</h2>
  <h1 style="color:red;">Event Binding</h1><hr>
  <button (click)="onClick()">Greet</button>
  {{greeting}}
<h1 style="color:red;">Template Reference Variables</h1><hr>
  <input #input type="text">&nbsp;
  <button (click)="onLogMessage(input.value)">Log</button>
  <p>Interpolation Value typed in text field : {{input.value}}</p>
<h1 style="color:red">Two way Binding [(ngModel)]="bind"</h1>
<input [(ngModel)]="bind" type="text">
<p>Typed text in text field : {{bind}}</p>
<h1 style="color:red">Directives</h1><h1 style="color:red;">ngIf Directive example if DisplayName = true it shows Codevaluation else Hidden</h1><hr>
<div *ngIf="DisplayName then thenBlock else elseBlock"></div>
<ng-template #thenBlock>
<h2>Codevaluation</h2>
</ng-template>
<ng-template #elseBlock>
<h2>Hidden</h2>
</ng-template>

<h1 style="color:red;">ngSwitch Directive Bases on variable name color</h1><hr>
<div [ngSwitch]="Color">
  <div *ngSwitchCase="'red'">You Picked Red Color</div>
  <div *ngSwitchCase="'blue'">You Picked Blue Color</div>
  <div *ngSwitchCase="'green'">You Picked Green Color</div>
  <div *ngSwitchDefault>Pick another color</div>
</div>
<h1 style="color:red;">ngFor Directive</h1><hr>
<div *ngFor="let color of colors; index as i">
<h2>{{i}} {{color}}</h2>
</div>
  `,
  styles: [
    `.text-success{
      color:green;
    }
    .text-danger{
      color:green;
    }
    .text-special{
      font-style:italic;
    }
    `
  ]
})
export class TestComponent implements OnInit {
  public bind = ''
  public Color = 'red'
  public name = 'Nagarjuna Reddy'
  public myId = 'testId'
  public DisplayName = true
  public hasError = false
  public isSpecial = true
  public greeting = ''
  public colors=['red','blue','green','yellow','grey']
  public messageClasses = {
    "text-success": this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.isSpecial
  }

  public cusStyles = {
    color: "yellow",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return " Hello " + this.name;
  }
  onClick() {
    console.log("Welcome to Codevaluation");
    this.greeting = 'Welcome to Codevaluation'
  }
  onLogMessage(value) {
    console.log(value)
  }

}
