import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDropdownComponent } from './info-dropdown.component';

describe('InfoDropdownComponent', () => {
  let component: InfoDropdownComponent;
  let fixture: ComponentFixture<InfoDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
