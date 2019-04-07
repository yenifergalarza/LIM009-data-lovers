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
   expect(sortArrsToObjects({id:8},{id:8})).toBe(0)
  });
});
describe('filtrarPokemon', () => {
  it('debería ser una función', () => {
    expect(typeof filtrarPokemon).toBe('function')
  });

  test('deberia retornar pokes filtrados', () => {
    expect(filtrarPokemon([{type:"fire"},{type:"ghost"},{id:1,type:"Fire"}],"Fire")).toEqual([])
  });


});

describe('filtrarPokemon', () => {
  it('deberia retornar % pokes de un tipo del total', () => {
    expect(calculusStats([{type:"fuego"},{type:"fuego"},{type:"agua"}],[{type:"agua"}])).toBe(0.03)
  });


})