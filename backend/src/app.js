const express = require('express');
const {findAllPirates, findPirate, findCrew, addPirate, modifyPirate, removePirate, pirateExistsById, pirateExistsByName, crewExistsByName}= require('./service/pirates');
const app = express();
app.use(express.json());


app.get('/pirates', async (req, res) => {
    //TODO soporte filtros
    const pirates = findAllPirates();
    res.status(200).json(pirates);
});

app.get('/pirates/:id', async (req, res) => {
    const id =req.params.id;
    const pirate = findPirate(id);

    if(!cityExistsById(id)){
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'The pirate does not exist'
        });
    }

    res.status(200).json(pirate);
});

app.post('/pirates', async (req, res) => {
    const name = req.body.name;

    if(pirateExistsByName(name)){
        return res.status(404).json({
            code: 409,
            title: 'Conflict',
            message: 'A pirate already exists with that name'
        });
    }
    //TODO comprobar que la edad y la recompensa son de tipo entero
    const nickname = req.body.nickname;
    const crew = req.body.crew;
    const crewPosition = req.body.crewPosition;
    const age = req.body.age;
    const devilFruit = req.body.devilFruit;
    const bounty = req.body.bounty;

    const newPirate = addPirate(name, nickname, crew, crewPosition, age, devilFruit, bounty);
    //TODO devolver los datos del pirata como respuesta
    res.status(201).json(newPirate);
});

app.delete('/pirates/:id', async (req, res) => {
    const id = req.params.id;

    if(!pirateExistsById(id)){
        return res.status(404).json({
            code:404,
            title: 'not found',
            message: 'the pirate does not exist'
        });
    }
    const deletePirate = removePirate();

    res.status(204).end(deletePirate);
});

app.put('/pirates/:id', async (req, res) => {
    const id = req.params.id;

    if(!pirateExistsById(id)){
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the pirate does not exist'
        });
    }

    const name = req.body.name;
    const nickname = req.body.nickname;
    const crew = req.body.crew;
    const crewPosition = req.body.crewPosition;
    const age = req.body.age;
    const devilFruit = req.body.devilFruit;
    const bounty = req.body.bounty;

    const changePirate = modifyPirate(name, nickname, crew, crewPosition, age, devilFruit, bounty);
    res.status(204).end(changePirate);    
});

app.listen(8080, () => {
    console.log("Iniciando el backend en el puerto 8080");
});
