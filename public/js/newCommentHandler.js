async function newCommentHandler(event) {
    event.preventDefault();

    // get text and trim whitespace
    const comment_body = document.getElementById('comment').value.trim();
    // get post id from URL
    const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
    ];

    if (comment_body) {
    const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({
            post_id,
            comment_body,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
    }
};

console.log('HERE!');
document.getElementById('comment-form').addEventListener('submit', newCommentHandler);