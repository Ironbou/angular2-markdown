import { Component, ViewChild } from '@angular/core';

import {
  WikiService,
  FontStyle,
  FontSize
} from "./index";

import { Converter } from "showdown";
var showdown = require('showdown');


@Component({
  selector: 'wiki',
  templateUrl: './wiki.component.html',
  providers: [WikiService],
})

export class WikiComponent {
  private test: string = "";
  private textLink: string = "";
  private hide: boolean = false;
  private hidemanuel: boolean = true;
  private hideauto: boolean = false;
  private convertedText: string;
  private libconverter: number = 0;
  private converter = new showdown.Converter();
  private html: string;

  @ViewChild('t') userProfile: any;

  constructor(
    private md: WikiService) {
  }


  removeTitle() {
    var character = /#/gi;
    // gi = global and ignore, ce qui permet de remplacer pour chaque '#'
    var selection = this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd);
    //la variable recupere le texte selectionné
    var newselection = selection.replace(character, '');
    newselection = newselection.replace(' ','')
    
    //la fonction replace va remplacer par du vide, tout les caracteres defini dans la variable 'character'
    this.test = this.test.slice(0, this.userProfile.nativeElement.selectionStart) +
    newselection +
    this.test.slice(this.userProfile.nativeElement.selectionEnd, this.test.length);
  }

  addTitle(titleSize: FontSize) {
    var size: string;
    if (titleSize == FontSize.Title1) {
      size = '#' + ' ';
    }
    if (titleSize == FontSize.Title2) {
      size = '##' + ' ';
    }
    if (titleSize == FontSize.Title3) {
      size = '###' + ' ';
    }
    if (titleSize == FontSize.Title4) {
      size = '####' + ' ';
    }
    if (titleSize == FontSize.Title5) {
      size = '#####' + ' ';
    }
    if (titleSize == FontSize.Title6) {
      size = '######' + ' ';
    }
    this.test = this.test.slice(0, this.userProfile.nativeElement.selectionStart) + size +
      this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) +
      this.test.slice(this.userProfile.nativeElement.selectionEnd, this.test.length);
    this.updateOutput(this.test);
  }

  addLink() {
    this.test = this.test.slice(0, this.userProfile.nativeElement.selectionStart) + '[' +
      this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + '](' + this.textLink + ')' +
      this.test.slice(this.userProfile.nativeElement.selectionEnd, this.test.length);
    this.updateOutput(this.test);
    this.textLink = '';
  }

  addCharacters(fontnumber: number) {
    var delimiter: string;
    var nb: number;
    if (fontnumber == FontStyle.Bold) {
      delimiter = '**';
      nb = 2;
    }
    if (fontnumber == FontStyle.Italic) {
      delimiter = '*';
      nb = 1;
    }
    if (fontnumber == FontStyle.Strikethrough) {
      delimiter = '~~';
      nb = 2;
    }
    if (this.test.slice(this.userProfile.nativeElement.selectionStart - nb, this.userProfile.nativeElement.selectionEnd + nb) == delimiter +
      this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + delimiter) {
      this.test = this.test.slice(0, this.userProfile.nativeElement.selectionStart - nb) + '' +
        this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + '' +
        this.test.slice(this.userProfile.nativeElement.selectionEnd + nb, this.test.length);
      // Si le texte selectionné + nb caractere avant et apres sont égal a 'delimiter textSelectionné delimiter', le code supprime les 'delimiter'
    }
    else {
      this.test = this.test.slice(0, this.userProfile.nativeElement.selectionStart) + delimiter +
        this.test.slice(this.userProfile.nativeElement.selectionStart, this.userProfile.nativeElement.selectionEnd) + delimiter +
        this.test.slice(this.userProfile.nativeElement.selectionEnd, this.test.length);
      // Sinon il ajoute les delimiter avant et apres le texte selectioné
    }
  }

  onSelect(font: FontStyle) {
    this.addCharacters(font);
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

  markupLanguage(nbr: number) {
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