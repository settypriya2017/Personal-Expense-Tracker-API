# Expense Tracker API

A personal expense tracker API built with Node.js and SQLite.

## Setup

1. Clone the repository:

   ```bash
   git clone <repo-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the SQLite database:

   ```bash
   sqlite3 ./db/expenses.db < ./db/dbSetup.sql
   ```

4. Run the server:
   ```bash
   npm start
   ```

## API Endpoints

### Transactions

- `POST /transactions`: Add a new transaction
- `GET /transactions`: Get all transactions
- `GET /transactions/:id`: Get transaction by ID
- `PUT /transactions/:id`: Update a transaction by ID
- `DELETE /transactions/:id`: Delete a transaction by ID

### Categories

- `POST /categories`:
