import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedgamesComponent } from './playedgames.component';

describe('PlayedgamesComponent', () => {
  let component: PlayedgamesComponent;
  let fixture: ComponentFixture<PlayedgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayedgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayedgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
