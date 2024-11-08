# Formula One Challenge

## Project Overview

This project is a web application designed to provide detailed information about Formula One races, seasons, and race details. The application is built using React and utilizes various libraries for routing, and chart rendering.

## How to Run the Application

To run the application, follow these steps:

1. **Install Dependencies**: Ensure you have Node.js installed. Navigate to the project directory and run the following command to install all dependencies:

   ```bash
   npm install
   ```

2. **Start the Development Server**: Run the following command to start the development server using Vite:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

## How to Run Unit Tests

This project uses Jest for unit testing. To run the tests, execute the following command:

```bash
npm run test
```
## How to Generate Documentation

To generate documentation for the application, run the following command:
```bash
npm run docs
```

## Project Folder Structure

Below is the folder structure of the project:

```
.
├── eslint.config.js
├── folder-structure.txt
├── index.html                   # Entry HTML file for the application
├── jest.config.cjs              # Jest configuration for running unit tests
├── package.json
├── package-lock.json
├── public                       # Public assets like images that can be referenced in the app
│   └── formula1.jpg
├── README.md
├── src                          # Source folder containing application code
│   ├── App.jsx                  # Main React component of the application
│   ├── components               # Folder containing reusable React components
│   │   ├── common               # Commonly used components shared across the app
│   │   │   ├── CardListView.jsx
│   │   │   ├── ControlBar
│   │   │   │   ├── CardListSwitcher.jsx
│   │   │   │   ├── ControlBar.jsx
│   │   │   │   └── PageSizeDropdown.jsx
│   │   │   ├── Error.jsx
│   │   │   ├── ItemDisplay     # Components for displaying item attributes and actions
│   │   │   │   ├── ActionDisplay.jsx
│   │   │   │   └── AttributeDisplay.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── utils.js        # Utility functions used by common components
│   │   ├── Race                # Components related to Races
│   │   │   ├── card            # Card view for Race
│   │   │   │   ├── Container.jsx
│   │   │   │   └── Item.jsx
│   │   │   ├── common          # Common components specific to Races
│   │   │   │   ├── DateDisplay.jsx
│   │   │   │   └── PushPin.jsx
│   │   │   ├── list            # List view for Race
│   │   │   │   ├── Container.jsx
│   │   │   │   └── Item.jsx
│   │   │   └── RaceWrapper.jsx
│   │   ├── RaceDetails         # Components related to Race Details
│   │   │   ├── PerformanceChart.jsx
│   │   │   ├── RaceDetailsList.jsx
│   │   │   ├── RaceDetailsWrapper.jsx
│   │   │   ├── Search.jsx
│   │   │   ├── utils.js        # Utility functions for Race Details
│   │   │   └── utils.spec.js
│   │   └── Season              # Components related to Seasons
│   │       ├── card
│   │       │   ├── Container.jsx
│   │       │   └── Item.jsx
│   │       ├── list
│   │       │   ├── Container.jsx
│   │       │   └── Item.jsx
│   │       └── SeasonWrapper.jsx
│   ├── context                 # Context API implementations for state management
│   │   ├── constants.js
│   │   ├── Race                # Context and state management for Races
│   │   │   ├── context.js
│   │   │   ├── reducer.js
│   │   │   ├── state.jsx
│   │   │   └── types.js
│   │   ├── RaceDetails         # Context and state management for Race details
│   │   │   ├── context.js
│   │   │   ├── reducer.js
│   │   │   ├── state.jsx
│   │   │   └── types.js
│   │   └── Season              # Context and state management for Season
│   │       ├── context.js
│   │       ├── reducer.js
│   │       ├── state.jsx
│   │       └── types.js
│   ├── main.css                # Main CSS file for styling the application
│   ├── main.jsx                # Main entry point for the React application
│   └── pages                   # Page components for different routes
│       ├── not-found.jsx
│       ├── race-details.jsx
│       ├── race.jsx
│       └── season.jsx
└── vite.config.js              # Vite configuration file for the development server
```
