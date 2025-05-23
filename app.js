fetch("data.json")
    .then(response => response.json())
    .then(data => {

        // va chercher dans le tableau si àa existe //

        const imput = document.getElementById("recherche")
        let trie = []
        imput.addEventListener("input", () => {
            document.getElementById("container").innerHTML = ""
            console.log(imput.value)
            trie = data.filter(recette => {
                return recette.nom.includes(imput.value)
            });

            // lors de la rentrée des caractère par l'utilisateur, si ma recette existe, alors je fais le tri, sinon je continu d'afficher la data //

            if (trie.length > 0) {
                afficher(trie)
            } else {
                afficher(data)
            }

        })

        // de toute les manières, j'affiche data //
        afficher(data)

    });





// // Pour chacun des ingrédients, de récupère le tableau (ingrédients) et je le "forEach" dans la liste //

function afficheringredients(tableauingredients) {
    let liste = ""
    tableauingredients.forEach(i => {
        liste += `<li>${i.quantite} ${i.unite} ${i.aliment}</li>`
    });

    return liste
}

// Pour chacune des étapes, de récupère le tableau (étapes) et je le "forEach" dans la liste //

function afficherEtape(tableauEtape) {
    let liste = ""
    tableauEtape.forEach(etapes => {
        liste += `<li> ${etapes.descEtape}</li>`
    });
    return liste
}

// je veux afficher les informations au bon endroit, je let les "sous tableaux" //

function afficher(donnee) {

    donnee.forEach(recette => {


        let ingredientsLi = afficheringredients(recette.ingredients)
        let etapes = afficherEtape(recette.etapes)



        // je récupère les éléments du Html //


        document.getElementById("container").innerHTML += `


        <div data-aos="zoom-out-down" class="card">
            <div class="flex gap16 align-center">
                <h1>${recette.nom}</h1>
                
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">favorite</span></a>
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">
                    share
                    </span></a>   
                
            </div>
            <!-- 3 colonnes -->
            <div class="flex align-start gap32 mt-16">
                <!-- Partie images -->
                <div class="large-3">
                    <div class="align-start flex gap16">
                        <div class="large-12">
                            <img src="${recette.img}" alt="" class="responsive">
                            <div class="legende">${recette.nom}</div>
                        </div>
                        <div class="large-4">
                            <img  src="${recette.img[1]}" alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src="${recette.img[2]}" alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src="${recette.img[3]}" alt="" class="responsive">
                        </div>    
                    </div>
                </div>
                <!-- Partie ingredients-->
                <div class="gap32 large-3">
                    <div class="flex gap16">
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            restaurant
                            </span>${recette.portions}</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            alarm
                            </span>${recette.tempPreparation}</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            local_fire_department
                            </span>${recette.tempCuisson}</p>
                    </div>
                    <div>
                        <h2>Détails</h2>
                        <p class="text-orange">
                           ${recette.desc}
                        </p>
                    </div>
                    <div>
                        <h2>Ingrédients</h2>
                        <ul>
                           ${ingredientsLi} 
                        </ul>
                    </div>

                </div>
                <!-- Partie etapes -->
                <div class="large-6">
                    <h2>Etapes</h2>
                    <ol>
                        ${etapes}
                    </ol>
                </div>
            </div>
        </div>
`
    })
}

// article à la une //

fetch("data2.json")
    .then(response2 => response2.json())
    .then(data2 => {

 afficher2(data2)
})
function afficher2(donnee) {

       
    donnee.forEach(tableau => {



            document.getElementById("container2").innerHTML += 
            ` 
    <div 
     data-aos="flip-left">
             <div  class="card legend flex spaceBetween container align-center">
            <img src="${tableau.img}" alt="" class=" large-6 responsive container">
            <div class="large-6">
                <h2>${tableau.titre}</h2>
                <div class="flex spaceBetween align-center">
                    <p>${tableau.date}</p>
                    <p>${tableau.auteur}</p>
                </div>
                <p>${tableau.resume}</p>
                <div>
                    <p class="btn">Lire l'article</p>
                </div>
            </div>
        </div>
        `

    }) }

 