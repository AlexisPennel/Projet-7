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
            <div className={styles.container}>
                <h2>{title}</h2>
                <img src={collapseOpen ? arrowUp : arrowDown} alt="" onClick={handleClick} />
            </div>
            {collapseOpen && (
                <div className={styles.content}>
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