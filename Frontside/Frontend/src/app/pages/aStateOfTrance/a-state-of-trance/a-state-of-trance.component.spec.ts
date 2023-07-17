import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AStateOfTranceComponent } from './a-state-of-trance.component';

describe('AStateOfTranceComponent', () => {
  let component: AStateOfTranceComponent;
  let fixture: ComponentFixture<AStateOfTranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AStateOfTranceComponent]
    });
    fixture = TestBed.createComponent(AStateOfTranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
