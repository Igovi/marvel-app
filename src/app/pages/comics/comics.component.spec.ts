import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsComponent } from './comics.component';

import { HttpClientTestingModule} from '@angular/common/http/testing';


describe('ComicsComponent', () => {
  let component: ComicsComponent;
  let fixture: ComponentFixture<ComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ ComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getComics function', () => {
    spyOn(component, 'getComics').and.callThrough();
    component.getComics();
    expect(component.getComics).toHaveBeenCalled();
  });
  it('should call getThumbnail function', () => {
    spyOn(component, 'getThumbnail').and.callThrough();
    component.getThumbnail();
    expect(component.getThumbnail).toHaveBeenCalled();
  });
  it('should call initEmitSubscritions function', () => {
    spyOn(component, 'initEmitSubscritions').and.callThrough();
    component.initEmitSubscritions();
    expect(component.initEmitSubscritions).toHaveBeenCalled();
  });
});
