import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/store/reducers/counter.reducers';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { HttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  ...appConfig, 
  providers: [
    ...appConfig.providers, 
    provideStore({ count: counterReducer }), 
  ],
})
  .catch((err) => console.error(err));



















//   import { bootstrapApplication } from '@angular/platform-browser';
// import { provideStore } from '@ngrx/store';
// import { counterReducer } from './app/store/reducers/counter.reducers';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { HttpClient, provideHttpClient } from '@angular/common/http';
// import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { importProvidersFrom } from '@angular/core';

// // Function to create a translation loader
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// bootstrapApplication(AppComponent, {
//   ...appConfig,
//   providers: [
//     ...appConfig.providers,
//     provideHttpClient(),
//     provideStore({ count: counterReducer }),
//     importProvidersFrom(
//       TranslateModule.forRoot({
//         loader: {
//           provide: TranslateLoader,
//           useFactory: createTranslateLoader,
//           deps: [HttpClient],
//         },
//       })
//     ),
//   ],
// })
//   .catch((err) => console.error(err));



















 
