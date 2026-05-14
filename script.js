// ======================
// EXERCICE 
// ======================

// créer div
let div = document.createElement("div");

// créer paragraphe
let p = document.createElement("p");

// texte initial
p.textContent = "Ceci est un paragraphe";

// ajouter p dans div
div.appendChild(p);

// ajouter div dans body
document.body.appendChild(div);

// modifier texte
p.textContent = "Le texte a été modifié";

// style CSS
p.style.backgroundColor = "lightblue";
p.style.textAlign = "center";
p.style.padding = "10px";

// événement click
div.addEventListener("click", function () {
    p.textContent = "Un clic a été détecté";
});


// ======================
// EXERCICE 2
// ======================

let formulaire = document.getElementById("formulaire");

let input = document.getElementById("tachInput");

let liste = document.getElementById("listetaches");


formulaire.addEventListener("submit", function(e){

    // باش الصفحة ماتديرش refresh
    e.preventDefault();

    let texte = input.value;

    if(texte === ""){
        return;
    }

    // créer li
    let li = document.createElement("li");

    li.textContent = texte;

    // bouton terminé
    let btnDone = document.createElement("button");

    btnDone.textContent = "Terminé";

    btnDone.addEventListener("click", function(){

        li.classList.toggle("done");

    });

    // bouton supprimer
    let btnDelete = document.createElement("button");

    btnDelete.textContent = "Supprimer";

    btnDelete.addEventListener("click", function(){

        li.remove();

    });

    li.appendChild(btnDone);

    li.appendChild(btnDelete);

    liste.appendChild(li);

    input.value = "";

});
