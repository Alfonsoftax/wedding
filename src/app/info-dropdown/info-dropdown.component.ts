import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-dropdown',
  templateUrl: './info-dropdown.component.html',
  styleUrls: ['./info-dropdown.component.css'],
  animations: [
    trigger('slideInOut', [
      state('open', style({
        height: '*',
        padding: '20px',
        opacity: 1
      })),
      state('closed', style({
        height: '0',
        padding: '0 20px',
        opacity: 0
      })),
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class InfoDropdownComponent {

  activeSection: string | null = null;

  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? null : section;
  }

}
