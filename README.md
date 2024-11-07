# EKI Hääldusharjutused

This project was initally generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2. and updated to [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10

## Production build

Build LIVE application from **master** branch.

Before LIVE build change application environment variables in src/environments/environment.prod.ts
domainHost - API host
baseUrl - API main url
feedbackHost - to where a user feedback is sent
audioMainUrl - from where application audio files are coming
imageMainUrl - from where application image files are coming
sonaveebHost - link to Sõnaveeb live environment

Run `ng build --configuration production` to build the project for production. The build artifacts will be stored in the `dist/` directory.

## Detailed Instructions

### Prerequisites

Before building the Angular application, ensure you have the following installed:

- [Node.js](https://nodejs.org): JavaScript runtime environment.
- npm (Node Package Manager): Comes with Node.js.
- [Angular CLI](https://github.com/angular/angular-cli): Command-line interface for Angular.

### Installing Node.js and npm (Ubuntu)

```bash
sudo apt update
sudo apt install nodejs npm
```

### Installing Angular CLI (Ubuntu)

```bash
sudo npm install -g @angular/cli@18.2.10
```

### Cloning the Repository

```bash
mkdir ehh
# NB! code for production is located in master branch
git clone --single-branch --branch master  https://github.com/keeleinstituut/ehh.git
```

### Installing Project Dependencies

```bash
cd ehh
npm install
```

### Configuring Environment Variables

Before building for production, update the environment variables in `src/environments/environment.prod.ts`:

- `domainHost`: API host URL.
- `baseUrl`: Main API endpoint.
- `feedbackHost`: HOST where user feedback is sent.
- `audioMainUrl`: URL for audio file sources.
- `imageMainUrl`: URL for image file sources.
- `sonaveebHost`: Link to the live environment of Sõnaveeb.

### Building the Application

Run the following command to build the project for production:

```bash
ng build --configuration production
```

When serving from a subdirectory, you must specify the base URL using the --base-href flag:

```bash
ng build --configuration production --base-href /pronunciation-exercises/
```

**Explanation:**

- `ng build`: Compiles the application into an output directory.
- `--configuration production`: Uses the production environment settings.

**Build Output:**

The build artifacts will be stored in the `dist/` directory.
This directory contains the compiled files ready for deployment.

### Deploying the Application

#### Apache

- Copy the Angular build files from the `dist/pronunciation-exercises` directory to the `/opt/pronunciation-exercises` directory on your server.
- Modify the Apache Configuration.
- Restart the Apache service to apply the changes.

Example configuration:

```apache

Alias "/ww/pronunciation-exercises" "/opt/pronunciation-exercises"

<Directory "/opt/pronunciation-exercises">
Order Allow,Deny
Allow from all
Require all granted
</Directory>


<Location "/ww/pronunciation-exercises">
ProxyPass "!"
</Location>
```

#### Other servers

https://v17.angular.io/guide/deployment#server-configuration

## Docker

**docker build**

```bash
docker build -t pronunciation-exercises  .
```

**docker run**

```bash
docker run -d -p 8080:80 --name pronunciation-exercises pronunciation-exercises
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
