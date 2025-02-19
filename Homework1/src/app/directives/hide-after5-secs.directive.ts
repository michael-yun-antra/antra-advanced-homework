import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHideAfter5Secs]'
})
export class HideAfter5SecsDirective implements OnInit {

  constructor(private renderer : Renderer2, private el: ElementRef) { }

  // @HostBinding('style.display') display: string = 'block';

  // This method uses Renderer2 and ElementRef instead of using HostBinding.
  ngOnInit(): void { 
    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }, 5000)
  }

}
