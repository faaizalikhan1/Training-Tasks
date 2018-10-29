
let albumMain = document.querySelector('.main-album');
let albumStr = "";
let sections;
function getAlbums(){
    $.get('https://jsonplaceholder.typicode.com/albums', function(data, status){

    // $.get('http://localhost:8080/getAlbums', function(data, status){
    console.log(data);
    for(let i=0; i<= data.length-1; i++){
        
        albumStr += `<section id=${data[i].id} class="mainSection"><h2>${data[i].title}</h2>
            <button id="${data[i].id}" onclick="getPhotos(this)">Show photos</button></section>
            <p src="#" id=img${data[i].id}></p>
        `
    }
        albumMain.innerHTML = albumStr;
    })

}

function getPhotos(aid){
    let ids = aid.id;
    console.log(ids);
    $.get(`https://jsonplaceholder.typicode.com/photos/?albumId=${aid.id}`, function(data,status){
        // $.get(`http://localhost:8080/getComments/${aid.id}`, function(data,status){
        let currentElement = document.getElementById(`img${aid.id}`);
        let currentString = "";
        for(let j=0; j<=data.length-1; j++){
            currentString +=  `<img src="${data[j].thumbnailUrl}"> <br>`
        }

        currentElement.innerHTML = currentString;
    })
}

getAlbums();