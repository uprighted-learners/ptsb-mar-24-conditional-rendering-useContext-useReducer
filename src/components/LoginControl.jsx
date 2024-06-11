import { useContext, useState } from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Mailbox from "./Mailbox";
import Greeting from "./Greeting";
import Page from "./Page";
import MessageContext from "../context/MessageContext";

export default function LoginControl(props) {
    const [isLoggedIn, setLogin] = useState(false);
    const messageContext = useContext(MessageContext)

    function handleLoginClick() {
        setLogin(true);
    }

    function handleLogoutClick() {
        setLogin(false);
    }

    let button;

    if (isLoggedIn) {
        button = <LogoutButton onClick={ handleLogoutClick }/>
    } else {
        button = <LoginButton onClick={ handleLoginClick } />
    }

    function handleSubmit(e) {
        e.preventDefault();
        const message = e.target.message.value;
        console.log(message);
        messageContext.addMessage(message);
    }

    return (
        <div>
            { button }
            <Greeting isLoggedIn={isLoggedIn} />
            <Page />
            { isLoggedIn && <Mailbox /> }

            { isLoggedIn && 

                <form onSubmit={handleSubmit}>
                    <input name="message" id="message" placeholder="Message" />
                    <input type="submit" />
                </form>
            
            }
        </div>
    )
}