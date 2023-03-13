import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KibocsatoComponent } from './kibocsato.component';

describe('KibocsatoComponent', () => {
  let component: KibocsatoComponent;
  let fixture: ComponentFixture<KibocsatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KibocsatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KibocsatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
