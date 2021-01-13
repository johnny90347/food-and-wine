import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineMenuComponent } from './wine-menu.component';

describe('WineMenuComponent', () => {
  let component: WineMenuComponent;
  let fixture: ComponentFixture<WineMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
