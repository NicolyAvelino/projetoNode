const express = require('express');

const router = express.Router();
router.get('/',(req, res) => {
   res.render('home');
});

router.get('/grade',(req, res) => {
  let objgrade = { 
   grade:[
    {sigla:'AGO021',nome:'Gestão ágil de projetos de software',aulasemana: '4'},
    {sigla:'IBD016',nome:'Banco de dados-Não relacional',aulasemana: '4'},
    {sigla:'IHC004',nome:'Interação humano computador',aulasemana: '2'},
    {sigla:'ILP037',nome:'Técnica de programação II',aulasemana: '4'},
    {sigla:'ING085',nome:'Inglês I',aulasemana: '2'},
    {sigla:'ISW030',nome:'Desenvolvimento web III',aulasemana: '4'},
    {sigla:'MAG004',nome:'Álgebra linear',aulasemana: '4'}
   ]
  }; 
  res.render('grade', objgrade);
});

router.get('/historico',(req, res) => {
  let objhistorico = { 
    historico:[
    {sigla:'IAL010',nome:'Algoritmo e Lógica de Programação',semestre: '1', situacao: 'Aprovado'},
    {sigla:'IBD014',nome:'Modelagem de Banco de Dados',semestre: '1', situacao: 'Aprovado'},
    {sigla:'IES011',nome:'Engenharia de Software I',semestre: '1', situacao: 'Aprovado'},
    {sigla:'ISO011',nome:'Sistemas Operacionais e Redes de Computadores',semestre: '1', situacao: 'Aprovado'},
    {sigla:'ISW028',nome:'Desenvolvimento Web I',semestre: '1', situacao: 'Aprovado'},
    {sigla:'ISW031',nome:'Design Digita',semestre: '1', situacao: 'Aprovado'},
    {sigla:'IBD015',nome:'Banco de Dados Relacional',semestre: '2', situacao: 'Aprovado'},
    {sigla:'IED005',nome:'Estrutura de Dados',semestre: '2', situacao: 'Aprovado'},
    {sigla:'IES012',nome:'Engenharia de Software II',semestre: '2', situacao: 'Aprovado'},
    {sigla:'ILP036',nome:'Técnica de Programação I',semestre: '2', situacao: 'Aprovado'},
    {sigla:'MAT019',nome:'Matemática para Computação',semestre: '2', situacao: 'Aprovado'},
    {sigla:'ISW029',nome:'Desenvolvimento Web II',semestre: '2', situacao: 'Pendente'}
   ]
  }; 
  res.render('historico', objhistorico);
});



module.exports = router;