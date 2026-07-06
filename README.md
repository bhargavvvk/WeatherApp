# WeatherApp

A simple Angular 21 application that retrieves and displays weather forecast data from a REST API. The application automatically deploys to GitHub Pages using GitHub Actions whenever changes are pushed to the `main` branch.

## Features

- Displays weather forecast data in a responsive table
- Calls a REST API using Angular HttpClient
- Shows loading and error states
- Refresh button to reload weather data
- Displays total forecast records
- Highlights temperatures above 30°C
- Automatic deployment using GitHub Actions
- Hosted on GitHub Pages

---

## Tech Stack

- Angular 21
- TypeScript
- CSS
- RxJS
- GitHub Actions
- GitHub Pages

---

## Angular Version

```bash
Angular CLI: 21.x
Angular: 21.x
```

---

## Installation Steps

### 1. Clone the repository

```bash
git clone https://github.com/bhargavvvk/WeatherApp.git
```

### 2. Navigate to the project

```bash
cd WeatherApp
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the application

```bash
ng serve
```

Open your browser and navigate to:

```
http://localhost:4200
```

---

## Build

```bash
ng build
```

---

## Deployment

This project uses **GitHub Actions** for Continuous Integration and Continuous Deployment (CI/CD).

Every push to the `main` branch automatically:

- Checks out the source code
- Sets up Node.js
- Installs dependencies
- Builds the Angular application
- Deploys the application to GitHub Pages

---

## Deployment URL

https://bhargavvvk.github.io/WeatherApp/

---

## Project Structure

```
src
│
├── app
│   ├── models
│   ├── pages
│   ├── services
│   └── environments
│
├── assets
└── styles.css
```

---

## Author

Bhargav Kokkula
