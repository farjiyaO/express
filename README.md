# Create Express Js Server
----
## Steps:
* Install Node.js
* Initalize a new project using `npm init -y` command
* Install Express using `npm install express` command
* create a new file `index.js` and add the following code:
```javascript
import express from 'express';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
* Run the server using `node index.js` command
* Open up a web browser and go to `http://localhost:3000` to see the message "Hello World!"


    Note: after making any change in the code, you need to restart the server using `node index.js` command. Also if a server is running and I open up another terminal and run `node index.js` command, it will throw an error because the port is already in use. So, I need to kill the process running on that port using `kill [process id]` command. use cntl+c to stop the process.

console.log(req, rawHeaders);
rawheaders gives bunch of information about the request.such as where the server is running, what is the request method, what is the request url, what is the user agent, what is the ip address of the user, what browser is being used, what is os being used, etc.

### Nodemon

Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

To install nodemon, run the following command:

```
npm install -g nodemon
```

To run the server using nodemon, run the following command:

```
nodemon index.js
```

Now, any changes made to the code will automatically restart the server and reflect the changes in the browser.

### Create Differnt endpoints

using '/' we can hold the default route. To create different endpoints, we can use the `app.get()` method.

```javascript
app.get('/about', (req, res) => {
  res.send('About Page');
});
```

* Open up a web browser and go to `http://localhost:3000/about` to see the message "About Page"

### Https Request:

* Get: To send a GET request to the server, use the `app.get()` method. Retrieve resourse from server

* Post: To send a POST request to the server, use the `app.post()` method. Sends data to server to create a new resource.

* Put and Patch: To send a PUT or PATCH request to the server, use the `app.put()` or `app.patch()` method. Update resource existing on server or partially update it, or create a new resource if it doesn't exist.

* Delete: To send a DELETE request to the server, use the `app.delete()` method. Removes resource from server.

### Status Codes:

* 200 OK: The request has succeeded. The information returned with the response is usually in the body of the response.

* 201 Created: The request has succeeded and a new resource has been created. The information returned with the response is usually in the body of the response.

* 204 No Content: The request has succeeded but the response body does not contain any content.

* 301 Moved Permanently: The requested resource has been assigned a new permanent URI and any future references to this resource should use this URI.

* 302 Found: The requested resource resides temporarily under a different URI.

* 400 Bad Request: The request could not be understood by the server due to malformed syntax.

* 401 Unauthorized: The request requires user authentication.

* 403 Forbidden: The server understood the request but refuses to authorize it.

* 404 Not Found: The requested resource could not be found.

* 500 Internal Server Error: The server encountered an unexpected condition which prevented it from fulfilling the request.
* 503 Service Unavailable: The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.



### Postman:

Postman is a tool that can be used to test HTTP requests. It can be used to send different types of requests to the server and view the response.

it helps to test the API endpoints and to debug the server.

### Middleware:

Middleware is a function that can be used to modify the request or response of an HTTP request. It can be used to add functionalities like logging, authentication, and caching to the server.

* Body Parser: Middleware that can be used to parse the request body. It can be used to parse JSON, URL-encoded data, and text data.

Example:
