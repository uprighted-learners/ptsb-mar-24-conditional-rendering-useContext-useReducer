import { createContext, useReducer } from "react";
import { defaultMessages, messageReducer } from "../reducers/MessageReducer";

const MessageContext = createContext();

export function MessageProvider ({ children }) {
    const [state, dispatch] = useReducer(messageReducer, defaultMessages);

    const addMessage = (message) => {
        dispatch({ type: "ADD_MESSAGE", newMessage: message })
    }

    const deleteMessage = () => {
        dispatch({ type: "DELETE_MESSAGE" })
    }

    const context = {
        messages: state.messages,
        addMessage: addMessage,
        deleteMessage: deleteMessage
    }

    return (
        <MessageContext.Provider value={context}>
            {children}
        </MessageContext.Provider>
    )

}
export default MessageContext;