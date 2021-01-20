import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesectionComponent } from './gamesection.component';

describe('GamesectionComponent', () => {
  let component: GamesectionComponent;
  let fixture: ComponentFixture<GamesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
