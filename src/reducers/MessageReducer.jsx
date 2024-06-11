export const defaultMessages = {
    messages: ['React', 'Re: React', 'Re:Re: React']
}

export function messageReducer(state, action) {
    switch (action.type) {
        case "ADD_MESSAGE": {

            let newState = { ...state };
            newState.messages.push(action.newMessage);

            return newState;
        }
    }
}