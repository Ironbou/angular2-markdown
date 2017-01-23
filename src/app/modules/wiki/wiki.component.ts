import { Component, ViewChild } from '@angular/core';
import { LayoutEngine } from './wiki.module';

import { MarkdownParserService } from './wiki.service';

import { Converter } from "showdown";
var showdown = require('showdown');



@Component({
  selector: 'wiki',
  templateUrl: './wiki.component.html',
  providers: [MarkdownParserService],
})

export class WikiComponent {

  private test: string = "";
  private hide: boolean = false;

  private hidemanuel: boolean = true;
  private hideauto: boolean = false;

  private convertedText: string;

  private libconverter: number = 0;

  private converter = new showdown.Converter();
  private html: string;

  @ViewChild('t') userProfile: any;

  constructor(private md: MarkdownParserService) {

  }

  onSelect(font: LayoutEngine.DocumentFormat) {
    console.log(font);
    if (font == LayoutEngine.DocumentFormat.Bold) {
      if (this.test.slice(this.userProfile.nativeElement.selectionStart - 2, this.userProfile.nativeElement.selectionEnd + 2) == '**' + this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + '**') {
        this.test = this.test.slice(0, this.userProfile.nativeElement.selectionStart - 2) + '' + this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + '' + this.test.slice(this.userProfile.nativeElement.selectionEnd + 2, this.test.length);
      }
      else {
        this.test = this.test.slice(0, this.userProfile.nativeElement.selectionStart) + '**' + this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + '**' + this.test.slice(this.userProfile.nativeElement.selectionEnd, 9999);
      }
    }
    if (font == LayoutEngine.DocumentFormat.Italic) {
      if (this.test.slice(this.userProfile.nativeElement.selectionStart - 2, this.userProfile.nativeElement.selectionEnd + 2) == '*' + this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + '*') {
        this.test = this.test.slice(0, this.userProfile.nativeElement.selectionStart - 2) + '' + this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + '' + this.test.slice(this.userProfile.nativeElement.selectionEnd + 2, 9999);
      }
      else {
        this.test = this.test.slice(0, this.userProfile.nativeElement.selectionStart) + '*' + this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + '*' + this.test.slice(this.userProfile.nativeElement.selectionEnd, 9999);
      }
    }
    if (font == LayoutEngine.DocumentFormat.Strikethrough) {
      if (this.test.slice(this.userProfile.nativeElement.selectionStart - 2, this.userProfile.nativeElement.selectionEnd + 2) == '~~' + this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + '~~') {
        this.test = this.test.slice(0, this.userProfile.nativeElement.selectionStart - 2) + '' + this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + '' + this.test.slice(this.userProfile.nativeElement.selectionEnd + 2, 9999);
      }
      else {
        this.test = this.test.slice(0, this.userProfile.nativeElement.selectionStart) + '~~' + this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + '~~' + this.test.slice(this.userProfile.nativeElement.selectionEnd, 9999);
      }
    }
    this.updateOutput(this.test)
  }

  updateOutput(mdText: string) {
    this.convertedText = this.md.convert(mdText);
    this.html = this.converter.makeHtml(mdText);
  }

  hidediv() {
    if (this.hidemanuel == true) {
      this.hidemanuel = false
      this.hideauto = true
    } else if (this.hidemanuel == false) {
      this.hidemanuel = true
      this.hideauto = false
      this.updateOutput(this.test)
    }

  }

  hideMe() {
    this.hide = false
    this.test = '';
  }

  libShow(nbr: number) {
    if (nbr == 0) {
      this.libconverter = nbr;
    }
    else if (nbr == 1) {
      this.libconverter = nbr;
    }
  }

  showMe(nb: number) {
    this.hide = true;
    if (nb == 0) {
      this.test = 'Node.js est une plateforme logicielle libre et événementielle en JavaScript orientée vers les applications réseau qui doivent pouvoir monter en charge. \n\nNode.js contient une bibliothèque de serveur HTTP intégrée, ce qui rend possible de faire tourner un serveur web sans avoir besoin d\'un logiciel externe comme Apache ou lighttpd, et permettant de mieux contrôler la façon dont le serveur web fonctionne.';
      this.updateOutput(this.test)
    }
    else if (nb == 1) {
      this.test = 'Angular\n===\nAngularJS est un framework JavaScript libre et open-source développé par Google.\nAu travers d’Angular 2, Google cherche à faire table rase du passé, en remettant à plat de nombreux concepts présents dans Angular 1. \n\nCette stratégie a été motivée par 4 principes fondateurs : \n\n1. Augmenter les performances \n\n2. Améliorer la productivité \n\n3. S’adapter au mobile \n\n4. Embrasser les nouveaux standards du Web';
      this.updateOutput(this.test)
    }
    else if (nb == 2) {
      this.test = 'Nativement, Webpack s\'occupe uniquement de ressources JavaScript. \nWebpack propose un système de loader qui permet de transformer tout et n\'importe quoi en JavaScript (mais pas que). Ainsi, tout est consommable en tant que module.';
      this.updateOutput(this.test)
    }
    else if (nb == 3) {
      this.test = 'Attention \n===';
      this.updateOutput(this.test)
    }
    else if (nb == 4) {
      this.test = '';
      this.updateOutput(this.test)
    }

  }

};