# serverless-api

**Description**: This is a backend server for managing records of people in a DynamoDB database. The server exposes API endpoints to perform CRUD (Create, Read, Update, Delete) operations on the "people" records. [Inspector Swagger Doc](https://app.swaggerhub.com/apis-docs/Nour-Alahmad/lab18/0.1#/default)

## **Requirements**

1. **Node.js**: Make sure you have Node.js installed on your system.

2. **AWS Account**: You need an AWS account to create and manage the DynamoDB table. Set up AWS credentials with appropriate permissions.

3. **DynamoDB Table**: Create a DynamoDB table named "people" with the following attributes: "id" (String), "name" (String), and "email" (String).

## **Setup**

1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up AWS credentials: Make sure your AWS credentials are correctly set up on your system or configure them using `aws configure` command.

## **Available Endpoints**

1. `POST /people`: Insert a new record into the database.
   - Request Body: JSON object with "id", "name", and "email" properties.
   - Response: JSON object representing the newly created record.

2. `GET /people/{id}`: Retrieve a record by its ID.
   - Path Parameter: `id` (String) - The ID of the record to retrieve.
   - Response: JSON object representing the record with the matching ID.

3. `GET /people`: Retrieve all records from the database.
   - Response: JSON array containing all the records in the database.

4. `PUT /people/{id}`: Update a record by its ID.
   - Path Parameter: `id` (String) - The ID of the record to update.
   - Request Body: JSON object with the updated "name" and/or "email" properties.
   - Response: Success message indicating the record was updated.

5. `DELETE /people/{id}`: Remove a record by its ID.
   - Path Parameter: `id` (String) - The ID of the record to delete.
   - Response: Success message indicating the record was deleted.

## **Deployment**

1. Deploy the server to AWS Lambda using your preferred method (Serverless Framework, AWS SAM, or manually).

2. Set up API Gateway to handle requests and map them to the Lambda functions.

## **Testing**

1. Use tools like Postman or inspector swagger to test the endpoints with appropriate request bodies and parameters.

## **Error Handling**

- The server handles errors gracefully and returns appropriate status codes (200, 201, 400, 404, 500) along with error messages.

## **Security Considerations**

- Ensure that the IAM role assigned to the Lambda function has sufficient permissions to interact with DynamoDB.

