import { Component } from '@angular/core';

import { MarkdownParserService } from './markdown.service';

@Component({
  selector: 'markdown',
  templateUrl: './markdown.component.html',
  providers: [ MarkdownParserService ],
})

export class markdownComponent {
  convertedText: string;

  constructor(private md: MarkdownParserService) {

  }

  updateOutput(mdText: string) {
    this.convertedText = this.md.convert(mdText);
  }

}
