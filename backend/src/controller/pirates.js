const {findAllPirates, pirateExistsById, pirateExistsByName, piratesExistByCrew, modifyPirate, addPirate, removePirate} = require('../service/pirates');

const getPirates = (async(req, res) => {
    //TODO soporte de filtros
    const pirates = await findAllPirates();
    res.status(200).json(pirates);    
});

const getPirate = (async(req, res) => {
    const id = req.params.id;

    if(! await pirateExistsById(id)){
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the pirate is not being sought and captured'
        });
    }

    res.status(200).json(id);

});

const getPiratesByCrew = (async(req, res) => {
    const crew = req.params.crew;

    if(! await piratesExistByCrew(crew)){
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the crew has not been founded'
        });
    }

    res.status(200).json(pirate);
});

//Nuevo pirata
const postPirate = (async(req, res) => {
    const name = req.body.name;

    if( await pirateExistsByName(name)){
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
    const captured=req.body.capture;
    const height=req.body.height
    

    const newPirate = await addPirate(name, nickname, crew, crewPosition, birthDate, devilFruit, bounty, captured, height);
    //TODO devolver datos como respuesta
    res.status(201).json(newPirate);
});

//Editar pirata
const putPirate = (async(req, res) => {
    const id = req.params.id;

    if(! await pirateExistsById(id)){
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the pirate has not been founded'
        });
    }
    const name = req.params.name;
    const nickname = req.body.nickname;
    const crew = req.body.crew;
    const crewPosition = req.body.crewPosition;
    const birthDate = req.body.birthDate;
    const devilFruit = req.body.devilFruit;
    const bounty = req.body.bounty;
    const captured=req.body.capture;
    const height=req.body.height

    const changePirate = await modifyPirate(id, name, nickname, crew, crewPosition, birthDate, devilFruit, bounty, captured, height);
    //TODO devolver datos como respuesta
    res.status(201).json(changePirate);
    
});

//Eliminar pirata
const deletePirate = (async(req, res) => {
    const id = req.params.id;

    if(! await pirateExistsById(id)){
        return res.status(404).json({
            code: 404,
            title: 'not-found',
            message: 'the pirate has not been founded'
        });
    }

    const deletePirate = await removePirate(id);

    res.status(204).end(deletePirate);
});

module.exports = {
    getPirates,
    getPirate,
    getPiratesByCrew,
    postPirate,
    putPirate,
    deletePirate
}