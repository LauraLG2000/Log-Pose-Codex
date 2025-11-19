const db = require('../configuration/database.js').db;

const findAllPirates = (async() => {
   const result = await db('pirates').select('*');
   return result;
    
});

const findPirate = (async(id) => {
    const result = await db('pirates').select('*').where({id: id}).first();
    return result;    
});

const findCrew = (async(crew) => {
    const result = await db('pirates').select('*').where({crew: crew}).first();
    return result;
});

const addPirate = (async(name, nickname, crew, crewPosition, birthDate, devilFruit, bounty, captured, height) => {
    const result = await db('pirates').insert({
        name: name,
        nickname: nickname,
        crew: crew,
        crewPosition: crewPosition,
        birthDate: birthDate,
        devilFruit: devilFruit,
        bounty: bounty,
        captured: captured,
        height: height
    });

    return result;
    
});

const modifyPirate = (async(name, nickname, crew, crewPosition, birthDate, devilFruit, bounty, captured, height) => {
    const result = await db('pirates').update({
        name: name,
        nickname: nickname,
        crew: crew,
        crewPosition: crewPosition,
        birthDate: birthDate,
        devilFruit: devilFruit,
        bounty: bounty,
        captured: captured,
        height: height
    });
    return result;
    
});

const removePirate = (async(id) => {
    const result = await db('pirates').where({id: id}).del();
    return result;
});

const pirateExistsById = (async(id) => {
    const result = await db('pirates').select('*').where({id: id}).first();
    return result != null;
    
});

const pirateExistsByName = (async(name) => {
    const result = await db('pirates').select('*').where({name: name}).first();
    return result != null;
});

const piratesExistByCrew = (async(crew) => {
    const result = await db('pirates').select('*').where({crew: crew}).first();
    return result != null;
});

module.exports = {
    findAllPirates,
    findPirate,
    findCrew,
    addPirate,
    modifyPirate,
    removePirate,
    pirateExistsById,
    pirateExistsByName,
    piratesExistByCrew
}