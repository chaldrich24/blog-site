const editBtn = document.querySelector('#edit-post-btn');
const deleteBtn = document.querySelector('#delete-post-btn');
const id = document.location.href.split('/')[5];
console.log(id);

function editPost() {
    const post_title = document.querySelector('.post-title-info a h3').innerHTML.trim();
    const post_contents = document.querySelector('.post p').innerHTML.trim();

    const postTitleEl = document.querySelector('.post-title-info a');
    const postTitleInput = document.createElement('input');
    postTitleInput.type = 'text';
    postTitleInput.value = post_title;

    postTitleEl.replaceWith(postTitleInput);

    const postContentsEl = document.querySelector('.post p');
    const postContentsInput = document.createElement('textarea');
    postContentsInput.value = post_contents;

    postContentsEl.replaceWith(postContentsInput);

    const confirmEditBtn = document.createElement('button');
    confirmEditBtn.id = 'confirm-edit-btn';
    confirmEditBtn.innerHTML = 'Confirm'
    document.querySelector('.post').appendChild(confirmEditBtn);

    console.log(post_title, post_contents);

    confirmEditBtn.addEventListener('click', () => {
        const post_title = postTitleInput.value.trim();
        const post_contents = postContentsInput.value.trim();
        console.log(post_title, post_contents)

        submitEditPost(post_title, post_contents);
    })
}

async function submitEditPost(post_title, post_contents) {
    console.log(post_title, post_contents)
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_title,
            post_contents
        }),
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        location.reload();
    }
}

async function deletePost() {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    }
}

editBtn.addEventListener('click', editPost);
deleteBtn.addEventListener('click', deletePost);