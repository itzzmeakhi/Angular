import { Directive, ElementRef, HostListener, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
    selector : '[hoverOnMe]'
})
export class HoverDirective implements OnInit {

    @Input() hoverText : string;
    div: HTMLBodyElement;

    constructor(private el : ElementRef,
               private renderer : Renderer2) {}

    ngOnInit() {
    }

    @HostListener('mouseenter') onHover() {
        this.div = this.renderer.createElement('div');
        const text = this.renderer.createText(this.hoverText);
        this.renderer.appendChild(this.div, text);
        this.renderer.appendChild(this.el.nativeElement, this.div);
    }

    @HostListener('mouseout') onExit() {
        this.renderer.removeChild(this.el.nativeElement, this.div);
    }
   
    

}