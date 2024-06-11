import { useContext } from 'react';
import MessageContext from '../context/MessageContext';


export default function Mailbox (props) {

    const messageContext = useContext(MessageContext)

    const unreadMessages = messageContext.messages;

    return (
        <div>
            <h1>Hello</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
            {
                unreadMessages.length > 0 &&
                unreadMessages.map((message, index) => {
                    return <h4 key={index}>{message}</h4>
                })
            }
        </div>
    )
}