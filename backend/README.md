# To do Application
## Back-end

### Project settings:
1. Modules: express, joi, mongoose

### Connecting:
1.  Type `nodemon` in a console to automatically restart the node application when file changes in the directory are detected. It will connect to port 3000 and the MongoDB database.

### Testing API:
1. Open API platform like Postman 
2. Open MongoDB Compass and connect to host by default.
#### Postman
3. Select the type of request you want to perform.
4. Provide a link to the appropriate endpoint API with http://localhost:3000
5. Add headers and parameters for a query. 
6. Click on the Send button.
#### MongoDB Compass 
7. Refresh databases in cluster.
8. All changes will be visible in the tasks database in the task and user collections.

### Endpoints:
#### task router `/api/task`
1. GET: `/` to get all tasks.
2. POST: `/` do add a task.
    Body raw JSON:
    {
      "description": "<String>",
      "deadline": "<YYYY-MM-DD>"
    }
3. GET: `/:id` to get particular task.
4. DELETE: `/:id` to delete particular task.
5. PUT: `/id` to edit particular task.
