const editDeletePostHandler = async (event) => {
    event.preventDefault();
    console.log('Clicked me');
};

document.querySelector('.delete-btn').addEventListener('click', editDeletePostHandler);
document.querySelector('.edit-btn').addEventListener('click', editDeletePostHandler);

const deleteButton = document.querySelectorAll('.delete-btn');
const editButton = document.querySelectorAll('.edit-btn');

for(let i=0; i<deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', editDeletePostHandler);
}

for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener('click', editDeletePostHandler);
}




