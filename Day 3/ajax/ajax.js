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

function getPost(start, end) {

    $.get('https://jsonplaceholder.typicode.com/posts', function (data, status) {
        let lth = data.length;
        for (let i = start; i <= end; i++) {
        
            str += `<div class="jpg"><h2 class="heading">${i} . ${data[i].title}</h2>
        <p class="post-main">${data[i].body}</p></div><span class="comments"></span><button id="${i}" class="showComments">Get comments</button> <br>`;

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
        // console.log(data[val].email);


        for (let x = 0; x <= data.length - 1; x++) {
            commentsAr.push(data[x]);
        }

        dat += `<ol>`
        for (let v = 0; v <= commentsAr.length - 1; v++) {
            console.log(commentsAr[v]);

            dat += `
        <li>${commentsAr[v].name} <br> <i>${commentsAr[v].email}</i> <p><b>${commentsAr[v].body}</b></p></li> <br>`;
        }
        dat += `</ol>`
    
        commentSection[val].innerHTML = dat;
        dat = "";
        commentsAr.length = 0;
    })
}



getPost(start, end);