import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  public name="Nagarjuna Reddy Mandati"
  public person={
    "first_name":"Nagarjuna_Reddy",
    "last_name":"Mandati"
  }
  public date=new Date()
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("Hay Codevaluation, event is emitted from Parent")
  }

}
