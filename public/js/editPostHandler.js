async function editPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#titleInput').value.trim();
    const post_body = document.querySelector('#bodyInput').value.trim();
    let is_public = document.querySelector('#isPublic');
    let allow_comments = document.querySelector('#allowComments');

    if (title && post_body) {
        const response = await fetch(`/api/blog/${event.target.dataset.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                post_body,
                is_public: is_public.checked,
                allow_comments: allow_comments.checked
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/userPage/${event.target.dataset.id}`);
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.reviseBlogPost').addEventListener('submit', editPostHandler);