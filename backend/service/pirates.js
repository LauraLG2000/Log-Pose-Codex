const db = require('./configuration/database');

const findAllPirates = (async() => {
    await db('pirates').select('*');
    
});

const findPirate = (async(id) => {
    return await db('pirates').select('*').where({id: id}).first();
});

const findCrew = (async() => {
    return await db('pirates').select('*').where({id: id}).first();
});

const addPirate = (async(name, nickname, crew, crewPosition, age, devilFruit, bounty) => {
    return await db('pirates').insert({
        name: name,
        nickname: nickname,
        crew: crew,
        crewPosition: crewPosition,
        age: age,
        devilFruit: devilFruit,
        bounty: bounty
    });
    
});

const modifyPirate = (async(name, nickname, crew, crewPosition, age, devilFruit, bounty) => {
    await db('pirates').update({
        name: name,
        nickname: nickname,
        crew: crew,
        crewPosition: crewPosition,
        age: age,
        devilFruit: devilFruit,
        bounty: bounty
    });
    
});

const removePirate = (async() => {
    return await db('pirates').where({id: id}).del();
});

const pirateExistsById = (async(id) => {
    const pirate = findPirate(id);
    return pirate != null;
    
});

const pirateExistsByName = (async(name) => {
    const pirate = findPirate(name);
    return pirate != null;
});

const crewExistsByName = (async() => {
    
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
    crewExistsByName
}