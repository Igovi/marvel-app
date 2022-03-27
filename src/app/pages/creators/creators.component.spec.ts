import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsComponent } from './creators.component';

import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('CreatorsComponent', () => {
  let component: CreatorsComponent;
  let fixture: ComponentFixture<CreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ CreatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getCreators function', () => {
    spyOn(component, 'getCreators').and.callThrough();
    component.getCreators();
    expect(component.getCreators).toHaveBeenCalled();
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
