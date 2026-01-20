const db = require('../configuration/database.js').db;

const findAllPirates = (async() => {
   return await db('pirates').select('*');    
});

const findPirate = (async(id) => {
    return await db('pirates').select('*').where({id: id}).first();
});

const findPirateByName = (async(nombre) => {
    return await db('pirates').select('*').where({nombre: nombre}).first();
}); 

const addPirate = (async(nombre, bounty, armarHaki) => {
    return await db('pirates').insert({
        nombre: nombre,
        bounty: bounty,
        armarHaki: armarHaki
    });
});

const modifyPirate = (async(id, nombre, bounty,armarHaki) => {
    return await db('pirates').where({id:id}).update({
        nombre: nombre,
        bounty: bounty,
        armarHaki: armarHaki
    });
});

const removePirate = (async(id) => {
    return await db('pirates').where({id: id}).del();
});

const pirateExistsById = (async(id) => {
    const pirate = await db('pirates').select('*').where({id: id}).first();    
    return pirate != null;
});

const pirateExistsByName = (async(nombre) => {
    const pirate = await db('pirates').select('*').where({nombre: nombre}).first();
    return pirate != null;
});

module.exports = {
    findAllPirates,
    findPirate,
    findPirateByName,
    addPirate,
    modifyPirate,
    removePirate,
    pirateExistsById,
    pirateExistsByName
}