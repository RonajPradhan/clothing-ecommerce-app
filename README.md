# Clothing E-commerce App

This project is an e-commerce application built with ReactJS as the frontend library, TypeScript for type checking, and Redux for global state management. The project uses SASS for styling and integrates with Google Firebase for data handling and user authentication. Stripe payment is also integrated to demonstrate how backend servers interact with the Stripe API for processing purchase requests.

Table of Contents
=================

* [Introduction](#Introduction)
* [Installation](#Installation)
* [Usage](#Usage)
* [Building-for-production](#Building-for-production)
* [Configuration](#Configuration)
* [Contributing](#Contributing)
* [Contact](#Contact)


## Introduction
This e-commerce app allows users to browse products, add them to the cart, and make purchases. Users can sign up and sign in to manage their orders and profiles. The app leverages Firebase for backend services and authentication, and integrates Stripe for handling payment processing.

## Installation

Follow these steps to set up the development environment.

**Prerequisites**
* Node.js (version 19 or higher)
* npm or yarn

**Installing**

1. Clone the repository:

```bash
git clone https://github.com/RonajPradhan/clothing-ecommerce-app.git
```
2. Install backend dependencies
 ```bash
yarn install
``` 
3. Navigate to the client folder
```bash
cd Client
```
4. Install frontend dependencies:
```bash
yarn install
```

## Usage

1. Start the development server:
```bash
yarn run dev
```

2. Open your browser and visit http://localhost:3000.

## Building-for-production

1. Build the project:
```bash
yarn build
```

2. The output will be in the `build` directory.

## Configuration

Configure the application with the following environment variables.

**Environment Variables**

Create a .env file in the root directory and add the following:

* STRIPE_SECRET_KEY = Your Stripe Secret Key

Create a .env file in the client directory and add the following:

* REACT_APP_FIREBASE_API_KEY: Your Firebase API key
* REACT_APP_FIREBASE_AUTH_DOMAIN: Your Firebase Auth domain
* REACT_APP_FIREBASE_PROJECT_ID: Your Firebase project ID
* REACT_APP_FIREBASE_STORAGE_BUCKET: Your Firebase storage bucket
* REACT_APP_FIREBASE_MESSAGING_SENDER_ID: Your Firebase messaging sender ID
* REACT_APP_FIREBASE_APP_ID: Your Firebase app ID
* REACT_APP_STRIPE_KEY: Your Stripe public key


## Contributing

Pull requests are welcome. For major changes.
Guidelines for contributing to the project.

1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

3. Make your changes.
4. Commit your changes:
```bash
git commit -m "Add feature: your-feature-name"
```

5. Push to the branch:
```bash
git push origin feature/your-feature-name
```

6. Create a Pull Request.


## Contact

For any questions or suggestions, feel free to contact me.

* Email: ronaj.pradhan@gmail.com
* GitHub: ronajPradhan
