let button = document.getElementById('comment');

let newComment = button.parentNode;

button.addEventListener('click', postComment);

function postComment() {
    let commentSection = document.createElement('section');

    let userComment = document.createElement('textarea');
    userComment.setAttribute('placeholder','Comment here...');
    
    let postReply = document.createElement('button');
    postReply.innerHTML = "Post";
    
    let commentContainer = document.createElement('article');
    let replyMessage = document.createElement('p');
    
    let replyButton = document.createElement('button');
    replyButton.setAttribute('class','reply');
    replyButton.innerHTML = "Reply";

    newComment.append(commentSection);
    commentSection.append(userComment);
    commentSection.append(postReply);
    postReply.addEventListener('click', reply);
    postReply.setAttribute('class','post');

    function reply() {
        
        replyMessage.innerHTML = "User: " + userComment.value;
        
        commentSection.append(commentContainer);
        commentContainer.append(replyMessage);
        commentContainer.append(replyButton);
        
        userComment.remove();
        postReply.remove();

        replyButton.addEventListener('click', postComment);
        newComment = replyButton.parentNode;
    }
}
