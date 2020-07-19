'use strict';

const logger = require('../utils/logger');
const memberStore = require('../models/member-store');

const member = {
  index(request, response) {
    const memberId = request.params.id;
    logger.debug('Member id = ', memberId);
    const viewData = {
      name: 'Member',
      member: memberStore.getMember(memberId),
    };
    response.render('member', viewData);
  },
    deleteStat(request, response) {
    const memberId = request.params.id;
    const statId = request.params.statId;
    logger.debug(`Deleting Stat ${statId} from Member ${memberId}`);
    memberStore.removeStat(memberId, statId);
    response.redirect('/member/' + memberId);
  },
};

module.exports = member;