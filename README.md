# NestJS Food Delivery System Boilerplate

This project serves as a boilerplate for building a food delivery system using NestJS, PostgreSQL, and TypeORM. The system allows clients to place orders from restaurants, which are then delivered by couriers.

## Author
    Daniil Khlyvniuk

## Project Structure

The project follows a modular structure using NestJS, organized into modules, controllers, services, and entities. Key components include:

- **TypeORM Integration:** Utilizes TypeORM as the ORM library to interact with a PostgreSQL database, with entities representing tables (e.g., Customer, Order, OrderItem).

- **Database Configuration:** Database settings are configured in the `config/postgres.config.ts` file, including host, port, username, password, and TypeORM-specific options.

- **Dynamic Module Import:** The `dynamicImport` function dynamically imports modules based on a specified path, enhancing the flexibility of the application.

- **Sequelize Module:** Supports Sequelize, another ORM library, through a SequelizeModule. Note: There might be an issue related to Sequelize configuration based on the provided snippets.

- **Middleware Usage:** Applies middleware to specific routes for controlling request rates (`RateLimiterMiddleware`) and setting cache headers (`CacheHeadersMiddleware`).

- **Environment Configuration:** Utilizes environment variables for configuration, with loading handled by the `dotenv` package.

- **Additional Modules:** Various modules are included for users, products, store, purchases, PayPal integration, filters, files, addresses, cards, Stripe integration, orders, and more.

- **Static File Serving:** Uses `ServeStaticModule` to serve static files from a specified directory.

- **Mailer Module:** Implements email functionality with the `@nestjs-modules/mailer` module for sending emails.

- **Error Handling:** Handles errors and exceptions using NestJS exception filters, as indicated by error logs.

- **Third-Party Packages:** Relies on third-party packages such as `multer` for file uploads, `nestjs-sequelize` for Sequelize integration, and others.

# Getting Started

## Clone this repository.

```bash
$ git clone https://github.com/KhlyvniukDaniil/nestjs-postgres-typeORM-boilerplate.git
```

## Installation

```bash
$ yarn install
```

## Setup environment variables

Create `.env`

```dotenv
APP_PORT=4000
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=admin
POSTGRES_PASSWORD=root
POSTGRES_DATABASE=delivery-srv
```

## Running the app

```bash
$ docker-compose up --build
```
