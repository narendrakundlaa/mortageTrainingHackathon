import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesComponentComponent } from './tables-component.component';

describe('TablesComponentComponent', () => {
  let component: TablesComponentComponent;
  let fixture: ComponentFixture<TablesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
