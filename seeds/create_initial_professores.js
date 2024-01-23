/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('professores').del()
  await knex('professores').insert([
    { nome: 'joel', email:'Teste@email.com' , telefone:'(84)991095123' ,nascimento:'2006-06-20'},
    { nome: 'joelito', email:'Testr@email.com' , telefone:'(84)991095124' ,nascimento:'2007-07-20'},
    { nome: 'joelsson', email:'Testt@email.com' , telefone:'(84)991095125' ,nascimento:'2005-08-20'},
  ]);
};
