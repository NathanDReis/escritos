import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgwLayoutComponent } from './egw-layout.component';

describe('EgwLayout', () => {
  let component: EgwLayoutComponent;
  let fixture: ComponentFixture<EgwLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EgwLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgwLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
