# Horizan-app
[![Svelte v3](https://img.shields.io/badge/svelte-v3-orange.svg)](https://svelte.dev)
![npm](https://img.shields.io/npm/v/svelte-guard-history-router.svg)
[![NPM version](https://badge.fury.io/js/nodemon.svg)](https://npmjs.org/package/nodemon)
[![Travis Status](https://travis-ci.org/remy/nodemon.svg?branch=master)](https://travis-ci.org/remy/nodemon) 
![Backers on Open Collective](https://opencollective.com/nodemon/backers/badge.svg)
![Chat](https://img.shields.io/discord/846724902165807127?label=chat&logo=discord)
## Test Code JScript and Svelte

## Core Structure

    h-app
      ├── client
      │   ├── public
      │   ├── src
      │   │    ├── components
      │   │    │       ├── client
      │   │    │       ├── server
      │   │    │       ├── configs
      │   │    │       ├── library
      │   │    │       └── pages
      │   │    ├── models
      │   │    └── pages
      │   │
      │   └── proxy
      │       > webpack.configs
      │       > PORT 8080
      │
      ├── models
      │   > MongoDB Server
      │   > PORT 27017
      │
      ├── router
      │   > API
      │   > Auth
      │   > PORT 3000
      │
      └── README.md (you are here)

### --- Library ---
- Express
- Mongoose (MongoDB)
- Cors
- Body-Parser
- Morgan
``` npm install express mongoose cors body-parser morgan --save ```
- Concurrently
``` npm install -g concurrently ```
- Nodemon (dev)
``` npm install nodemon --save-dev ```
- Svelte
- webpack
``` npx degit sveltejs/template-webpack client ```
-- Install library basic from client
``` npm install ```
- MongoDB (Create value)
```
- export MONGO_URI='linkdatabase' 
- mongodb+srv://admin:<password>@cluster0.veij3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
- password: MitFnz5TdB8qTffe 
- mongoURI: process.env.MONGO_URI 
```

- Axios from client
``` npm i axios ```
### --- JScript ---
- Link api from server to client
```
    devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:3000',
                },
            },
        },
```

### Local login
``` npm install passport-local-mongoose ```
``` npm install passport ```

-  Express session
``` npm install express-session ```
-  Save session from mongo
``` npm install connect-mongo ```
``` npm i connect-mongo@3 ```

### API Router
- Svelte Spa Router
``` npm install svelte-spa-router ```
