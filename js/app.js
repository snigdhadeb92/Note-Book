console.log("Welcome app file");
showNotes();
//to add a note
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = " ";
    console.log("notes");
    showNotes();

});

//show notes function from localstorage
function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = " ";
    notesObj.forEach(function (element, index) {
        html += `
         <div class="notesCard my-2 mx-2 card" id="notesCard" style="width: 18rem;">       
         <div class="card-body">
           <h5 class="card-title">Note ${index + 1}</h5>
           <p class="card-text">${element}</p>
           <button onclick="deleteNotes(this.id)" class="btn btn-danger" id="${index}">Delete Note</button>
         </div>
       </div>`;
    });
    let noteElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteElm.innerHTML = html;
    } else {
        noteElm.innerHTML = `Please Add some notes it's empty now`;
    }
}

//function to delete a note
function deleteNotes(index) {
    //console.log("i an deleting", index);
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let srcTxt = document.getElementById("srcTxt");

srcTxt.addEventListener("input",function(){
  let inputTxt = srcTxt.value.toLowerCase();
  //console.log("this is event: "+inputTxt);
  let notesCard = document.getElementsByClassName("notesCard");
  Array.from(notesCard).forEach(function(element){
     let cartTxt = element.getElementsByTagName("p")[0].innerText;
     if(cartTxt.includes(inputTxt)){
         element.style.display = "block";
     }else{
         element.style.display = "none";
     }
  })

});
