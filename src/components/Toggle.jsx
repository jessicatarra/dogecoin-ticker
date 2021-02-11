import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useEffect, useState } from "react";

const DARK_CLASS = "dark";
const DarkToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add(DARK_CLASS);
        } else {
            document.documentElement.classList.remove(DARK_CLASS);
        }
    }, [isDark]);

    return (
        <Toggle
            className="DarkToggle"
            checked={isDark}
            onChange={(event) => setIsDark(event.target.checked)}
            icons={{ checked: "🌙", unchecked: "🔆" }}
            aria-label="Dark mode"
        />
    );
};

export default DarkToggle;
