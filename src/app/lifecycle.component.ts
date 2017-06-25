import {
  Component, OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input,
  OnDestroy, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindabal}}</p>
    
  `,
  styles: []
})

export class LifecycleComponent implements OnChanges, OnInit , DoCheck, AfterViewInit, AfterContentChecked, AfterViewChecked , AfterContentInit, OnDestroy {
  @Input() bindabal = 1000;

@ContentChild('boundContent')
boundContent: HTMLElement;


  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }
  constructor() {}

  ngOnChanges(): void {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {

    this.log('ngOnInit');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');

  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');

  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
    console.log(this.boundContent);
  }

  private log (hook: string) {
    console.log(hook);
  }

}
