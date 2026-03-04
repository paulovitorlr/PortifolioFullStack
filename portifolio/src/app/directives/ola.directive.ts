import { Directive, ElementRef, inject, OnInit } from "@angular/core";      

@Directive({
    selector: '[oladirective]',
    standalone: true
})

export class OlaDirective implements OnInit{
    el = inject(ElementRef).nativeElement as HTMLElement;

  ngOnInit(): void {
    //padrão de layout
   
    this.el.style.height = '500px';
    this.el.style.width = '300px';
    
    
    this.el.style.display = 'flex';
    this.el.style.flexDirection = 'column';
    this.el.style.alignItems = 'center';
    this.el.style.justifyContent = 'center';
    this.el.style.padding = '16px';
    this.el.style.boxSizing = 'border-box';
    this.el.style.gap = '23px';


    
    
}
}