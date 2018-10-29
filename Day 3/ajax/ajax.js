let main = document.querySelector('.main');
let postData = document.querySelector('.post-main');
let pagination = document.querySelector('.paginationDiv')
let commentSection;
let str = "";
let start = 0;
let end = 10;
let commentsAr = [];
let dat = "";
// Get posts



function getPost() {

    $.get('https://jsonplaceholder.typicode.com/posts', function (data, status) {
        let lth = data.length;
        for (let i = 0; i <= 99; i++) {
        
            str += `<div class="jpg"><h2 class="heading">${i} . ${data[i].title}</h2>
        <p class="post-main">${data[i].body}</p><button id="${i}" class="showComments">Get comments</button><div class="comments"></div></div> <br>`;

            console.log(`Post retrieval status: ${status}`);
        }


        main.innerHTML = str;

        let h = document.querySelectorAll('.showComments');
        commentSection = document.querySelectorAll('.comments');
        for (const g of h) {
            g.addEventListener('click', function () {
                if (g.id === 0) {
                    getComments(g.id++);
                } else {
                    getComments(g.id);
                }
            })
        }


    })
}


function getComments(val) {

    $.get(`https://jsonplaceholder.typicode.com/comments?postId=${val}`, function (data, status) {
        // /getComments/:id
        // console.log(data[val].email);

        // $.get(`http://localhost:8080/getComments/${val}`, function (data, status) {
        for (let x = 0; x <= data.length - 1; x++) {
            commentsAr.push(data[x]);
        }

        
        dat += `<ul> <h3 style="text-align:Center; position:Absolute; top:0; right:0; left:0;">Comments for post #${val}</h3>`
        for (let v = 0; v <= commentsAr.length - 1; v++) {
            console.log(commentsAr[v]);

            dat += `
        <li>${commentsAr[v].name} <br> <i>${commentsAr[v].email}</i> <p class="commentBody"><b>${commentsAr[v].body}</b></p></li> <br>`;
        }
        dat += `</ul>`
    
        commentSection[val].innerHTML = dat;
        dat = "";
        commentsAr.length = 0;

        let pew = document.querySelectorAll('.comments');
        
        if(pew[val].style.display === "none"){
            pew[val].style.display = "block";
        }
        else{
            pew[val].style.display = "none";
        }
        // if(pew[val].style.maxHeight){
        //     pew[val].style.maxHeight = null;
        // }
        // else{
        //     pew[val].style.maxHeight = pew.scrollHeight + "px";
        // }
    })


 
}



getPost();