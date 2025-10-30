import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(
      HttpClientModule,
      MarkdownModule.forRoot()
    ),
  ]
};
