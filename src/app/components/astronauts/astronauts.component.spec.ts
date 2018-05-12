import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Astronauts } from './astronauts.component';

describe('Astronauts', () => {
  let component: Astronauts;
  let fixture: ComponentFixture<Astronauts>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Astronauts ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Astronauts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
