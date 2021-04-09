## Directory Structure
server
    +-- controllers
           +-- comments.js (Fetches Data From DB)
    +-- models
          +-- post.js (Contains commentSchema schema for `comment` model. Email Validation For Proper 
                        And Unique Email)
    +-- routes
          +-- comments.js (it maps `/comment` route to the comments.js of controllers directory)  
    +-- index.js (Script Execution Starts From Here. It fetches comment data from Third Party Api End 
                  Point and stores the documents in `comment` collection after model validation. 
    +-- .env (It's environment file for the project. It contains PORT, CONNECTION_URL, API_URL
               constants)

## Third Party Packages
   * dotenv (For loading environment variables from .env file)
   * cors (For enabling CORS)
   * express (For Routing)
   * mongoose (It's ODM library for MongoDB)
   * request  (For Integrating Third Party Api Endpoint)
   * nodemon  (It's dev dependency used to restart server on detction of changes in scripts.)

## Available Scripts

In the project directory, you need to run:

### `npm install`

It installs all the project dependencies listed in package.json

### `npm start`

To start the server

