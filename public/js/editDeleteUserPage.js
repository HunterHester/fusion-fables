const editDeleteUserPageHandler = async (event) => {
    event.preventDefault();

    const deleteBtn = document.querySelectorAll('.delete-btn');
    const editBtn = document.querySelectorAll('.edit-btn');
    if (deleteBtn || editBtn) {
        console.log('Clicked me');
    }
};

document.querySelector('.delete-btn').addEventListener('click', editDeleteUserPageHandler);
document.querySelector('.edit-btn').addEventListener('click', editDeleteUserPageHandler);
