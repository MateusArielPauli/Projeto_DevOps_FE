//import axios from "axios";
//import { useReducer, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { API_URL } from "../../AppConsts";


const URL = `${API_URL}/pacotes`;

const pacotes = [
    { id: 1, nome: 'Pacote 1', descricao: 'Cataratas' },
    { id: 2, nome: 'Pacote 2', descricao: 'Parque das Aves' },
    { id: 3, nome: 'Pacote 3', descricao: 'Usina Hidreletrica de Itaipu' },
    { id: 4, nome: 'Pacote 4', descricao: 'Refúgio Biológico' },
    { id: 5, nome: 'Pacote 5', descricao: 'Museu de Cera' },
  ];
  
  export default pacotes;

  