import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';

import { HttpClientTestingModule} from '@angular/common/http/testing';


describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ CharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getCharacters function', () => {
    spyOn(component, 'getCharacters').and.callThrough();
    component.getCharacters();
    expect(component.getCharacters).toHaveBeenCalled();
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
