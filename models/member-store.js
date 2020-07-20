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
    member.stats.push(stat);
  },
  
  addMember(member) {
  this.memberCollection.push(member);
},
};

module.exports = memberStore;

'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const memberStore = {

  store: new JsonStore('./models/member-store.json', { memberCollection: [] }),
  collection: 'memberCollection',

  getAllMembers() {
    return this.store.findAll(this.collection);
  },

  getPlaylist(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addMember(member) {
    this.store.add(this.collection, member);
    this.store.save();
  },

  removePlaylist(id) {
    const member = this.getPlaylist(id);
    this.store.remove(this.collection, member);
    this.store.save();
  },

  removeAllPlaylists() {
    this.store.removeAll(this.collection);
    this.store.save();
  },

  addSong(id, song) {
    const member = this.getPlaylist(id);
    member.songs.push(song);
    this.store.save();
  },

  removeSong(id, songId) {
    const member = this.getPlaylist(id);
    const songs = member.songs;
    _.remove(songs, { id: songId});
    this.store.save();
  },
};

module.exports = memberStore;