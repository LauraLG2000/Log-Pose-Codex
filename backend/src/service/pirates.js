const db = require('../configuration/database.js').db;
const { getDays, getDaysfromNow, getYearsFromNow } = require('../utils/dateUtils');

const findAllPirates = (async () => {
    const pirates = await db('pirates').select('*');

    pirates.forEach((pirate) => {
        //almacenamos en una variable el campo de birthDate de la base de datos pirate
        const birthDate = new Date(pirate.birthDate);
        pirate.years = getYearsFromNow(birthDate);
        pirate.birthDate = new Date(pirate.birthDate).toISOString().split('T')[0];
    })

    return pirates;
});

const findPirate = (async (id) => {
    const pirate = await db('pirates').select('*').where({ id: id }).first();

    //almacenamos en una variable el campo de birthDate de la base de datos pirate
    const birthDate = new Date(pirate.birthDate)
    pirate.years = getYearsFromNow(birthDate);
    //formatea la fecha a YYYY-MM-DD
    pirate.birthDate = new Date(pirate.birthDate).toISOString().split('T')[0];


    return pirate;
});

const findPirateByName = (async (nombre) => {
    const pirate = await db('pirates').select('*').where({ nombre: nombre }).first();

    if (pirate === null) return null;

    if (pirate.birthDate) {
        const birthDate = new Date(pirate.birthDate);
        pirate.years = getYearsFromNow(birthDate);
        pirate.birthDate = new Date(pirate.birthDate).toISOString().split('T')[0];
    }

    return pirate
});

const addPirate = (async (nombre, bounty, armarHaki, birthDate) => {
    return await db('pirates').insert({
        nombre: nombre,
        bounty: bounty,
        armarHaki: armarHaki,
        birthDate: birthDate
    });
});

const modifyPirate = (async (id, nombre, bounty, armarHaki, birthDate) => {
    return await db('pirates').where({ id: id }).update({
        nombre: nombre,
        bounty: bounty,
        armarHaki: armarHaki,
        birthDate: birthDate
    });
});

const removePirate = (async (id) => {
    return await db('pirates').where({ id: id }).del();
});

const pirateExistsById = (async (id) => {
    const pirate = await db('pirates').select('*').where({ id: id }).first();

    //almacenamos en una variable el campo de birthDate de la base de datos pirate
    const birthDate = new Date(pirate.birthDate);
    pirate.years = getYearsFromNow(birthDate);
    pirate.birthDate = new Date(pirate.birthDate).toISOString().split('T')[0];


    return pirate != null;
});

const pirateExistsByName = (async (nombre) => {
    const pirate = await db('pirates').select('*').where({ nombre: nombre }).first();

    //almacenamos en una variable el campo de birthDate de la base de datos pirate
    const birthDate = new Date(pirate.birthDate);
    pirate.years = getYearsFromNow(birthDate);
    pirate.birthDate = new Date(pirate.birthDate).toISOString().split('T')[0];

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