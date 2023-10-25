## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Demo](#demo)
- [Follow-up](#follow-up)

# Description

This is a web service, with REST APIs, that justifies text passed as a parameter

## Features

This service provides users required REST APIs that allow:

- JWT-based authentication for obtaining tokens.
- Text justification based on 80 per line.
- Rate limiting for text justification to control usage (80000 word per token per day).


# Getting Started

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.

## Installation

1. Clone this repository.

```bash
git clone https://github.com/Sarrabah/justify-text.git
```

2. Navigate to the project directory.

```bash
cd justify-text
```

3. Install dependencies.

```bash
npm install
```
4. Set the required environment variables by creating a .env file with the following content, and replacing your_secret_key with your desired secret key for JWT token generation:

```makefile
JWT_SECRET=your_secret_key
```

5. Start the server:
```sh
npm run dev
```

# Usage

## API Routes

### `/api/token`

- **Method:** POST
- **Description:** Get a JSON Web Token (JWT) by providing an email. You will receive a token in response, which you should include in the Authorization header for subsequent requests.
- **Request Body:**
  ```json
  {
    "email": "foo@bar.com"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your-jwt-token"
  }
  ```

### `/api/justify`

- **Method:** POST
- **Description:** Justify text provided in the request body.
- **Request Body:** Text to be justified, as a plain/text.
- **Response:** Justified text, as a plain text.
- **Contraints:** Text justification should be authentificated and it is rate-limited. You will receive a 402 Payment Required status code if you exceed the limit.


# Demo
A demo has been deployed on a heroku instance
URL: https://justify-text-demo-d45e0d48f948.herokuapp.com/

# Follow up ideas

- Have a flexible way to easily configure the width of the line when jutifying text
- Persist the rate limit per token 
- Improve the expiration management of the tokens
- Adding more tests, mainly for middlewares
