async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#titleInput').value.trim();
    const post_body = document.querySelector('#bodyInput').value.trim();

    const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_body
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