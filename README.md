# EKI Hääldusharjutused

This project was initally generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1 and updated to [Angular CLI](https://github.com/angular/angular-cli) version 21.2.

## Production build

The repository contains one committed production template file:

- `src/environments/environment.prod.example.ts`

```
domainHost - API host
baseUrl - API main url
feedbackHost - to where a user feedback is sent
audioMainUrl - from where application audio files are coming
imageMainUrl - from where application image files are coming
sonaveebHost - link to Sõnaveeb live environment
```

Production build uses an untracked deployment file:

- `src/environments/environment.prod.local.ts`

Create it by copying the committed example:

```bash
cp src/environments/environment.prod.example.ts src/environments/environment.prod.local.ts
```

`environment.prod.local.ts` is in `.gitignore` and should not be committed.

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
sudo npm install -g @angular/cli@21.2.8
```

### Cloning the Repository

```bash
mkdir ehh
# NB! Each branch name corresponds to a software version number (e.g 1.40.0).
git clone --single-branch --branch x.x.x  https://github.com/keeleinstituut/ehh.git
```

### Installing Project Dependencies

```bash
cd ehh
npm install
```

### Configuring Environment Variables

Dummy/default values are committed in:

- `src/environments/environment.ts` for local development

Production template is committed in:

- `src/environments/environment.prod.example.ts`

Deployment-specific real values should be placed in:

- `src/environments/environment.prod.local.ts`

Start from:

- `src/environments/environment.prod.example.ts`

Available values:

- `domainHost`: API host URL.
- `baseUrl`: Main API endpoint.
- `feedbackHost`: HOST where user feedback is sent.
- `audioMainUrl`: URL for audio file sources.
- `imageMainUrl`: URL for image file sources.
- `sonaveebHost`: Link to the live environment of Sõnaveeb.

### Building the Application

Run the following command to build the development configuration:

```bash
npm run build:dev
```

Run the following command to build the test configuration:

```bash
npm run build:test
```

Run the following command to build the production configuration:

```bash
npm run build:prod
```

When serving from a subdirectory, you must specify the base URL using the --base-href flag:

```bash
ng build --configuration prod --base-href /pronunciation-exercises/
```

**Explanation:**

- `ng build`: Compiles the application into an output directory.
- `--configuration dev`: Uses `environment.ts`
- `--configuration test`: Uses `environment.test.ts`
- `--configuration prod`: Uses `environment.prod.local.ts`

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

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Docker

**docker build**

```bash
docker build \
  --build-arg ENVIRONMENT=dev \
  -t pronunciation-exercises .
```

Supported Docker build selectors:

- `ENVIRONMENT=dev`
  Uses `src/environments/environment.ts`

- `ENVIRONMENT=test`
  Uses `src/environments/environment.test.ts`

- `ENVIRONMENT=prod`
  Uses `src/environments/environment.prod.local.ts` from your build context

Example with real local deployment values:

```bash
cp src/environments/environment.prod.example.ts src/environments/environment.prod.local.ts
docker build --build-arg ENVIRONMENT=prod -t pronunciation-exercises .
```

The Docker build runs Angular with `--configuration=${ENVIRONMENT}`.

Use Docker build arguments to choose the Angular configuration. Supported values are `dev`, `test`, and `prod`. Do not expect runtime container environment variables to change the already built Angular app.

**docker run**

```bash
docker run -d -p 8080:80 --name pronunciation-exercises pronunciation-exercises
```
