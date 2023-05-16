const { User } = require('../models');

const userData = [
  {"username":"scullinan1","password":"aO9I#a","email":"dgreensted1@linkedin.com"},
  {"username":"bsmith2","password":"H@YujJW","email":"churdle2@hud.gov"},
  {"username":"btweedle3","password":"pV4N0)O","email":"jallot3@vistaprint.com"},
  {"username":"okarpeev4","password":"NL(K8qI","email":"gkochlin4@businesswire.com"},
  {"username":"hshakespear5","password":"nARTmZ","email":"bdenes5@youku.com"},
  {"username":"modlin6","password":"ydsbO*Psd","email":"mtewkesberrie6@un.org"},
  {"username":"vpietrzyk7","password":"as4G867D$R8","email":"rpaulmann7@webmd.com"},
  {"username":"jlearoid8","password":"BkR#7c4","email":"ealgie8@ustream.tv"},
  {"username":"qallain9","password":"J8mBmlW@Ul2y","email":"jlevens9@blogspot.com"}
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;