const submitBtn = document.getElementById('submit-btn');
  const commentsList = document.getElementById('comments-list');

  let comments = JSON.parse(localStorage.getItem('comments')) || [];

  renderComments();

  submitBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');
    const name = nameInput.value;
    const comment = commentInput.value;

    if (!name || !comment) {
      return;
    }

    const newComment = { name, comment };

    comments.push(newComment);

    localStorage.setItem('comments', JSON.stringify(comments));

    renderComments();

    nameInput.value = '';
    commentInput.value = '';
  });

function renderComments() {

    commentsList.innerHTML = '';
    comments.forEach(comment => {
      const li = document.createElement('li');
      li.classList.add('mb-2');
      li.innerHTML = `<span class="font-bold">${comment.name}:</span> ${comment.comment}`;
      commentsList.appendChild(li);
    });
  }