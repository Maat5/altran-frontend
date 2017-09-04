
'use strict';

const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const router = express.Router();

app.use(compression());

// serve angular front end files from root path
router.use('/', express.static(path.join(__dirname, '/dist')));

// rewrite virtual urls to angular app to enable refreshing of internal pages
router.get('*', function (req, res, next) {
  res.sendFile(path.resolve('dist/index.html'));
});

app.use(router);

app.listen(3000, () => console.log(`Server running on 127.0.0.1:3000`));
