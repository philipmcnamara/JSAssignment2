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
    _.remove(member.stat, { id: statId });
  },
  
    removeMember(id) {
    _.remove(this.memberCollection, { id: id });
  },
  
    addStat(id, stat) {
    const member = this.getMember(id);
    member.stat.push(stat);
  },
};

module.exports = memberStore;