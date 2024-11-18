Property Rental Management API
A robust backend application for landlords and tenants to manage rental properties, leases, applications, and payments efficiently.

Table of Contents
Features
Getting Started
API Endpoints
Technologies Used
Contributing
License
Features
For Landlords:
List Properties: Easily add and manage your rental properties.
Approve Lease Applications: Review tenant applications and approve them.
Track Leases and Payments: Stay updated on lease details and payment statuses.
Automated Reminders: Send reminders to tenants for due or overdue payments.
For Tenants:
Browse Properties: View available rental properties.
Apply for Leases: Submit applications for desired properties.
Make Payments: Record rent payments directly through the platform.
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v14+ recommended)
npm or yarn
MongoDB (for database)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/property-rental-api.git
cd property-rental-api
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.
Add the following variables:
env
Copy code
PORT=5000
MONGO_URI=your_mongo_database_url
JWT_SECRET=your_jwt_secret
Start the server:

bash
Copy code
npm start
The server will run at http://localhost:5000.

API Endpoints
Authentication
POST /auth/register - Register a new user.
POST /auth/login - User login to receive a token.
Properties
POST /properties - Add a new property (landlord only).
GET /properties - List available properties.
POST /properties/:id/apply - Apply for a lease on a property.
Leases
GET /leases/:id/status - View lease details and payment status.
POST /leases/:id/payment - Record a rent payment.
Technologies Used
Backend Framework: Express.js
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
Encryption: bcrypt.js
Environment Variables: dotenv
Contributing
We welcome contributions to improve this project. To contribute:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Commit your changes:
bash
Copy code
git commit -m "Add your message here"
Push your branch:
bash
Copy code
git push origin feature-name
Open a Pull Request.
License
This project is licensed under the MIT License.