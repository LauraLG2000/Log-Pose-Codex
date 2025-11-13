const express = require('express');
const knex = require('knex');

const app = express();
app.use(express.json());

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'pirates.db'
    }
})

app.get('/pirates', async (req, res) => {
    const characters = await db('characters').select('*');
    res.json(characters);
})

app.get('/pirates/:id', async (req, res) => {
    const id =req.params.id;

    //TODO el personaje existe, sino devuelve un 404

    const character = (await db('pirates').select('*').where({id: id})).first();

    res.status(200).json(character);
})

app.post('/pirates', async (req, res) => {
    const name = req.body.name;
    const nickname = req.body.nickname;
    const crew = req.body.crew;
    const crewPosition = req.body.crewPosition;
    const age = req.body.age;
    const devilFruit = req.body.devilFruit;
    const bounty = req.body.bounty;

    const newPirate = await db('pirates').insert({
        name: name,
        nickname: nickname,
        crew: crew,
        crewPosition: crewPosition,
        age: age,
        devilFruit: devilFruit,
        bounty: bounty
    })

    res.status(201).json(newPirate);
})

app.delete('/pirates/:id', async (req, res) => {
    const id = req.params.id;

    //TODO comprobar que existe el pirata antes de eliminarlo de la lista

    await db('pirates').where({id: id}).del();

    res.status(204).end();
})

app.put('/pirates/:id', async (req, res) => {
    const id = req.params.id;

    //TODO Comprobar que existe el pirata antes de actualizar
    const name = req.body.name;
    //Validar que el pirata existe
    const nickname = req.body.nickname;
    const crew = req.body.crew;
    const crewPosition = req.body.crewPosition;
    const age = req.body.age;
    const devilFruit = req.body.devilFruit;
    const bounty = req.body.bounty;

    await db('pirates').update({
        name: name,
        nickname: nickname,
        crew: crew,
        crewPosition: crewPosition,
        age: age,
        devilFruit: devilFruit,
        bounty: bounty
    })

    res.status(204).end();    
})

app.listen(8080, () => {
    console.log("Iniciando el backend en el puerto 8080");
})
