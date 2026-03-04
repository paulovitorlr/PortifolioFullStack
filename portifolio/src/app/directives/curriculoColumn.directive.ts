import { Directive, ElementRef, inject, OnInit } from "@angular/core";
       

@Directive({
    selector: '[curriculoCDirective]',
    standalone: true
})

export class CurriculoCDirective implements OnInit{
    el = inject(ElementRef).nativeElement as HTMLElement;

  ngOnInit(): void {
    //padrão de layout
    this.el.style.background = '#FFF'
    this.el.style.height = '300px';
    this.el.style.width = '700px';
    
    this.el.style.display = 'flex';
    this.el.style.flexDirection = 'colunm';
    this.el.style.alignItems = 'center';
    this.el.style.justifyContent = 'center';
    
    
    
    this.el.style.boxSizing = 'border-box';
    

    
}
}