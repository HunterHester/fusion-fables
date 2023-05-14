const { User } = require('../models');

const userData = [
  {"id":1,"username":"jgritsaev0","password":"DW$0lF7","email":"lmulberry0@fda.gov"},
  {"id":2,"username":"scullinan1","password":"aO9I#a","email":"dgreensted1@linkedin.com"},
  {"id":3,"username":"bsmith2","password":"H@YujJW","email":"churdle2@hud.gov"},
  {"id":4,"username":"btweedle3","password":"pV4N0)O","email":"jallot3@vistaprint.com"},
  {"id":5,"username":"okarpeev4","password":"NL(K8qI","email":"gkochlin4@businesswire.com"},
  {"id":6,"username":"hshakespear5","password":"nARTmZ","email":"bdenes5@youku.com"},
  {"id":7,"username":"modlin6","password":"ydsbO*Psd","email":"mtewkesberrie6@un.org"},
  {"id":8,"username":"vpietrzyk7","password":"as4G867D$R8","email":"rpaulmann7@webmd.com"},
  {"id":9,"username":"jlearoid8","password":"BkR#7c4","email":"ealgie8@ustream.tv"},
  {"id":10,"username":"qallain9","password":"J8mBmlW@Ul2y","email":"jlevens9@blogspot.com"}
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;