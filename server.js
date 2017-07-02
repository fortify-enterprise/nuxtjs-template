const Nuxt = require('nuxt');
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// We instantiate Nuxt.js with the options
const config = require('./nuxt.config.js');

const nuxt = new Nuxt(config);
app.use(nuxt.render);

// Build only in dev mode
if (config.dev)
{
  nuxt.build()
    .catch((error) =>
    {
      process.stderr.write(`${error}\n`);
      process.exit(1);
    });
}

// Listen the server
app.listen(port, '0.0.0.0');
process.stdout.write(`Server listening on localhost: ${port}\n`);
