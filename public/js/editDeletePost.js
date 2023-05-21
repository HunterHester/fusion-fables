const editComment = async (event) => {
    event.preventDefault();

    // get text and trim whitespace
    const comment_body = document.getElementById('edit-comment').value.trim();

    // get post id from URL
    const url = window.location.toString().split('/');
    const post_id = url[url.length - 1];

    if (comment_body) {
        const response = await fetch(`/api/comment/${event.target.dataset.id}`, {
            method: 'PUT',
            body: JSON.stringify({
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

const editPostHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const startingText = document.querySelector(`#text-${event.target.id}`).textContent;

    const cardContainer = document.querySelector(`#card-${event.target.id}`);

    console.log(cardContainer);

    cardContainer.innerHTML = `<form id="edit-comment-form" data-id=${event.target.id}>
    <div class="form-group">
        <label for="edit-comment-form"><strong>COMMENT</strong></label>
        <textarea class="form-control" style="background: beige" id="edit-comment" rows="3">${startingText}</textarea>
        <div class="text-center">
            <button type="submit" class="text-center mt-3 btn btn-dark btn-lg btn-block">Submit</button>
        </div> 
    </div>
</form>`;

    document.getElementById('edit-comment-form').addEventListener('submit', editComment);
};



const deletePostHandler = async (event) => {
    event.preventDefault();
    console.log(event.target);

    const response = await fetch(`/api/comment/${event.target.id}`, {
        method: 'DELETE'
    });

    if(response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};

const deleteButton = document.querySelectorAll('.delete-btn');
const editButton = document.querySelectorAll('.edit-btn');

for(let i=0; i<deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', deletePostHandler);
}

for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener('click', editPostHandler);
}



