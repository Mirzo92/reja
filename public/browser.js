// const { response } = require("../app");

// console.log("FrontEnd JS ishga tushdi");

// function itemTemplate(item) {
//     return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
//             <span class="item-text">${item.reja}</span>
//             <div>
//               <button 
//                data-id="${item._id}" 
//                class="edit-me btn-secondary btn-sm mr-1">
//                Ozgartirish
//               </button>
//               <button 
//               data-id="${item._id}"  
//               class="delete-me btn-danger btn-sm">Ochirish</button>
//             </div>
  
//           </li>`;
// }

// let createField = document.getElementById("create-field");



// document.getElementById("create-form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     axios
//     .post("/create-item", { reja: createField.value })
//     .then((response) => {
//         document
//         .getElementById("item-list")
//         .insertAdjacentHTML("beforeend", itemTemplate(response.data));
//         createField.value = "";
//         createField.focus();
//     })
//     .catch((err) => {
//         console.log("iltimos qaytadan harakat qilib koring");
//     });
// });

// document.addEventListener("click", function (e) {

//   // delete oper
//   console.log(e.target);
//   if (e.target.classList.contains("delete-me")) {
//     if (confirm("Aniq ochirmoqchimisiz?")) {
//       axios
//       .post("/delete-item", {id: e.target.getAttribute("data-id")})
//       .then((response) => {
//         console.log(response.data);
//         e.target.parentElement.parentElement.remove();
//       })
//       .catch((err) => {
//         console.log("iltimos qaytadan harakat qilib koring");
//       })
//     }
//   }
  

//   //edit oper
//   if (e.target.classList.contains("edit-me")) {
//     alert("siz edit tugmasini bosdingiz");
//   }
// });







// document.addEventListener("click", function (e) {
//     //delete oper
//     console.log(e.target);
//   if (e.target.classList.contains("delete-me")) {
//     if (confirm('Aniq ochirmoqchimisiz?')) {
//         axios
//         .post("/delete-item", {id: e.target.getAttribute("data-id")})
//         .then((response) => {})
//         .catch((err) => {})
//     }
//   }
//     // edit oper
//   if (e.target.classList.contains("edit-me")) {
//     alert("siz edit tugmasini bosdingiz");
//   }
// })












console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
            <span class="item-text">${item.reja}</span>
            <div>
              <button 
               data-id="${item._id}" 
               class="edit-me btn-secondary btn-sm mr-1">
               Ozgartirish
              </button>
              <button 
              data-id="${item._id}"  
              class="delete-me btn-danger btn-sm">Ochirish</button>
            </div>
          </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos, qaytadan harakat qilib koring.");
    });
});

document.addEventListener("click", function (e) {
  // Delete operation
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq ochirmoqchimisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          e.target.parentElement.parentElement.remove(); // Remove the item from the DOM
          console.log("Item deleted successfully");
        })
        .catch((err) => {
          console.log("Iltimos, qaytadan harakat qilib ko'ring.");
        });
    }
  }

  // Edit operation (you can expand this as needed)
  if (e.target.classList.contains("edit-me")) {
    alert("Siz edit tugmasini bosdingiz");
  }
});
