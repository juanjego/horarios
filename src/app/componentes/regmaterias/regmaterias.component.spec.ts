import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegmateriasComponent } from './regmaterias.component';

describe('RegmateriasComponent', () => {
  let component: RegmateriasComponent;
  let fixture: ComponentFixture<RegmateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegmateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegmateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
