const { Comment } = require('../models');

const commentData = [
    {
        "comment_body": "Haha, that is so truthful!",
        "post_id": 1,
        "user_id": 1,
    },
    {
        "comment_body": "I do not agree!",
        "post_id": 3,
        "user_id": 7,
    },
    {
        "comment_body": "I fully agree",
        "post_id": 1,
        "user_id": 6,
    },
    {
        "comment_body": "How did I get here?",
        "post_id": 1,
        "user_id": 5,
    },
    {
        "comment_body": "uhhhhhhh",
        "post_id": 1,
        "user_id": 9,
    },
    {
        "comment_body": "Agreed!",
        "post_id": 1,
        "user_id": 2,
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;