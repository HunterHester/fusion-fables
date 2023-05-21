const moment = require('moment');

module.exports = {
    format_date: (date) => {
        // formats date (Wed Jul 28 1993)
        // return date.toDateString()

        //returns relative date (a day ago)
        return moment(date).fromNow()
    },

    num_of_comments: (comments) => {

        switch (comments.length) {
            case 0:
                return "No comments yet..";
            case 1:
                return `${comments.length} comment`;
            default:
                return `${comments.length} comments`;
        }
    },

    is_edited: (created, updated) => {
        return moment(created).format('LLLL') != moment(updated).format('LLLL');
    },

    is_my_comment: (commentUserId, userId) => {
        return commentUserId === userId;
    }
};