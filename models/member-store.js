'use strict';

const _ = require('lodash');
const memberStore = {

  memberCollection: require('./member-store.json').memberCollection,

  getAllMembers() {
    return this.memberCollection;
  },

  getMember(id) {
    let foundMember = null;
    for (let member of this.memberCollection) {
      if (id == member.id) {
        foundMember = member;
      }
    }

    return foundMember;
  },
    removeStat(id, statId) {
    const member = this.getMember(id);

    // TODO : remove the song with id songId from the playlist
  },
};

module.exports = memberStore;