import mensagens from './Mensagens.js'

const FavoritosValidator = {
    nome: {
        required: mensagens.required,
        maxLength: { value: 50, message: mensagens.maxLength},
    },
    tipo: {
        required:  mensagens.required,
     
    }
};

export default FavoritosValidator;
