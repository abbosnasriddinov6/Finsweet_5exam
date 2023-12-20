
const userName = document.getElementById("username");
const passWord = document.getElementById("password");

const formbtn = document.getElementById('formbtn')
formbtn.addEventListener("click",function (e) {
    e.preventDefault()
    if(userName.value.length>0 && passWord.value.length>0){
        window.location.href="./home.html"
        console.log("true");
    }else{
        alert("Fill the form (Please)")
    }
})