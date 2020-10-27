const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API call
app.get('/', (req, res) => {
    var WooCommerceAPI = require('woocommerce-api');
 
    var WooCommerce = new WooCommerceAPI({
      url: 'http://example.com',
      consumerKey: 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      consumerSecret: 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      wpAPI: true,
      version: 'wc/v1'
    });
});



app.listen(port, () => console.log(`Listening on port ${port}`));