import { Directive, ElementRef, inject, OnInit } from "@angular/core";
import { elementAt } from "rxjs";       

@Directive({
    selector: '[apresentacaoDirective]',
    standalone: true
})

export class ApresentacaoDirective implements OnInit{
    el = inject(ElementRef).nativeElement as HTMLElement;

  ngOnInit(): void {
    //padrão de layout
   this.el.style.background =
  'linear-gradient(to top, #ffffff 10%, #F4ECE6 10%)';
    this.el.style.height = '500px';
    this.el.style.width = '300px';
    
    this.el.style.display = 'flex';
    this.el.style.flexDirection = 'column';
    this.el.style.alignItems = 'center';
    this.el.style.justifyContent = 'center';
    this.el.style.padding = '16px';
    this.el.style.boxSizing = 'border-box';
    this.el.style.gap = '23px';


    //estilo da imagem interna
    const img = this.el.querySelector("img") as HTMLImageElement;
    if (img) {
        img.style.maxWidth = "70%";
        img.style.height = "auto";
        
    }
}
}