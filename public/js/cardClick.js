const goToPost = async (event) => {
    event.preventDefault();
    event.stopPropogation();
  
    document.location.replace(`/u/${event.target.}`);
};

document.querySelector('#post-link').addEventListener('click', goToPost);