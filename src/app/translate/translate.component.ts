import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  imports: [CommonModule, TranslateModule],
  templateUrl: './translate.component.html',
  standalone:true,
  styleUrl: './translate.component.scss',
 
})
export class TranslateComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.addLangs(['en', 'hi']);
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|hi/) ? browserLang : 'en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
  

}
