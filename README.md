# vercel-node-app
Run an Express server with Vercel and proxy all the GET requests through the domain defined in the `DOMAIN` environment variable.

# Install
Run `npm install` to install all the dependencies.
Create a `.env` file at the root of the project and define a `DOMAIN` variable that will contain the the root domain where to proxy all the GET requests.

# Run
Run `npm run start` to launch the server, and visit `http://localhost:3000/`.
The local `PORT` can be customized with a `PORT` environment variable.

# Exemples
If you visit `http://localhost:3000/some-page` the server will render the HTML generated by the page `https://DOMAIN/some-page`.

If you visit `http://localhost:3000/some-other-page?var=val` the server will render the HTML generated by the page `https://DOMAIN/some-other-page?var=val`.

Note that the headers will be piped down through the final page, and the User-agent will be provided to the proxyed URL.

The fragment part of the URL will not be transferred to the proxyed URL, as it can't be read by the server.

# Customizing
Just edit the `index.js` file to customize the proxy to your needs (to support the `POST` requests for instance), or just deactivate the "proxy" feature and build a classic Express server, with all routes definitions.