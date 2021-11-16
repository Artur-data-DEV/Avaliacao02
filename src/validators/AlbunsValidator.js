import mensagens from "./Mensagens.js";

const AlbunsValidator = {
  nome: {
    required: mensagens.required,
    minLength: { value: 3, message: mensagens.minLength },
    maxLength: { value: 40, message: mensagens.maxLength },
  },
  artista: {
    required: mensagens.required,
    minLength: { value: 3, message: mensagens.minLength },
    maxLength: { value: 40, message: mensagens.maxLength },
  },
  genero: {
    required: mensagens.required,
    minLength: { value: 1, message: mensagens.minLength },
    maxLength: { value: 40, message: mensagens.maxLength },
    
  },
  ano: {
    required: mensagens.required,
    minLength: {value: 4, message: mensagens.minLength},
    maxLength: {value: 4, message: mensagens.maxLength},
  },
};

export default AlbunsValidator;
