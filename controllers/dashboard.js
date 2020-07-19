'use strict';

const logger = require('../utils/logger');
const memberCollection = require('../models/playlist-store.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      name: 'Playlist Dashboard',
      member: memberCollection,
    };
    logger.info('about to render', memberCollection);
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;