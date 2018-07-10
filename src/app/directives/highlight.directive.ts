import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector : '[apphighlight]'
})

export class HighlightDirective{

@Input('myColor') myColor : string;

@HostBinding('style.backgroundColor') bgColor : string;
@HostListener('mouseleave') mouseleave(){
    //this.elementRef.nativeElement.style.backgroundColor = "transparent";
    this.bgColor = "transparent";
}

@HostListener('mouseenter') mouseenter(){
    //this.elementRef.nativeElement.style.backgroundColor = "aqua";
    this.bgColor = this.myColor;

}

constructor(private elementRef : ElementRef){
        console.log(this.elementRef.nativeElement);
        //this.elementRef.nativeElement.style.backgroundColor = "aqua";
    }
}