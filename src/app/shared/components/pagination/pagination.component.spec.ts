import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call click function with page < 5', () => {
    spyOn(component, 'click').and.callThrough();
    component.click(2);
    expect(component.click).toHaveBeenCalled();
  });
  it('should call click function with page > 5', () => {
    spyOn(component, 'click').and.callThrough();
    component.click(7);
    expect(component.click).toHaveBeenCalled();
  });
  it('should call initEventSubscribe function with page > 5', () => {
    spyOn(component, 'initEventSubscribe').and.callThrough();
    component.initEventSubscribe();
    expect(component.initEventSubscribe).toHaveBeenCalled();
  });
});
