import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
      {{result}}
  ` ,
  styles: []
})
export class PropertyBindingComponent {

    @Input() result = 0;

}
