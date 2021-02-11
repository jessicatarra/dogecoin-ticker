import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const DARK_CLASS = "dark";
const DarkToggle = () => {
    const systemPrefersDark = useMediaQuery(
        { query: "(prefers-color-scheme: dark)" },
        undefined,
        (prefersDark) => {
            setIsDark(prefersDark);
        }
    );
    const [isDark, setIsDark] = useState(systemPrefersDark);

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
