var commentTitle = document.getElementById("titleInp");
var commentBody = document.getElementById("bodyInp");
var postField = document.getElementById("commentField");
var post = "";

function submit(){
    if(commentTitle.value.length == 0)
    {
        commentTitle.class = "input is-danger";
        alert("Empty title");
    }else if(commentBody.value.length == 0)
    {
        commentBody.class = "textarea is-danger";
        alert("Empty body");
    }else 
    {
        post = post + "<div class=\"tile is-child box\"><h1 class=\"title is-5\">" + commentTitle.value + "</h1><p>" + commentBody.value + "</p> </div>";
        postField.innerHTML = post;
    }
}

function fieldClear(){
    commentTitle.value = null;
    commentBody.value = null;
}