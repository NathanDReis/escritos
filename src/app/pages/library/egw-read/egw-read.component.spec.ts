import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgwReadComponent } from './egw-read.component';

describe('EgwRead', () => {
  let component: EgwReadComponent;
  let fixture: ComponentFixture<EgwReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgwReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgwReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
