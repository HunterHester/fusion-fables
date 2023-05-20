const goToPost = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log('Clicked');
    
    window.location.replace(`/u/${event.currentTarget.dataset.user}/${event.currentTarget.dataset.id}`);
};

const postLinks = document.querySelectorAll('#post-link');

for(let i = 0; i < postLinks.length; i++) {
    postLinks[i].addEventListener('click', goToPost);
};

console.log('script loaded');