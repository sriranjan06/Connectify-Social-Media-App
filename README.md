# Connectify

Connectify is a full-stack social media web application built using Next.js for the frontend and Spring Boot for the backend. The application allows users to authenticate via Google, create posts, and view posts in a feed.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Environment Configuration](#environment-configuration)
- [Usage](#usage)

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
1. Clone the repository:
    ```bash
    git clone https://github.com/sriranjan06/Connectify-Social-Media-App.git
    ```

2. Navigate to the frontend directory:
    ```bash
    cd connectify-ui
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Install Tailwind CSS:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

5. Configure Tailwind CSS:
    - Update `tailwind.config.js` with the following:
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

    - Add Tailwind CSS directives to `globals.css`:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

6. Set up `.env.local`:
    Create a `.env.local` file in the `connectify-ui` directory and add the following environment variables:
    ```env
    NEXTAUTH_SECRET=your-generated-secret
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    NEXTAUTH_URL=http://localhost:3000
    ```

    Replace `your-generated-secret`, `your-google-client-id`, and `your-google-client-secret` with the actual values from your Google Cloud Console.

7. Start the frontend application:
    ```bash
    npm run dev
    ```

### Backend Setup
1. Navigate to the backend directory:
    ```bash
    cd connectify-api
    ```

2. Open `application.properties` and configure your MySQL database connection:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/connectify_db?useSSL=false&serverTimezone=UTC
    spring.datasource.username=root
    spring.datasource.password=admin@123
    spring.jpa.hibernate.ddl-auto=update
    ```

3. Create the database schema:
- Open MySQL Workbench or any MySQL client.
- Run the following SQL command to create the schema:
    ```sql
    CREATE DATABASE connectify_db;
    ```

4. Build and run the backend application:
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

## Environment Configuration
- **Frontend (`.env.local`):**
    ```env
    NEXTAUTH_SECRET=your-generated-secret
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    NEXTAUTH_URL=http://localhost:3000
    ```

- **Backend (application.properties):**
    ```env
    spring.datasource.url=jdbc:mysql://localhost:3306/connectify_db?useSSL=false&serverTimezone=UTC
    spring.datasource.username=root
    spring.datasource.password=admin@123
    spring.jpa.hibernate.ddl-auto=update
    ```

## Usage
- Open your browser and navigate to http://localhost:3000 to use the application.
- Sign in using Google.
- reate, view, and delete posts.