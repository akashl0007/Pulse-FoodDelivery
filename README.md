# Pulse-FoodDelivery

**Pulse-FoodDelivery** is a comprehensive food delivery web application built with the MERN stack. This project provides a user-friendly platform for food ordering and delivery, featuring a responsive design and intuitive interface for both users and administrators.

## Features

- **User Authentication**: Secure login and registration functionality, allowing users to create accounts and access their personal information.
- **Dynamic Menu**: Browse a variety of food items with detailed descriptions, prices, and images.
- **Shopping Cart**: Add food items to the cart, adjust quantities, and review your order before checkout.
- **Order Management**: Place orders, view order history, and track the status of ongoing orders.
- **Admin Panel**: Manage the food menu, update item details, and handle order processing efficiently.
- **Responsive Design**: Optimized for both desktop and mobile devices to ensure a smooth user experience across various screen sizes.

## Encryption Methods

To ensure the security of user passwords, the application uses the following encryption methods:

- **Bcrypt**: Passwords are hashed using the `bcrypt` library. `bcrypt` provides a secure way to hash passwords and includes a salt to protect against rainbow table attacks. The hashing process involves the following steps:
  1. **Salting**: Generates a random salt for each password.
  2. **Hashing**: Combines the password with the salt and hashes the result.
  3. **Storing**: The hashed password is stored in the database.
     
## Tech Stack

- **Frontend**:
  - **React**: JavaScript library for building user interfaces.
  - **React Router**: For handling routing and navigation within the application.
  - **Redux**: State management library to handle application state.

- **Backend**:
  - **Node.js**: JavaScript runtime for building the server-side logic.
  - **Express**: Web application framework for Node.js to handle HTTP requests and routing.

- **Database**:
  - **MongoDB**: NoSQL database for storing user and order data, food menu items, and other relevant information.

- **Deployment**:
  - **Netlify**: Hosting service for deploying the frontend React application.
  - **Render**: Cloud platform for hosting and managing the backend server.

## Installation

To get started with this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/akashl0007/Pulse-FoodDelivery.git
   cd Pulse-FoodDelivery
