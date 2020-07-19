'use strict';

const logger = require('../utils/logger');
const memberCollection = require('../models/member-store.js');

const member = {
  index(request, response) {
    const memberId = request.params.id;
    logger.info('Member id = ' + memberId);
    const viewData = {
      name: 'Member',
    };
    response.render('member', viewData);
  },
};

module.exports = member;