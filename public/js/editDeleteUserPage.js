const editDeleteUserPageHandler = async (event) => {
    event.preventDefault();

    const deleteBtn = document.querySelector('.delete-btn');
    const editBtn = document.querySelector('.edit-btn');
    if (deleteBtn || editBtn) {
        console.log('Clicked me');
    }
};

document.querySelector('.delete-btn').addEventListener('click', editDeleteUserPageHandler);
document.querySelector('.edit-btn').addEventListener('click', editDeleteUserPageHandler);
