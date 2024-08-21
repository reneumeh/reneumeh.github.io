import { useEffect, useState } from 'react';

const useIsMenuOpen = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = (e: any) => {
            if(e.target.className === "page-buttons") {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    })

    return {isMenuOpen, setMenuOpen}
}

export default useIsMenuOpen