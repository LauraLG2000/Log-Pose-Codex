const { response } = require('express');
const { findAllPirates,  findPirate, findPirateByName, pirateExistsById, pirateExistsByName, modifyPirate, addPirate, removePirate} = require('../service/pirates');


const getPirates = (async (req, res) => {
    const name = req.query.nombre;

    if (req.query.nombre === undefined) {
        const pirates = await findAllPirates();
        return res.status(200).json(pirates);
    }

    else if (req.query.nombre !== undefined) {
        if (! await pirateExistsByName(nombre)) {
            return res.status(404).json({
                code: 404,
                title: 'not-found',
                message: 'the pirate has not been founded'
            });
        }

        const pirate = await findPirateByName(nombre);
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
    const nombre = req.body.nombre;

    if (await pirateExistsByName(nombre)) {
        return res.status(409).json({
            code: 409,
            title: 'conflict',
            message: 'The pirate is already on the hunt and capture.'
        });
    }
    const bounty = req.body.bounty;
    const armarHaki = req.body.armarHaki;
    const birthDate = req.body.birthDate;
    

    if (nombre === null || bounty === null || birthDate === null) {
        return res.status(400).json({
            code: 400,
            return: 'bad-request',
            message: 'There are fields to be filled in.'
        });
    }

    const newPirate = await addPirate(nombre, bounty, armarHaki, birthDate);

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
    const nombre = req.body.nombre;
    const bounty = req.body.bounty;
    const armarHaki = req.body.armarHaki;
    const birthDate = req.body.birthDate;

    await modifyPirate(id, nombre, bounty, armarHaki, birthDate);

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
    deletePirate
}