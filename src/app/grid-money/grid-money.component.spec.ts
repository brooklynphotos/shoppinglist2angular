import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMoneyComponent } from './grid-money.component';

describe('GridMoneyComponent', () => {
  let component: GridMoneyComponent;
  let fixture: ComponentFixture<GridMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
