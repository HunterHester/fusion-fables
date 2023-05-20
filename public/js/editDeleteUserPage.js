const editUserPageHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    console.log('Clicked me');
};

const deleteUserPageHandler = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log(event.target);
    const response = await fetch(`/api/blog/${event.target.id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};

const deleteButton = document.querySelectorAll('.delete-btn');
const editButton = document.querySelectorAll('.edit-btn');

for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', deleteUserPageHandler);
}

for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener('click', editUserPageHandler);
}
