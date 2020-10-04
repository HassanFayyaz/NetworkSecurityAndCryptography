import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailfenceComponent } from './railfence.component';

describe('RailfenceComponent', () => {
  let component: RailfenceComponent;
  let fixture: ComponentFixture<RailfenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailfenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailfenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
