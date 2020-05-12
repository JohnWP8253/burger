# EAT DAT BURGER

## Author
John Pendergrass

## Purpose of App
A restaurant app that lets users input name of burgers that they's like to eat. It will store the burgers in a database connected to MySQL that will list and log if the burgers have been eaten or not. 

## Links
Github repo: https://github.com/JohnWP8253/burger
Heroku link: https://jp-burger-app.herokuapp.com

## Code Explanation
The `server.js` file sets up:
* the Express server - framework for node.js
* handlebars server - uses an Express way of structing an app's views.
* routes - allows dispatch using url strings to route http request.
* body-parser - parses incoming request body in a middleware before handlers.

The `config` folder contains:
* `connection.js` which contains the ports for both the mysql database for heroku and the local host. 
* `orm.js` the object-relational mapping which contains the functions: `selectAll` which shows the burgers in the database, `insertOne` which adds the user burger into the database, and `updateOne` which updates the boolean to the burger being devoured. 

The `controllers` folder contains `burgers_controller.js` which grabs the data from the user input using the GET request. Then uses a POST request to insert the input into the database. Lastly, uses a POST request which updates if the burger has been eaten or not.

The `views` folder holds the handlebars files `main.handlebars` and `index.handlebars` which contains the HTML code for the UI.

## Tech used
    * JavaScript
    * Node.js
    * HTML/CSS
    * Materialize.css
    * Express.js

## Shoutouts
Thanks to:
* Amy Hearr
* Brooke Guarienti
* Haylee McLemore
* Zach Ledford