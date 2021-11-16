import mensagens from './Mensagens.js'

const PlaylistsValidator = {
    nome: {
        required: mensagens.required,
        maxLength: { value: 50, message: mensagens.maxLength},
    },
    musica: {
        required:  mensagens.required,
        minLength: { value: 3, message: mensagens.minLength },
   
    }
};

export default PlaylistsValidator;
