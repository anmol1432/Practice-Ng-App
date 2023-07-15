import { NgForOf ,DOCUMENT} from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { NgSelectOption } from '@angular/forms';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  @Input() hinvHover: string | undefined
  
  constructor ( private el: ElementRef, @Inject( DOCUMENT ) private document: Document,
    private renderer: Renderer2 ) { }
  
  ngOnInit(): void {
    // this.el.nativeElement.style.color = 'red';
    // this.document.querySelector( '' );
  }
  @HostListener('mouseover')onMouseEnter() {
    // rendere Api
    this.renderer.setStyle( this.el.nativeElement, "color", this.hinvHover )
  }
  @HostListener( 'mouseleave' ) onMouseExit() {
    // rendere Api
    this.renderer.setStyle( this.el.nativeElement, "color", 'green' );
  }
}
