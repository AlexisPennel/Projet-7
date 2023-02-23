import styles from './Collapse.module.css';
import arrowDown from '../images/arrowDown.svg';
import arrowUp from '../images/arrowUp.svg';
import { useState } from 'react';


const Collapse = (props) => {

    const [CollapseOpen, setCollapseOpen] = useState(false);

    if (props.size === 'large') {
        return (
            <>
                <div className={styles.collapse__box}>
                    <h2>{props.title}</h2>
                    {CollapseOpen ? <img src={arrowUp} alt="" onClick={() => setCollapseOpen(false)} /> : <img src={arrowDown} alt="" onClick={() => setCollapseOpen(true)} />}
                </div>
                {CollapseOpen ? <div className={styles.collapse__content}><p>{props.content}</p></div> : null}
            </>
        )
    }

    if (props.array) {
        return (
            <>
                <div className={`${styles.collapse__box} ${styles.collapse__box__small}`}>
                    <h2>{props.title}</h2>
                    {CollapseOpen ? <img src={arrowUp} alt="" onClick={() => setCollapseOpen(false)} /> : <img src={arrowDown} alt="" onClick={() => setCollapseOpen(true)} />}
                </div>
                {CollapseOpen ? <div className={styles.collapse__array__small}>
                    <ul>
                        {props.array.map(equipments => (
                            <li>{equipments}</li>
                        ))}
                    </ul>
                </div> : null}
            </>
        )
    }

    return (
        <>
            <div className={`${styles.collapse__box} ${styles.collapse__box__small}`}>
                <h2>{props.title}</h2>
                {CollapseOpen ? <img src={arrowUp} alt="" onClick={() => setCollapseOpen(false)} /> : <img src={arrowDown} alt="" onClick={() => setCollapseOpen(true)} />}
            </div>
            {CollapseOpen ? <div className={`${styles.collapse__content} ${styles.collapse__content__small}`}><p>{props.content}</p></div> : null}
        </>
    )
};

export default Collapse;