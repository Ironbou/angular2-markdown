import { Component } from '@angular/core';

import { MarkdownParserService } from './wiki.service';

@Component({
  selector: 'wiki',
  templateUrl: './wiki.component.html',
  providers: [ MarkdownParserService ],
})

export class WikiComponent {
  private wikiUrl: string;

  private test: string;

  private hide: boolean = false;

  convertedText: string;


  constructor(private md: MarkdownParserService) {

  }

  updateOutput(mdText: string) {
    this.convertedText = this.md.convert(mdText);
  }

  hideMe() {
    this.hide = false
    this.test= '';
  }

  showMe(nb: number) {
    this.hide = true;
    if (nb == 0) {
      this.wikiUrl = './assets/img/wiki/LogoNode.jpeg';
      this.test= 'Node.js est une plateforme logicielle libre et événementielle en JavaScript orientée vers les applications réseau qui doivent pouvoir monter en charge. \n\nNode.js contient une bibliothèque de serveur HTTP intégrée, ce qui rend possible de faire tourner un serveur web sans avoir besoin d\'un logiciel externe comme Apache ou lighttpd, et permettant de mieux contrôler la façon dont le serveur web fonctionne.';
      this.updateOutput(this.test)
    }
    else if (nb == 1) {
      this.wikiUrl = './assets/img/wiki/angular2.jpeg';
      this.test = 'AngularJS est un framework JavaScript libre et open-source développé par Google.\nAu travers d’Angular 2, Google cherche à faire table rase du passé, en remettant à plat de nombreux concepts présents dans Angular 1. \n\n Cette stratégie a été motivée par 4 principes fondateurs : \n\n    -Augmenter les performances \n\n    -Améliorer la productivité \n\n    -S’adapter au mobile \n\n    -Embrasser les nouveaux standards du Web';
      this.updateOutput(this.test)
    }
    else if (nb == 2) {
      this.wikiUrl = './assets/img/wiki/webpack.jpeg';
      this.test = 'Nativement, Webpack s\'occupe uniquement de ressources JavaScript. \nWebpack propose un système de loader qui permet de transformer tout et n\'importe quoi en JavaScript (mais pas que). Ainsi, tout est consommable en tant que module.';
      this.updateOutput(this.test)
    }
    else if (nb == 3) {
      this.wikiUrl = './assets/img/wiki/warning.jpeg';
      this.test= 'Attention \n===';
      this.updateOutput(this.test)
    }
    else if (nb == 4) {
      this.wikiUrl = './assets/img/wiki/danger.jpeg';
      this.test= '';
      this.updateOutput(this.test)
    }

  }

};