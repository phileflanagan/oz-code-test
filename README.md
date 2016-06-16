### Oz Content Code Test - Phil Flanagan

**To Run the File Locally:**

To run locally, open up index.html in a local webserver.

If using node.js, simply type

```
$ npm install -g http-server
```

Then ```cd``` into the oz-code-test directory and type

```
$ http-server -o
```

**Access Token**

Access token is located in the access_token.js file in the /token/ directory.

**In-Code Naming Coneventions:**

* Controllers are PascalCase
* Directives are pre-fixed with oz
* camelCasing for non-controller components

**File Naming Conventions:**

* whatever.module.js for modules
* whatever.js for controllers
* whatever.html for the view
* app.js will be the main component
* app.routes.js will be the router config

### Notes from Phil

I had some difficulties doing a traditional $http.post using the api. Perhaps I have a fundamental
misunderstanding of the way this api was implemented. The current code uses a bit of a work around to
mimic the api explorer.

Future iterations of this code would involve refactoring some of the controller logic into separate factories
and services while also including more implementation in the common services. I would have also refactored
the html elements into custom directives to improve readability.

Thank you for reviewing this code.
