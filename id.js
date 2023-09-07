// const userLists = fetch('https://jsonplaceholder.typicode.com/users');

// userLists.then((response) => {
//   return response.json()
// }).then((usersList) => {
  
//   const ul = document.getElementById('user-id');
//   usersList.forEach((user) => {
//       const li = document.createElement('li')
//       li.innerText = user.name; 
//       ul.append(li)
//   })
// })

// const userDetails = document.getElementById("user-data");
// const userData = new URLSearchParams(window.location.search).get("id");


// if (userData) {
//      fetch(`https://jsonplaceholder.typicode.com/users  ${userData}`)
//         .then(response => response.json())
//         .then(user => {
//             const userContent = `
//                 <h2>Post ID: ${user.id}</h2>
//                 <h3>Title: ${user.name}</h3>
//                 <p>${user.email}</p>
//             `;
//             userDetails.innerHTML = userContent;
//             userDetails.appendChild(user.id, user.email, user.name)
            
//         })
// }

const UserDetails = document.getElementById("postDetail");
const userId = new URLSearchParams(window.location.search).get("id");

if (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {

        const userContent = `
          <h2>User ID: ${user.id}</h2>
           <h3>Name: ${user.name}</h3>
           <h3>User Name: ${user.username}</h3>
         <p>User Email: ${user.email}</p>
         <p>User Phone: ${user.phone}</p>
                `;
                UserDetails.innerHTML = userContent;
    })
}
