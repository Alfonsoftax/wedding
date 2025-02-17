import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor() { }

  bubbleState = 'initial';

  ngOnInit() {
    setTimeout(() => {
      this.bubbleState = 'final';
    }, 300);
  }

}
