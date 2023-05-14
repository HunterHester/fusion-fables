const { Post } = require('../models');

const postData = [
    {
        "title": "hello world",
        "post_body": "when was the first time you surprised yourself by fixing something?",
        "user_id": 1,
        "is_public": true,
        "allow_comments": true,
        "numComments": 1
    },
    {
        "title": "goodbye world",
        "post_body": "that was sad",
        "user_id": 4,
        "is_public": true,
        "allow_comments": false,
        "numComments": 0
    },
    {
        "title": "what are you doing",
        "post_body": "my daughters yelling",
        "user_id": 6,
        "is_public": true,
        "allow_comments": true,
        "numComments": 5
    },
    {
        "title": "asdlfkjasdf",
        "post_body": "asdfasdfasdfsadfasdfasdf",
        "user_id": 9,
        "is_public": true,
        "allow_comments": false,
        "numComments": 0
    },
    {
        "title": "pajksdfas",
        "post_body": "wfghjfghjfghjfgjgfhj",
        "user_id": 3,
        "is_public": true,
        "allow_comments": true,
        "numComments": 1
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;