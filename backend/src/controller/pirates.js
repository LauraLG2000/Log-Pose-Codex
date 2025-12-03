const { response } = require('express');
const { findAllPirates, findPirateByName, findPirateNickname, pirateExistsById, pirateExistsByName, pirateExistByNickname, modifyPirate, addPirate, removePirate, findPirate } = require('../service/pirates');

const getPirates = (async (req, res) => {
    const name = req.query.name;
    const nickname = req.query.nickname;

    if (req.query.name === undefined && req.query.nickname === undefined) {
        const pirates = await findAllPirates();
        return res.status(200).json(pirates);
    }

    else if (req.query.name !== undefined) {
        if (! await pirateExistsByName(name)) {
            return res.status(404).json({
                code: 404,
                title: 'not-found',
                message: 'the pirate has not been founded'
            });
        }

        const pirate = await findPirateByName(name);
        res.status(200).json(pirate);
    }

    else if (req.query.nickname !== undefined) {
        if (! await pirateExistByNickname(nickname)) {
            return res.status(404).json({
                code: 404,
                title: 'not-found',
                message: 'the pirate has not been founded'
            });
        }

        const pirate = await findPirateNickname(nickname);
        res.status(200).json(pirate);
    }
});

const getPirate = (async (req, res) => {
    const id = req.params.id;

    if (! await pirateExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the pirate has not been founded'
        });
    }

    const pirate = await findPirate(id);
    res.status(200).json(pirate);

});

//Nuevo pirata
const postPirate = (async (req, res) => {
    const name = req.body.name;

    if (await pirateExistsByName(name)) {
        return res.status(409).json({
            code: 409,
            title: 'conflict',
            message: 'The pirate is already on the hunt and capture'
        });
    }
    const nickname = req.body.nickname;
    const crew = req.body.crew;
    const crewPosition = req.body.crewPosition;
    const birthDate = req.body.birthDate;
    const devilFruit = req.body.devilFruit;
    const bounty = req.body.bounty;
    const description = req.body.description;
    const conquerHaki = req.body.conquerHaki;
    const obserHaki = req.body.obserHaki;
    const armarHaki = req.body.armarHaki;
    const height = req.body.height;

    if (name === null || nickname === null || bounty === null) {
        return res.status(400).json({
            code: 400,
            return: 'bad-request',
            message: 'There are fields to be filled in.'
        });

    }

    const newPirate = await addPirate(name, nickname, crew, crewPosition, birthDate, devilFruit, bounty, description, conquerHaki, obserHaki, armarHaki, height);

    res.status(201).json({
        code: 201,
        tittle: 'created',
        message: 'The data of the pirate have been successfully entered.',
        data: newPirate
    });

});

//Editar pirata
const putPirate = (async (req, res) => {
    const id = req.params.id;

    if (!await pirateExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the pirate has not been founded'
        });
    }
    const name = req.body.name;
    const nickname = req.body.nickname;
    const crew = req.body.crew;
    const crewPosition = req.body.crewPosition;
    const birthDate = req.body.birthDate;
    const devilFruit = req.body.devilFruit;
    const bounty = req.body.bounty;
    const description = req.body.description;
    const conquerHaki = req.body.conquerHaki;
    const obserHaki = req.body.obserHaki;
    const armarHaki = req.body.armarHaki;
    const height = req.body.height;

    await modifyPirate(id, name, nickname, crew, crewPosition, birthDate, devilFruit, bounty, description, conquerHaki, obserHaki, armarHaki, height);

    res.status(204).end();

});

//Eliminar pirata
const deletePirate = (async (req, res) => {
    const id = req.params.id;

    if (!await pirateExistsById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the pirate has not been founded'
        });
    }

    await removePirate(id);

    res.status(204).end();
});

module.exports = {
    getPirates,
    getPirate,
    postPirate,
    putPirate,
    deletePirate,
}