/* Opgave 1*/ //Complete//


// din kode her
const navn = "Keld";
        const aarIvirksomhed = 3;
        const besked = `Hej ${navn}
        du har arbejdet i vores virksomhed i ${aarIvirksomhed} år.`;
        // console.log(besked);

document.getElementById("message").innerHTML = besked;


/* Opgave 2*/ //Complete//

const myData=[
    { "name": "T-shirt",
    "description": "En t-shirt lavet af bomuld",
    "price": 99 },
    { "name": "Jeans",
    "description": "Blå denim jeans med straight fit",
    "price": 299
    },
    { "name": "Hættetrøje",
    "description": "En grå hættetrøje med lynlås",
    "price": 199 }
    ];

    // console.log(myData);

    const productList = document.getElementById("produktListe");
    // console.log(produktListe);
    
    myData.map((dataElement) => {
      let article = document.createElement("article");
      let myHTML = `<article class="produkt">
    <h2>${dataElement.name}</h2>
    <p>${dataElement.description}</p>
    <p>Pris: ${dataElement.price} kr.</p>
    </article>`;
      article.innerHTML = myHTML;
      productList.append(article);
    });


/* Opgave 3 - skriv videre på koden her: */ //Complete//

// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');


// submit button event listner med arrow function
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const myFormFelter = myForm.querySelectorAll('input');

    /* push resultatet fra formen ind på myPersons.
    vi ved der er 2 elementer derfor direkte adressering ved hjælp af []
    */
    myPersons.push({
    navn: myFormFelter[0].value,
    alder: myFormFelter[1].value,
    });
    
    // Sorter listen efter alder og vis den på siden
    const sorteretMyPersons = sorterEfterAlder(myPersons);
    showList(sorteretMyPersons);
    });

    // view code
    function showList(sorteretMyPersons) {
    let html = '';
    sorteretMyPersons.map((person) => {
    // html template.
    html += `<li>${person.navn} er ${person.alder} år gammel.</li>`;
    });
    personList.innerHTML = html;
    }

    // Funktion til at sortere listen efter alder
    function sorterEfterAlder(myPersons) {
    return myPersons.sort((a, b) => a.alder - b.alder);
    }
