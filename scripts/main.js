var commentTitle = document.getElementById("titleInp");
var commentBody = document.getElementById("bodyInp");
var postField = document.getElementById("commentField");
var post = "";


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";SameSite=None";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
}
return "";
}

function checkCookie() {
    let postscookie = getCookie("postscookie");
    if (postscookie != "") {
    post = postscookie;
    postField.innerHTML = post;
  }
}

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
        setCookie("postscookie", post, 90);
        commentBody.value = "";
        commentTitle.value = "";
    }
}

function fieldClear(){
    commentTitle.value = null;
    commentBody.value = null;
}