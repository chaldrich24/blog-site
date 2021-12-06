const addCommentForm = document.querySelector('#add-comment-form');
const post_id = window.location.href.split('/')[4];

async function addComment(event) {
    event.preventDefault();
    const comment_text = document.querySelector('#new-comment').value.trim();
    console.log(comment_text, post_id);

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment_text,
                post_id
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            location.reload();
        }
    }
}

addCommentForm.addEventListener('submit', addComment);