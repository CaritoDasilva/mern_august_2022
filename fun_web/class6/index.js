// DRY
// DONT REPEAT YOURSELF

// WET
// WRITE EVERYTHING TWICE

console.log('hola');

// function mountElementInHtml() {
//     const postContainer = document.getElementById('postContainer');
//     postContainer.innerHTML = "Hola Chiquis";
// }

mountElementInHtml();

function greet() {
    alert('hola');
}

function changeColor(element) {
    console.log("🚀 ~ file: index.js ~ line 12 ~ changeColor ~ element", element)
    element.style.backgroundColor = "blue"
}

function returnColor(element) {
    element.style.backgroundColor = "white"
}

function goodBye(element) {
    element.style.display = "none";
}

function greetAndGoodBye(element) {
    greet();
    goodBye(element);
}

function changeImage(element) {
    let image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TXmMD_Y2Ibvww6xBPAh3ifPngtO6_ffSsg&usqp=CAU';
    if(element.src === image) {
        element.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtIXWGYPlJ2uAEu-2bPysErGZVmLmOOu5nHw&usqp=CAU';
    } else {
        element.src = image;
    };
};

function sendComment(event) {
    console.log("🚀 ~ file: index.js ~ line 48 ~ sendComment ~ event", event)
    event.preventDefault();
    // console.log("🚀", commentInput.value)

    console.log('se llamó al formulario');
    // Estos los traigo del HTML
    const postContainer = document.getElementById('postContainer');
    const commentInput = document.getElementById('commentInput');

    // Los estoy creando nuevos
    const rowPost = document.createElement('div');
    const postDiv = document.createElement('div');
    const textPost = document.createElement('p');
    const textNodePost = document.createTextNode(commentInput.value);

    // Armado del post
    textPost.appendChild(textNodePost);
    postDiv.appendChild(textPost);
    rowPost.appendChild(postDiv);
    postContainer.prepend(rowPost);

    // Agregar los estilos
    rowPost.classList.add('row');
    postDiv.classList.add('col');

    commentInput.value = '';

    
}





