const chai = require("chai");
const expect = chai.expect;
const sabre = require("../lib/sabre.js");

describe("Cores do sabre de luz", () =>{


 it("deve ativar a cor verde", ()=>{
  expect(sabre.corAtivada("Yoda")).to.equal("Verde");   
 });   
 it("deve ativar a cor roxa", () =>{
   expect(sabre.corAtivada("Mace Windu")).to.equal("Roxa");  
 });
 it("deve retornar mensagem de nome inválido", () =>{
   expect(sabre.corAtivada("")).to.equal("Nome inválido");  
 });


});
