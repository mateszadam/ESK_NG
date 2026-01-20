# ESK_NG - ESK Ménfőcsanak Labdarúgó Egyesület

This is the source code for the official website of **Sza-Bi Qualit Ménfőcsanak Labdarúgó Egyesület**. The application is built using **Angular** and **Ionic**, featuring automated data updates for match schedules.

## Project Overview

- **Data Integration**: Python automation to scrape match data from [MLSZ Adatbank](https://adatbank.mlsz.hu).
- **CI/CD**: GitHub Actions workflow deals with data updates, building, and FTP deployment.

## 🚀 Key Features

- **Dynamic Schedule**: Match data is automatically fetched and displayed.
- **Sections**:
  - **Csapatok**: Team information for various age groups.
  - **Eredmények/Meccsek**: Match results and upcoming schedules.
  - **Dokumentumok**: Public reports and transparency documents.
  - **Galéria/Média**: Photos and event archives.
  - **Kapcsolat**: Contact details and location.

## Local Development

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm**
- **Python 3.x** (for running the data scraper)

## Deployment Workflow

The project is configured with **GitHub Actions** (`.github/workflows/deploy.yml`) to handle automated deployments:

1.  **Triggers**:
    - Push to the `master` branch.
    - Scheduled runs (Wednesdays and Sundays at 22:00 UTC) to ensure match results are up-to-date.
2.  **Steps**:
    - checkouts code.
    - Runs `main.py` to fetch fresh data.
    - Builds the Angular application.
    - Deploys the artifacts to the production server via FTP.

## 🛠️Tech Stack

- **Framework**: [Angular](https://angular.io/)
- **UI Library**: [Ionic Framework](https://ionicframework.com/)
- **Scraping**: Python, [BeautifulSoup4](https://pypi.org/project/beautifulsoup4/), [Requests](https://pypi.org/project/requests/)
- **Tooling**: Angular CLI, TypeScript
