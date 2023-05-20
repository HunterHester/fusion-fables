const editPostHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    console.log('Clicked Me');
    console.log(event.target);
    console.log(document.querySelector('.card-text').textContent);
    document.querySelector('#comment').value = document.querySelector('.card-text').textContent;
    // const response = await fetch(`api/comment/${event.target.id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //         post_id,
    //         comment_body,
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });
    // if (response.ok) {
    //     document.location.reload();
    // } else {
    //     alert(response.statusText);
    // }
};

const deletePostHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();

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
    editButton[i].addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Clicked Me');
        console.log(event.target);
        console.log(this.id);
        document.querySelector('#comment').value = document.getElementById('' + this.id).parentElement.previousElementSibling.textContent;
        console.log(document.getElementById('' + this.id).parentElement.previousElementSibling.textContent);
    });
}

// Need variable for placeholder which becomes the id of the comment i click on
// When i click submit I will run the call, then i will update the id within the call to the previously created variable (use that id for the put call)



