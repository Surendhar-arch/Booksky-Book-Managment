// Select elements
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

var cancelpopup = document.getElementById("cancel-popup");
var addbook = document.getElementById("add-book");

var container = document.querySelector(".container");

var booktitle = document.getElementById("book-title-input");
var bookauthor = document.getElementById("book-author-input");
var bookdescription = document.getElementById("book-description-input");

// Open popup
addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Close popup
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Add book
addbook.addEventListener("click", function (event) {
    event.preventDefault();

    if (
        booktitle.value.trim() === "" ||
        bookauthor.value.trim() === "" ||
        bookdescription.value.trim() === ""
    ) {
        alert("Please fill all the fields");
        return;
    }

    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    var h2 = document.createElement("h2");
    h2.textContent = booktitle.value;

    var h5 = document.createElement("h5");
    h5.textContent = bookauthor.value;

    var p = document.createElement("p");
    p.textContent = bookdescription.value;

    var deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";

    deletebutton.addEventListener("click", function () {
        div.remove();
    });

    div.appendChild(h2);
    div.appendChild(h5);
    div.appendChild(p);
    div.appendChild(deletebutton);

    container.appendChild(div);

    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    booktitle.value = "";
    bookauthor.value = "";
    bookdescription.value = "";
});
