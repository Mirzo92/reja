
console.log("FrontEnd JS ishga tushdi"); 


// functionni define qismi
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


// step A FRONT ENDGA KIRIB BACKENDGA MALUMOT YUBORISH
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();  // tradional api ni toxtatdik
    axios // front end bn backendi oldi berdisiga kerak
    .post("/create-item", { reja: createField.value }) //methods, create item bu manzil
    .then((response) => {
        document //object
        .getElementById("item-list") 
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));//functionni call qismi
        createField.value = ""; 
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos, qaytadan harakat qilib koring.");
    }); 
});

document.addEventListener("click", function (e) {
  // Delete operation     delete me degan classi bor tugma bosilsa
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq ochirmoqchimisiz?")) {
      console.log("STEP-1")
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") }) //front enddan beckendga ochirmoqchi bolgan elementimizni id sini yuboryapmiz
        .then((response) => {
          console.log("STEP-4")
          e.target.parentElement.parentElement.remove(); // li ga ciqyapmiz va ochiryapmiz
          console.log("Item deleted successfully");
        })
        .catch((err) => {
          console.log("Iltimos, qaytadan harakat qilib ko'ring.");
        });
    }
  }

  // Edit operation (you can expand this as needed)

//edit-me degan classga ega bolgan button bosilsa, pastdagi code lar ishga tushadi
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("ozgartirish kiriting", 
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"), //ozgartirmoqci bolgan elementimizni id sini yuboryapmiz
          new_input: userInput, //yangi kiritilgan inputni yuboryapmiz
        })
        .then((response) => { //response = res.json({state: "success"})
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput; 
        })
        .catch((err) => {
          console.log("Iltimos, qaytadan harakat qilib ko'ring.");
        });
    }
    
  }
});
 
//clean-all degan id ga ega bolgan button bosilsa, function ishga tushadi
document.getElementById("clean-all").addEventListener("click", function() {
  axios.post("/delete-all", { delete_all: true }) // front enddan backendga delete-all nomi bn true qiymatni yuboryapmiz
  .then((response) => {
    alert(response.data.state); // state: hamma rejalar ocirilidi
    document.location.reload(); // reload qilarkan
  });
});


