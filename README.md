# EkiPronGame

This project was initally generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2. and  updated to [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10

## Production build

Build LIVE application from **master** branch.  

Before LIVE build change application environment variables in src/environments/environment.prod.ts
domainHost - API host
baseUrl - API main url
feedbackHost - to where a user feedback is sent
audioMainUrl - from where application audio files are coming
imageMainUrl - from where application image files are coming
sonaveebHost - link to Sõnaveeb live environment

Run `ng build  -c=production` to build the project for production. The build artifacts will be stored in the `dist/` directory.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
