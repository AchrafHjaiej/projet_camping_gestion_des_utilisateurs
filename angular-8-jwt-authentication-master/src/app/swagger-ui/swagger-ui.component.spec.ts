import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import * as SwaggerUI from 'swagger-ui-dist';
//import * as SwaggerUIConfig from './swagger-ui-config.json';

import { SwaggerUiComponent } from './swagger-ui.component';

describe('SwaggerUiComponent', () => {
  let component: SwaggerUiComponent;
  let fixture: ComponentFixture<SwaggerUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaggerUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
