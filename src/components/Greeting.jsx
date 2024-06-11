export default function Greeting(props) {

    const isLoggedIn = props.isLoggedIn;

    return (
        <div>
            The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
        </div>
    )
}

// expression ? true : false

/*

    if (expression) {
        "currently"
    } else {
        "not"
    }

    if (isLoggedIn) {
        "currently"
    } else {
        "not"
    }
*/