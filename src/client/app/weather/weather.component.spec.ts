import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { WeatherModule } from './weather.module';

export function main() {
   describe('Weather component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [WeatherModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let weatherDOMEl = fixture.debugElement.children[0].nativeElement;

	          expect(weatherDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-weather></sd-weather>'
})
class TestComponent {}
