import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinventoryComponent } from './cardinventory.component';

describe('CardinventoryComponent', () => {
  let component: CardinventoryComponent;
  let fixture: ComponentFixture<CardinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
