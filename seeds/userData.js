const { User } = require('../models');

const userData = [
  {"id":1,"username":"gboddam0","password":"Vk95C24w","email":"ewilleman0@skype.com"},
  {"id":2,"username":"aseemmonds1","password":"YwV3Nv1h","email":"gmallinder1@spiegel.de"},
  {"id":3,"username":"ccoulsen2","password":"NvE3Tl4z","email":"nverrill2@blogger.com"},
  {"id":4,"username":"csharvill3","password":"EkRiHc6p","email":"bmutch3@macromedia.com"},
  {"id":5,"username":"zrocca4","password":"31201a89","email":"nolding4@google.com"},
  {"id":6,"username":"kbirrell5","password":"A73eRzUe","email":"mwebling5@bbc.co.uk"},
  {"id":7,"username":"rwixon6","password":"AnZiQ7Zt","email":"pemms6@wix.com"},
  {"id":8,"username":"calbisser7","password":"LdNr8nV2","email":"bespinola7@independent.co.uk"},
  {"id":9,"username":"bdoyland8","password":"V5LkM74v","email":"oslyne8@huffingtonpost.com"},
  {"id":10,"username":"cgamell9","password":"Zg76AcZo","email":"cschulke9@usnews.com"}
]

const seedUsers = () => User.bulkCreate(userData);