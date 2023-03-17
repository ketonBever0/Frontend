import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterinfoComponent } from './characterinfo.component';

describe('CharacterinfoComponent', () => {
  let component: CharacterinfoComponent;
  let fixture: ComponentFixture<CharacterinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
