async function upvoteHandler(event) {
    const postId = event.target.getAttribute('data-id');

    const response = await fetch('/api/posts/upvote', {
        method: 'POST',
        body: JSON.stringify({
            post_id: postId
            // user_id: ...you need to provide user_id here, depends on how you handle authentication
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        // Update upvote count on the page
        const post = await response.json();
        document.querySelector(`#post-${postId}-upvotes`).innerText = post.upvotes

    }
}