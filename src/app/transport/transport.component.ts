import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSignUp() {
    // Add your signup logic here
    console.log('Signup clicked');
  }
}
