fetch("data.json")
    .then(response => response.json())
    .then(data => {


        afficher(data)

    });


function afficher(donnee) {

    donnee.forEach(recette => {
        console.log(recette.nom)
        console.log(recette.img)
        console.log(recette.desc)
        console.log(recette.difficulte)
        console.log(recette.portions)
        console.log(recette.tempPreparation)
        console.log(recette.tempCuisson)
   

        // pour chacun des ingredients, je conduit ingredients.aliment //


    recette.ingredients.forEach(i => {
        console.log(i.quantite)
        recette.ingredients.forEach(i => {
            console.log(i.unite)
        })
    })    
 

        document.body.innerHTML += `


    <section class="container">
        <div class="card">
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
                            <img src="./assets/curry1.jpg" alt="" class="responsive">
                            <div class="legende">${recette.nom}</div>
                        </div>
                        <div class="large-4">
                            <img src="assets/curry2.jpg" alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src="/assets/curry3.jpg" alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src="/assets/curry4.jpg" alt="" class="responsive">
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
                            <li>${recette.ingredients}</li>
                            <li>${recette.ingredients[1]}</li> 
                            <li>${recette.ingredients[2]}</li>
                            <li>${recette.ingredients[3]}</li>
                            <li>${recette.ingredients[4]}</li>
                            <li>${recette.ingredients[5]}</li>
                            <li>${recette.ingredients[6]}</li>
                            <li>${recette.ingredients[7]}</li>
                            <li>${recette.ingredients[8]}</li>
                            <li>${recette.ingredients[9]}</li>
                            <li>${recette.ingredients[10]}</li>
                            <li>${recette.ingredients[11]}</li>
                        </ul>
                    </div>

                </div>
                <!-- Partie etapes -->
                <div class="large-6">
                    <h2>Etapes</h2>
                    <ol>
                        <li>Émincez l'oignon, hachez l’ail, râpez ou hachez le gingembre, et découpez le poulet en morceaux de taille égale.</li>
                        <li>Dans une grande poêle ou une cocotte, faites chauffer un peu d’huile. Ajoutez l’oignon et faites-le revenir jusqu’à ce qu’il soit translucide. Ajoutez ensuite l’ail et le gingembre, puis faites revenir 1 à 2 minutes de plus</li>
                        <li>Ajoutez les morceaux de poulet dans la poêle et faites-les dorer de tous les côtés</li>
                        <li>Saupoudrez le curry en poudre sur le poulet et mélangez bien pour enrober tous les ingrédients. Laissez cuire 1 à 2 minutes pour faire ressortir les arômes</li>
                        <li>
                            Ajoutez les tomates en dés (avec leur jus) et le lait de coco. Mélangez bien. Portez à ébullition, puis réduisez le feu et laissez mijoter à couvert pendant environ 20 minutes, ou jusqu’à ce que le poulet soit bien cuit et la sauce légèrement épaissie.</li>
                        <li>

                            Salez et poivrez selon votre goût. Si vous aimez les plats plus épicés, vous pouvez ajouter des flocons de piment ou du piment frais à ce stade</li>
                        <li>Parsemez de coriandre fraîche hachée et servez chaud avec du riz basmati ou du pain naan.</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

` 

    });


}