# Money Manager Backend

This is the **backend API** for the Money Manager Web Application. It is built using **Node.js**, **Express**, and **MongoDB** to manage personal and business financial transactions. The API provides endpoints to create, read, update, and delete transactions.

---

## Features

- Add **income** and **expense** transactions with:
  - Amount
  - Category (e.g., Food, Fuel, Salary, Loan)
  - Division (Personal or Business)
  - Description
  - Date & Time
  - Account (Cash, Bank, Wallet)
  
- Edit transactions within **12 hours** of creation.  

- Delete transactions.  

- Fetch **all transactions** for dashboard or reports.

## How It Solves the Problem
Many people struggle to track personal and business finances separately, leading to missed payments, poor budgeting, and confusion.  
This backend **provides a structured, reliable system to store, update, and fetch financial transactions**. By keeping personal and business transactions separate and allowing easy retrieval of data, it enables the frontend to show **accurate dashboards, reports, and summaries**, helping users make better financial decisions and stay organized.



## Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv (for environment variables)
- CORS



