'use strict';

const _ = require('lodash');
const memberStore = {

  memberCollection: require('./member-store.json').memberCollection,

  getAllMembers() {
    return this.memberCollection;
  },

    getMember(id) {
    return _.find(this.memberCollection, { id: id });
  },
  
    removeStat(id, statId) {
    const member = this.getMember(id);
    _.remove(member.stats, { id: statId });

    // TODO : remove the song with id songId from the playlist
  },
};

module.exports = memberStore;