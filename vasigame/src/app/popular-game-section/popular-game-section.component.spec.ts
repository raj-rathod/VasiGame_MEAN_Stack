import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularGameSectionComponent } from './popular-game-section.component';

describe('PopularGameSectionComponent', () => {
  let component: PopularGameSectionComponent;
  let fixture: ComponentFixture<PopularGameSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularGameSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularGameSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
