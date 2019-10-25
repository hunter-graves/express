# Express
[express](https://expressjs.com/en/4x/api.html)

[pm2](http://pm2.keymetrics.io/docs/usage/quick-start/)

- initialize the project with `npm init`
- install express with `npm i express`
- Start the app with `node server.js`
- Test the server, and add another get endpoint
- Install pm2 `npm install pm2 -g` 
- Run server via pm2 `pm2 start server.js --watch --ignore-watch="node_modules"`
- Install axios with `npm i axios`
- Make a call from the client to the server
- Create a post endpoint on the server
- Use the post function on the client from axios to send data
- Log it on the server
- Create another get endpoint, but accept a query param, and repeat the process
- Create a middlewear to log the `originalUrl` for all calls
- Move the middleware to its own file


## Pm2 helpful commands
- `pm2 list`
- `pm2 restart <app>`
- `pm2 monit`
- `pm2 kill`
- `pm2 logs`
