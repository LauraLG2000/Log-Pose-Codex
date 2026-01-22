console.log('hola')

const url = 'http://localhost:8080/pirates'

//llamada a la api async/await

//definimos funcion
const fetchData = async () => {
    try {
        const result = await fetch(url) //si no se pone nada por defecto hace get
        const data = await result.json()
        console.log(data) //esta linea no es obligatoria
        //pasamos solo el array de resultados
        printData(data)
    } catch (error) { console.error(error) }
}

const printData = (pirateList) => {
    console.log(pirateList)
    const list = document.getElementById('list')

    //bucle que nos recorre todo el array de pokemon
    pirateList.forEach(async (pirate) => {

        console.log(pirate)

        //destructuracion de objetos IMPORTANTE
        const {
            id,
            name,
            nickname,
            crew,
            crewPosition,
            birthDate,
            devilFruit,
            bounty,
            height,
            dateManga,
            dateAnime,
            description,
            conquerHaki,
            obserHaki,
            armarHaki
        } = pirate
        // esto se hace para no escribir pokemon.name y cambiarlo por name

        //construccion del html de las tarjetas
        const card = document.createElement(`div`)
        card.classList.add('pirateList-wantedPoster') //<li class ="card"></li>
        //dentro copiamos el codigo de lo que iria dentro del li en html
        card.innerHTML = `
        <h1>WANTED</h1>
                <img class="wantedPoster-image" src="./images/cartel_prueba.jpg" alt="Imagen Se Busca Monkey.D.Luffy">
                <div class="wantedPoster-data">
                    <h2>DEAD OR ALIVE</h2>
                    <h2>${name}</h2>
                    <h3>${bounty}</h3>
                </div>
        `;
        
        //añado al contenedor el hijo que acabo de crear
        list.appendChild(card)

    });
}

//llamamos a la funcion
fetchData()

