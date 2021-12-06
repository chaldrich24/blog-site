const showFormBtn = document.querySelector('#show-new-post-btn');
const addPostForm = document.querySelector('#add-post-form');

function showPostForm() {
    addPostForm.style.display = 'flex';
}

async function addNewPost(event) {
    event.preventDefault();

    const post_title = document.querySelector('#new-post-title').value.trim();
    const post_contents = document.querySelector('#new-post-contents').value.trim();

    console.log(post_contents, post_title)

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            post_title,
            post_contents
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        location.reload();
    }
}

showFormBtn.addEventListener('click', showPostForm);
addPostForm.addEventListener('submit', addNewPost);