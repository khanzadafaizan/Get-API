// const categoriesAPI = fetch('https://dev-apis.explorebtk.com/api/v1/categories');
// const categoriesAPI2 = fetch('https://dev-apis.explorebtk.com/api/v1/categories');

// categoriesAPI.then((response) => {
//     response.json().then((categories) => {
//         console.log('categoriesAPI categories', categories)
//     })
// })

// categoriesAPI2.then((response) => {
//     return response.json()
// }).then((categories) => {
//     const ul = document.getElementById('categories');
//     categories.forEach((category) => {
//         const li = document.createElement('li')
//         li.style.color = category.color;
//         li.innerText = category.name;
//         ul.append(li)
//     })
// })

// const api = fetch('https://jsonplaceholder.typicode.com/users');

//   api.then(function(reponse){
//     return reponse.json() 
// }).then((users) =>{
//     const ul = document.getElementById('users');
//     users.forEach((user) =>{
//         const name = document.createElement('h1');
//         name.innerText = user.name;
//         const userName = document.createElement('h2');
//         userName.innerText = user.username;
//         const email = document.createElement('p');
//         email.innerText = user.email;
//         const phone = document.createElement('h3');
//         phone.innerText = user.phone;
//         ul.append(name, userName, email, phone);
//     })
// })
  
// const albums = fetch('https://jsonplaceholder.typicode.com/albums');
 
// albums.then(function(response){
//  return response.json()
// }).then((album) =>{
//  const ul = document.getElementById('albums');
//  album.forEach((alb)=>{
//   const id = document.createElement('li');
//   id.innerText = alb.id;
//   const li = document.createElement('li');
//   li.innerText = alb.title;

//   ul.append(id,li);
//  })
// })


// const photosId = fetch('https://jsonplaceholder.typicode.com/photos');
  
// photosId.then((response)=>{
//     return response.json()
// }).then((photos)=>{
//   const container = document.getElementById('photos');
//   photos.forEach((photo)=>{
//     const divChild = document.createElement('div');
//     const h1 = document.createElement('h1');
//     h1.innerText = photo.title;
//     divChild.append(h1);
//     container.append(divChild); 
//   })
// })

// const usersIds = fetch('https://jsonplaceholder.typicode.com/users');

// usersIds.then((response) => {
//     return response.json()
// }).then((userId) => {
    
//     const ul = document.getElementById('users');
//     userId.forEach((user) => {
//         const li = document.createElement('li')
//         const link = document.createElement('a')
//          link.href = "user.html";
//          link.innerText = user.id;
//          li.append(link);
//         ul.append(li)
//     })
// })



// const postIdsElement = document.getElementById("postIds");

//  fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(posts => {
//     posts.forEach(post => {
//         const li = document.createElement("li");
//         const link = document.createElement("a");


//         link.textContent = `Post ID: ${post.id}`;
//         link.href = `user.html?id=${post.id}`;
//         link.classList.add("user-link");
//         li.appendChild(link);
//         postIdsElement.appendChild(li);
//     });
// });

const userId = document.getElementById("users-Id");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const li = document.createElement("li");
            const link = document.createElement("a");

            link.textContent = `User ID: ${user.id}`;
            link.href = `user.html?id=${user.id}`;
            link.classList.add("user-link");
            
            li.appendChild(link);
            userId.appendChild(li);
        });
    });

