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

# Technical Approach and Architectural Decisions

The Formula One Challenge project is a React-based application. The core technical stack includes React for building the UI, Context API for state management, and Vite for an optimized development experience.

## 1. Tech Stack

- **React**: Chosen for its component-driven architecture, enabling reusable components for various parts of the application. The project follows a functional programming paradigm using hooks and the Context API for state management.
- **Vite**: Used for its fast development environment, with built-in support for hot module replacement (HMR).
- **MUI (Material UI)**: MUI components are used for building responsive and accessible UI elements.
- **Chart.js & react-chartjs-2**: These libraries are integrated to render interactive and visually appealing charts.
- **Axios**: Utilized for API requests to the Ergast API.
- **Jest & React Testing Library**: The application is unit tested using Jest.
- **ESLint & Prettier**: ESLint is configured for static code analysis based on Airbnb style guide. 
- **JSDoc**: Used for generating documentation for all components and utilities.

## 2. Folder Structure

The project is organized to maintain a clean and scalable architecture. Features are encapsulated in their respective directories within `src`, which include:

- **components**: Contains reusable UI components such as CardListView, ControlBar, and Error. These components are designed to be modular, promoting reusability across different views (card view, list view).
- **context**: Implements the Context API to manage and share state across the application. Separate context files are used for handling the state of races, race details, and seasons.
- **pages**: Contains page-level components that correspond to different routes in the application (e.g., race-details, season).

## 3. State Management & Data Flow

- **The Context API** is used for global state management, ensuring that data such as race details, seasons, and user preferences are accessible across the application.
- **Reducers** handle actions dispatched from components, centralizing business logic and making the state predictable.
- **Axios** is used within the context to fetch data asynchronously from the Ergast API and the state is updated upon successful data retrieval.

## 4. UI/UX Design

- **MUI** components are the primary building blocks for the UI, providing pre-built, customizable components like buttons, tables, and cards, which contribute to a consistent and polished design.
- The **Chart.js** library integrates seamlessly with React via **react-chartjs-2** to display interactive performance data in a user-friendly format.

## 5. Scalability and Maintainability

- The application is structured to easily accommodate new features. Each major feature (e.g., Seasons, Races) is contained within its folder, with components, contexts, and reducers specific to that feature.
- Utility functions are abstracted into separate files within component folders.
- The use of reusable components and a clear separation between presentation and business logic.

## 6. Testing and Documentation

- **Jest** is used to write unit tests to ensure that components and functions behave as expected.
- **JSDoc** is integrated into the project to generate documentation, providing clear descriptions of the components, functions, and utilities.


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
