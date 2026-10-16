
# Food Delivery App — Backend API

A RESTful backend powering a full-stack food delivery application, built with Node.js, Express.js, and MongoDB. It provides the core server-side functionality for user authentication, food ordering workflows, database operations, and payment integration.

The backend is designed to support communication between the frontend and the server, handle application data, and integrate payment processing through Paystack.

**Live API:** https://delivey-app-backend.vercel.app

**Frontend Demo:** https://food-delivery-app-two-sigma.vercel.app

**Developer:** [Amazing-Tech1](https://github.com/Amazing-Tech1)

## Features

- **RESTful API:** Endpoints for frontend-to-backend communication.
- **Authentication:** Server-side user authentication and access control.
- **Database Integration:** MongoDB integration using Mongoose.
- **Food Ordering Workflows:** Backend support for food delivery application operations.
- **Payment Integration:** Paystack integration for payment processing.
- **Environment-Based Configuration:** Configuration through environment variables.
- **Cross-Origin Resource Sharing:** CORS configuration for authorized frontend origins.
- **Cloud Deployment:** Deployed API accessible through Vercel.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** JavaScript
- **Database:** MongoDB
- **ODM:** Mongoose
- **Payments:** Paystack
- **API Style:** REST
- **Deployment:** Vercel

## Architecture

The backend acts as the application server between the frontend and its supporting services.

1. The frontend sends HTTP requests to the API.
2. Express routes requests to the appropriate server-side handlers.
3. The backend validates requests and performs the required operations.
4. Mongoose communicates with MongoDB for data persistence.
5. Payment-related operations integrate with Paystack.
6. The API returns responses to the frontend.

## Getting Started

### Prerequisites

Install the following before running the backend locally:

- [Node.js](https://nodejs.org/)
- npm
- A MongoDB database
- Paystack API credentials for payment-related functionality

### Installation

Clone the repository containing the backend source code, then navigate to the backend directory.

```bash
cd backend
npm install
```

### Environment Variables

Create a `.env` file in the backend directory and configure the variables required by your application.

For example:

```env
PORT=5000
URI=your_mongodb_connection_string
```

Add any other variables required by your authentication and Paystack implementation.

Do not commit `.env` files, API keys, database credentials, or other secrets to version control.

### Running Locally

Check the `scripts` section of `package.json` for the commands configured by the project.

For example, if a development script is available:

```bash
npm run dev
```

Otherwise, use the appropriate start command defined in the package configuration.

## API Integration

The frontend communicates with the backend through HTTP requests.

**Base URL:**

```text
[https://delivey-app-backend.vercel.app](https://delivey-app-backend.vercel.app/)
```

Use the appropriate endpoint paths and HTTP methods defined in the backend routes.

For protected endpoints, provide authentication using the mechanism implemented by the application.

## Deployment

The backend is deployed on Vercel.

When deploying or updating the API:

1. Configure the correct project root and build settings.
2. Add the required environment variables in the deployment dashboard.
3. Verify the MongoDB connection.
4. Configure CORS to allow requests from trusted frontend origins.
5. Test authentication, database operations, and payment-related endpoints.
6. Check deployment logs for errors.

## Security

- Keep database credentials and payment API keys private.
- Validate incoming request data.
- Apply authentication and authorization to protected endpoints.
- Restrict CORS to trusted frontend origins.
- Verify payment transactions on the server before treating them as successful.
- Use environment variables for deployment-specific configuration.

## Project Purpose

This project demonstrates backend development for a food delivery platform, including API design, database integration, authentication, and payment processing.

It showcases the ability to build and deploy server-side services that support a modern web application.

## Author

**Makinde Kelvin Olamide**

GitHub: [@Amazing-Tech1](https://github.com/Amazing-Tech1)
