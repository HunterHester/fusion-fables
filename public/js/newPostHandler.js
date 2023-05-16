async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#titleInput').value.trim();
    const post_body = document.querySelector('#bodyInput').value.trim();
    let is_public = document.querySelector('#isPublic');
    let allow_comments = document.querySelector('#allowComments');

    if (is_public.checked) {
        is_public = true;
    }
    is_public = false;

    if (allow_comments.checked) {
        allow_comments = true;
    }
    allow_comments = false;
    

    const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_body,
            is_public,
            allow_comments
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.createBlogPost').addEventListener('submit', newPostHandler);