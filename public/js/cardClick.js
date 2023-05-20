const goToPost = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    window.location.replace(`/u/${event.currentTarget.dataset.user}/${event.currentTarget.dataset.id}`);
};

const goToEdit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log(`EDIT WIP; ID: ${event.currentTarget.dataset.id}`);
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
    
    const response = await fetch(`/api/comment/${event.currentTarget.dataset.id}`, {
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
const editLinks = document.querySelectorAll('.edit-btn');
for(let i = 0; i < editLinks.length; i++) {
    editLinks[i].addEventListener('click', goToEdit);
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