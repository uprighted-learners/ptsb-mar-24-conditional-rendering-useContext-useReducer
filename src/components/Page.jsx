import WarningBanner from "./WarningBanner";
import { useState } from "react";

export default function Page (props) {

    const [showWarning, setWarning] = useState(false);

    function handleToggleClick () {
        if (showWarning) {
            setWarning(false);
        } else {
            setWarning(true);
        }
    }

    return (
        <div>
            <WarningBanner warn={showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning ? "Hide Warning" : "Show Warning"}
            </button>
        </div>
    )
}