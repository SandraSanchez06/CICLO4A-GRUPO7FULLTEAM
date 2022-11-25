import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarclienteMascotaComponent } from './asignarcliente-mascota.component';

describe('AsignarclienteMascotaComponent', () => {
  let component: AsignarclienteMascotaComponent;
  let fixture: ComponentFixture<AsignarclienteMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarclienteMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarclienteMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
