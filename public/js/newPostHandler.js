async function newPostHandler(event) {
    event.preventDefault();

    const titleInput = document.getElementById('titleInput').value.trim();
    const bodyInput = document.getElementById('bodyInput').value.trim();

    const response = await fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({
            titleInput,
            bodyInput
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

console.log('HERE!');
document.getElementById('createBlogPost').addEventListener('submit', newPostHandler);