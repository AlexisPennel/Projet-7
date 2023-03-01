import styles from './Collapse.module.css';
import arrowDown from '../images/arrowDown.svg';
import arrowUp from '../images/arrowUp.svg';
import { useState } from 'react';


const Collapse = ({ title, content }) => {

    const [collapseOpen, setCollapseOpen] = useState(false);
    const handleClick = () => {
        setCollapseOpen(!collapseOpen)
    };

    return (
        <>
            <div className={styles.collapse__box}>
                <h2>{title}</h2>
                <img src={collapseOpen ? arrowUp : arrowDown} alt="" onClick={handleClick} />
                {/* {CollapseOpen ? <img src={arrowUp} alt="" onClick={() => setCollapseOpen(false)} /> : <img src={arrowDown} alt="" onClick={() => setCollapseOpen(true)} />} */}
            </div>
            {collapseOpen && (

                <div className={styles.collapse__content}>
                    {typeof content === "string" ? <p>{content}</p> :
                        <ul>
                            {content.map((element, index) => (
                                <li key={index}>{element}</li>
                            ))}
                        </ul>
                    }
                </div>
            )}
        </>
    )
};

export default Collapse;