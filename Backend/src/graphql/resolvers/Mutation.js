import Message from "../../models/Message";

const Mutations = { 

    /**
     * Cuando se realizan mutaciones las funciones pueden recibir varios parametros extras,
     * como el parent de la ejecucion que es el primer dato, informacion de la consulta,
     * informacion del contexto, lo cual no es tan necesario
     * 
     * No es necesario colocar el resto para poder evadirlo
     */
    createMessage: async (parent_, {title, content, author}) => {
        const newMessage = new Message({title, content, author});
        return await newMessage.save();
    }
}

export default Mutations;