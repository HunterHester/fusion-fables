const { Post } = require('../models');

const postData = [
    {"title":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.","post_body":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","user_id":2,"is_public":true,"allow_comments":false},
    {"title":"Etiam vel augue.","post_body":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.","user_id":2,"is_public":false,"allow_comments":false},
    {"title":"Praesent blandit.","post_body":"Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","user_id":2,"is_public":false,"allow_comments":false},
    {"title":"Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.","post_body":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","user_id":10,"is_public":false,"allow_comments":false},
    {"title":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","post_body":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","user_id":10,"is_public":true,"allow_comments":true},
    {"title":"Nulla justo.","post_body":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","user_id":4,"is_public":true,"allow_comments":false},
    {"title":"Curabitur at ipsum ac tellus semper interdum.","post_body":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","user_id":7,"is_public":false,"allow_comments":true},
    {"title":"Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","post_body":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.","user_id":7,"is_public":false,"allow_comments":true},
    {"title":"Curabitur at ipsum ac tellus semper interdum.","post_body":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","user_id":10,"is_public":true,"allow_comments":false},
    {"title":"Integer a nibh.","post_body":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","user_id":3,"is_public":false,"allow_comments":true}
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;