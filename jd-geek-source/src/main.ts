import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { colors } from './constants/color';

if (environment.production) {
  enableProdMode();
  document.body.style.backgroundColor = colors.primary;
} else {
  document.body.style.backgroundColor = colors.primary;
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
