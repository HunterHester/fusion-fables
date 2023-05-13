const { Comment } = require('../models');

const commentData = () => [
    {"id":1,"post_id":25,"user_id":7,"date":"7/3/2022"},
    {"id":2,"post_id":3,"user_id":7,"date":"12/1/2022"},
    {"id":3,"post_id":4,"user_id":2,"date":"2/19/2022"},
    {"id":4,"post_id":5,"user_id":2,"date":"5/1/2023"},
    {"id":5,"post_id":37,"user_id":6,"date":"5/3/2023"},
    {"id":6,"post_id":38,"user_id":5,"date":"9/20/2022"},
    {"id":7,"post_id":33,"user_id":9,"date":"2/24/2023"},
    {"id":8,"post_id":38,"user_id":4,"date":"2/8/2023"},
    {"id":9,"post_id":25,"user_id":1,"date":"10/17/2022"},
    {"id":10,"post_id":22,"user_id":4,"date":"1/8/2023"},
    {"id":11,"post_id":23,"user_id":7,"date":"12/18/2022"},
    {"id":12,"post_id":30,"user_id":9,"date":"8/14/2022"},
    {"id":13,"post_id":43,"user_id":9,"date":"3/21/2022"},
    {"id":14,"post_id":2,"user_id":2,"date":"1/13/2023"},
    {"id":15,"post_id":34,"user_id":4,"date":"10/19/2022"},
    {"id":16,"post_id":47,"user_id":4,"date":"10/21/2022"},
    {"id":17,"post_id":26,"user_id":5,"date":"12/2/2022"},
    {"id":18,"post_id":29,"user_id":3,"date":"9/30/2022"},
    {"id":19,"post_id":42,"user_id":10,"date":"1/29/2023"},
    {"id":20,"post_id":34,"user_id":8,"date":"8/15/2022"},
    {"id":21,"post_id":29,"user_id":4,"date":"1/10/2022"},
    {"id":22,"post_id":12,"user_id":7,"date":"1/7/2023"},
    {"id":23,"post_id":12,"user_id":8,"date":"4/8/2022"},
    {"id":24,"post_id":46,"user_id":2,"date":"4/29/2022"},
    {"id":25,"post_id":14,"user_id":1,"date":"8/11/2022"}
]

const seedComments = () => Comment.bulkCreate(commentData);