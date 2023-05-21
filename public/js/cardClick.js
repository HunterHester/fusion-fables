const goToPost = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    window.location.href = `/u/${event.currentTarget.dataset.user}/${event.currentTarget.dataset.id}`;
};

const editPostHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    window.location.href = `/revise/${event.target.dataset.id}`;
};

const editComment = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    // get text and trim whitespace
    const comment_body = document.getElementById('edit-comment').value;

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

const editCommentHandler = async (event) => {
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

const delPost = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const response = await fetch(`/api/blog/${event.currentTarget.dataset.id}`, {
        method: 'DELETE'
    });

    if(response.ok) {
        window.location.replace('/userPage');
    } else {
        alert(response.statusText);
    }
};

const delComment = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const response = await fetch(`/api/comment/${event.currentTarget.id}`, {
        method: 'DELETE'
    });

    if(response.ok) {
        window.location.reload();
    } else {
        alert(response.statusText);
    }
};

const delRevision = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const response = await fetch(`/api/revision/${event.currentTarget.dataset.id}`, {
        method: 'DELETE'
    });

    if(response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};

// Event listeners for #post-link elements 
const postLinks = document.querySelectorAll('#post-link');
for(let i = 0; i < postLinks.length; i++) {
    postLinks[i].addEventListener('click', goToPost);
};

// Event listeners for .edit-btn elements 
const editPostLinks = document.querySelectorAll('.edit-post-btn');
for(let i = 0; i < editPostLinks.length; i++) {
    editPostLinks[i].addEventListener('click', editPostHandler);
};

// Event listeners for .edit-btn elements 
const editCommentLinks = document.querySelectorAll('.edit-comment-btn');
for(let i = 0; i < editCommentLinks.length; i++) {
    editCommentLinks[i].addEventListener('click', editCommentHandler);
};

// Event listeners for .del-post-btn elements 
const delPostLinks = document.querySelectorAll('.del-post-btn');
for(let i = 0; i < delPostLinks.length; i++) {
    delPostLinks[i].addEventListener('click', delPost);
};

// Event listeners for .del-comment-btn elements 
const delCommentLink = document.querySelectorAll('.del-comment-btn');
for(let i = 0; i < delCommentLink.length; i++) {
    delCommentLink[i].addEventListener('click', delComment);
};

// Event listeners for .del-revision-btn elements 
const delRevisionLink = document.querySelectorAll('.del-revision-btn');
for(let i = 0; i < delRevisionLink.length; i++) {
    delRevisionLink[i].addEventListener('click', delRevision);
};

// Event listeners for dropdown-toggle elements
const dropdownToggles = document.querySelectorAll('.dropdown-toggle-post-card');
for(let i = 0; i < dropdownToggles.length; i++) {
    dropdownToggles[i].addEventListener('click', (e) => {
        e.stopPropagation();
        $(`#dropdown-menu-${e.target.dataset.id}`).toggle();
    });
};