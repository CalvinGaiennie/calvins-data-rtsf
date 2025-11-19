import { useState } from 'react';
import { essayNames } from '../FakeData';
function EssayPage() {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="mx-4 position-fixed end-0">
            <button className="me-5" onClick={toggleMenu}>{isOpen ? "X" : "H"}</button>
            { isOpen &&
                <div className="mt-3">
                    {essayNames.map((essayName) => (
                        <p key={essayName}>{essayName}</p>
                    ))}
                </div>
            }
        </div>
    )
}
export default EssayPage