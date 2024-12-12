# Data-Processing-and-Storage-Assignment

# Description
This project implements an in-memory key-value database in JavaScript. It provides basic operations like get and put while supporting transactional capabilities through begin_transaction, commit, and rollback. Transactions ensure atomicity and allow multiple changes to be made without affecting the main database until committed.

# How to Run

1. Prerequisites: Node.js and npm (or yarn) installed on your system.

2. Installation:
Clone this repository.
Navigate to the project directory in your terminal.

# Execution Instructions:

1. Open a terminal and navigate to the folder containing Main.js.
2. Run the file using the following command:
```
node Main.js
```

# For Future Improvement
To make this assignment an official task:

1. Examples: Provide a comprehensive set of example inputs and expected outputs to make grading more straightforward.
2. Edge cases: Include additional edge cases for testing (e.g., repeatedly starting transactions without committing or rolling back).
3. Languages: Allow students to implement the database in any language, as long as it adheres to the defined interface and behavior.
4. Advanced Features: Implement additional features like indexes, queries, and triggers to enhance the database's capabilities.
5. Persistence: Explore ways to persist the database state to disk or a database system, enabling data durability and recovery.
6. Error Handling: Implement more robust error handling for invalid inputs, such as handling situations where a transaction is committed or rolled back without being explicitly started.

# More ideas about testing
1. Unit Testing: Write unit tests to verify the correctness of each function. Use a testing framework like Mocha to create test cases for different scenarios, including:
Basic operations (get, put)
Transaction behavior (begin, commit, rollback)

