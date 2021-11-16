import mensagens from "./Mensagens.js";

const ArtistasValidator = {
  nome: {
    required: mensagens.required,
    minLength: { value: 3, message: mensagens.minLength },
    maxLength: { value: 70, message: mensagens.maxLength },
  },
  país: {
    required: mensagens.required,
    minLength: { value: 3, message: mensagens.minLength },
    maxLength: { value: 25, message: mensagens.maxLength },
  },
  genero: {
    required: mensagens.required,
    minLength: { value: 1, message: mensagens.minLength },
    maxLength: { value: 40, message: mensagens.maxLength },
    
  },
  dataNasc: {
    required: mensagens.required,
    minLength: {value: 4, message: mensagens.minLength},
    maxLength: {value: 10, message: mensagens.maxLength},
  },
  dataFalesc: {
    minLength: {value: 4, message: mensagens.minLength},
    maxLength: {value: 10, message: mensagens.maxLength},
  },
  instrumento: {
    minLength: {value: 3, message: mensagens.minLength},
    maxLength: {value: 20, message: mensagens.maxLength},
  },
};

export default ArtistasValidator;
