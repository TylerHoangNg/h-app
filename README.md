# h-app
## Test Code JScript and Svelte
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
``` export MONGO_URI='linkdatabase' ```
``` mongodb+srv://admin:<password>@cluster0.veij3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority ``` 
``` password: MitFnz5TdB8qTffe ```
``` mongoURI: process.env.MONGO_URI ```
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