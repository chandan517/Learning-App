import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/store/reducers/counter.reducers';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig, 
  providers: [
    ...appConfig.providers, 
    provideStore({ count: counterReducer }), 
  ],
})
  .catch((err) => console.error(err));


  