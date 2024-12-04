# Data-Processing-and-Storage-Assignment

# Description
This project implements an in-memory key-value database in JavaScript. It provides basic operations like get and put while supporting transactional capabilities through begin_transaction, commit, and rollback. Transactions ensure atomicity and allow multiple changes to be made without affecting the main database until committed.

# How to Run

1. Install Node.js (if not already installed).
2. Save the provided code.

# Execution Instructions:

1. Open a terminal and navigate to the folder containing Main.js.
2. Run the file using the following command:
```
node Main.js
```

# For Future Assignment Improvement
To make this assignment an official task:

1. Provide a comprehensive set of example inputs and expected outputs to make grading more straightforward.
2. Include additional edge cases for testing (e.g., repeatedly starting transactions without committing or rolling back).
3. Allow students to implement the database in any language, as long as it adheres to the defined interface and behavior.
4. Introduce optional features like nested transactions or durability (saving data to disk) to provide extra challenges for advanced learners.
