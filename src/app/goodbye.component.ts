import { Component, Input } from '@angular/core';

@Component({
  selector: 'goodbye',
  template: `<h1>Good Bye {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class GoodByeComponent  {
  @Input() name: string;
}
