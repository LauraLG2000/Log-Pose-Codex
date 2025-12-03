const db = require('../configuration/database.js').db;

const findAllPirates = (async() => {
   return await db('pirates').select('*');    
});

const findPirate = (async(id) => {
    return await db('pirates').select('*').where({id: id}).first();
});

const findPirateByName = (async(name) => {
    return await db('pirates').select('*').where({name: name}).first();
}); 

const findPirateNickname = (async(nickname) => {
    return await db('pirates').select('*').where({nickname: nickname}).first();
});

const addPirate = (async(name, nickname, crew, crewPosition, birthDate, devilFruit, bounty, captured, height) => {
    return await db('pirates').insert({
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
});

const modifyPirate = (async(id, name, nickname, crew, crewPosition, birthDate, devilFruit, bounty, captured, height) => {
    return await db('pirates').where({id:id}).update({
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
});

const removePirate = (async(id) => {
    return await db('pirates').where({id: id}).del();
});

const pirateExistsById = (async(id) => {
    const pirate = await db('pirates').select('*').where({id: id}).first();    
    return pirate != null;
});

const pirateExistsByName = (async(name) => {
    const pirate = await db('pirates').select('*').where({name: name}).first();
    return pirate != null;
});

const pirateExistByNickname = (async(nickname) => {
    const pirate = await db('pirates').select('*').where({nickname: nickname}).first();
    return pirate != null;
});

module.exports = {
    findAllPirates,
    findPirate,
    findPirateByName,
    findPirateNickname,
    addPirate,
    modifyPirate,
    removePirate,
    pirateExistsById,
    pirateExistsByName,
    pirateExistByNickname
}