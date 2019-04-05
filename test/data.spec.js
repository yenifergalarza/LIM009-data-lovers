global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('./data.spec.js');


describe('sortArrsToObjects', () => {
  
  it('debería ser una función', () => {
    expect(typeof sortArrsToObjects).toBe('function');
  });

  it('debería retornar -1 por que el primer parametro es el menor', () => {
    expect(sortArrsToObjects({id:5},{id:8})).toBe(-1)
  });

  it('debería retornar 1 por que el primer parametro es mayor', () => {
    expect(sortArrsToObjects({id:8},{id:1})).toBe(1)
  });


  it('debería retornar 0 por que los 2 parametros son iguales', () => {
   expect(sortArrsToObjects({id:8},{id:8}))
  });
});
describe('filtrarPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarPokemon).toBe('function')
  });

  it('deberia retornar pokes filtrados', () => {
    expect(filtrarPokemon([{type:"fuego"},{type:"agua"}],"fuego")).toEqual([])
  });


})