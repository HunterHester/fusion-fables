const editDeleteUserPageHandler = async (event) => {
    event.preventDefault();
    console.log('Clicked me');
};

document.querySelector('.delete-btn').addEventListener('click', editDeleteUserPageHandler);
document.querySelector('.edit-btn').addEventListener('click', editDeleteUserPageHandler);

const deleteButton = document.querySelectorAll('.delete-btn');
const editButton = document.querySelectorAll('.edit-btn');

for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', editDeleteUserPageHandler);
}

for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener('click', editDeleteUserPageHandler);
}
