const editDeletePostHandler = async (event) => {
    event.preventDefault();

    const deleteBtn = document.querySelector('.delete-btn');
    const editBtn = document.querySelector('.edit-btn');
    if (deleteBtn || editBtn) {
        console.log('Clicked me');
    }
};

document.querySelector('.delete-btn').addEventListener('click', editDeletePostHandler);
document.querySelector('.edit-btn').addEventListener('click', editDeletePostHandler);
