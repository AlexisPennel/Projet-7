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
                    <h1>{props.title}</h1>
                    {CollapseOpen ? <img src={arrowUp} alt="" onClick={() => setCollapseOpen(false)} /> : <img src={arrowDown} alt="" onClick={() => setCollapseOpen(true)} />}
                    {/* <img src={arrowDown} alt="" onClick={() => setCollapseOpen(true)} />
                    <img src={arrowUp} alt="" onClick={() => setCollapseOpen(false)} /> */}
                </div>
                {CollapseOpen ? <div className={styles.collapse__content}><p>{props.content}</p></div> : null}
            </>
        )
    }

    return (
        <>
            <h1>small</h1>
            {/* <div className={styles.collapse__box}>
                <h1>{props.title}</h1>
                {CollapseOpen ? <img src={arrowUp} alt="" onClick={() => setCollapseOpen(false)} /> : <img src={arrowDown} alt="" onClick={() => setCollapseOpen(true)} />}
                {/* <img src={arrowDown} alt="" onClick={() => setCollapseOpen(true)} />
                <img src={arrowUp} alt="" onClick={() => setCollapseOpen(false)} /> */}
            {/* </div>
            { CollapseOpen ? <div className={styles.collapse__content}><p>{props.content}</p></div> : null } * /} */}
        </>
    )
};

export default Collapse;