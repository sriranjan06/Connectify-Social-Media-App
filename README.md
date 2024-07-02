# Connectify

Connectify is a full-stack social media web application built using Next.js for the frontend and Spring Boot for the backend. The application allows users to authenticate via Google, create posts, and view posts in a feed.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication with Google
- Create, view, and delete posts
- Responsive design using Tailwind CSS
- State management with Redux Toolkit

## Tech Stack
**Frontend:**
- Next.js
- Tailwind CSS
- React Icons
- NextAuth.js
- Axios
- React Redux

**Backend:**
- Spring Boot
- Spring Data JPA
- MySQL
- Lombok

## Installation

### Prerequisites
- Node.js
- npm
- Java 17
- Maven
- MySQL

### Frontend Setup
1. Clone the repository
    ```bash
    git clone https://github.com/sriranjan06/Connectify-Social-Media-App.git
    ```

2. Navigate to the frontend directory
    ```bash
    cd connectify-ui
    ```

3. Install dependencies
    ```bash
    npm install
    ```

4. Install Tailwind CSS
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

5. Configure Tailwind CSS
    - Add the following to `tailwind.config.js`
    ```javascript
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

    - Add Tailwind CSS directives to `globals.css`
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

6. Start the frontend application
    ```bash
    npm run dev
    ```

### Backend Setup
1. Navigate to the backend directory
    ```bash
    cd connectify-api
    ```

2. Open `application.properties` and configure your MySQL database connection
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/connectify_db
    spring.datasource.username=root
    spring.datasource.password=password
    spring.jpa.hibernate.ddl-auto=update
    ```

3. Create the database schema
    - Open MySQL Workbench and create a new schema named `connectify_db`

4. Build and run the backend application
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

## Usage
- Open your browser and navigate to `http://localhost:3000` to use the application
- Sign in using Google
- Create, view, and delete posts

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
