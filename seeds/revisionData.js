const { Revision } = require('../models');

const revisionData = [
    {"revision_body":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "post_id":1,
        "user_id":2,
    },
    {"revision_body":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "post_id":4,
        "user_id":2,
    },
    {"revision_body":"Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "post_id": 6,
        "user_id":2,
    },
    {"revision_body":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "post_id": 2,
        "user_id":10,
    },
    {"revision_body":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "post_id":9,
        "user_id":10,
    },
    {"revision_body":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "post_id":6,
        "user_id":4,
    },
    {"revision_body":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "post_id":1,
        "user_id":7,
    },
    {"revision_body":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "post_id":8,
        "user_id":7,
    },
    {"revision_body":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "post_id":4,
        "user_id":10
    },
    {"revision_body":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "post_id":10,
        "user_id":3,
    }
]

const seedComments = () => Revision.bulkCreate(revisionData);

module.exports = seedComments;