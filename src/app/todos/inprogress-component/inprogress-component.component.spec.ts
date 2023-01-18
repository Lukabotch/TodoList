import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressComponentComponent } from './inprogress-component.component';

describe('InprogressComponentComponent', () => {
  let component: InprogressComponentComponent;
  let fixture: ComponentFixture<InprogressComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InprogressComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
