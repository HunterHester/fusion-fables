const editPostHandler = async (event) => {
    event.preventDefault();
    console.log('Clicked Me');
    // const response = await fetch(`api/comment/${.id}`)
};

const deletePostHandler = async (event) => {
    event.preventDefault();
    console.log(event.target);
    const response = await fetch(`api/comment/${event.target.data-id}`, {
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



