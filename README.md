# Thomas Er's Book Search Engine

## Description

This Book Search Engine is a full-stack application showcasing my skills in building and refactoring a Google Books API search engine. Originally built with a RESTful API, it has been refactored to use a GraphQL API built with Apollo Server. The application demonstrates proficiency in the MERN stack (MongoDB, Express.js, React, Node.js), featuring a React front end, MongoDB database, and Node.js/Express.js server and API.

![Application Screenshot](./client/src/assets/Capture.png)

## Technology Used

| Technology    | Description                                                   |
|---------------|---------------------------------------------------------------|
| MERN Stack    | MongoDB, Express.js, React, Node.js for full-stack development.|
| GraphQL       | A query language for APIs.                                    |
| Apollo Server | A community-driven GraphQL server.                            |
| JWT           | JSON Web Tokens for secure data transfer.                     |
| React Router  | Declarative routing for React applications.                   |

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Deployment](#deployment)
- [Author Info](#author-info)
- [License](#license)

## Installation

To install this project:

1. Clone the repository: `git clone git@github.com:nba251522/BookSearchEngine.git`
2. Navigate to the project directory.
3. Run `npm install` at the root directory to install dependencies for the server.
4. Navigate to the client directory and run `npm install` to install dependencies for the client.

## Usage

To start the application:

1. Run `npm start` from the root directory to start the server.
2. In a separate terminal, navigate to the client directory and run `npm start`.
3. The application will open in your default web browser.

## Features

- **GraphQL API**: Utilizes GraphQL for efficient and flexible queries to the Google Books API.
- **User Authentication**: Secure user authentication and token-based system using JSON Web Tokens.
- **Responsive Design**: A clean, responsive user interface for seamless experience across devices.
- **Book Search Functionality**: Allows users to search for new books and save them for future reference.
- **Saved Books**: Users can view their saved books and manage their list.

## Deployment

This application is suitable for deployment on platforms like Heroku, Netlify, or similar. Ensure environment variables and build settings are configured according to the deployment platform's documentation.

## Author Info

**Thomas Er**
- [LinkedIn](https://www.linkedin.com/in/thomas-er-9b77321b9)
- [GitHub](https://github.com/nba251522)
- [Portfolio](https://nba251522.github.io/thomas-er-portfolio/)

## License

This project is licensed under the terms of the MIT License.