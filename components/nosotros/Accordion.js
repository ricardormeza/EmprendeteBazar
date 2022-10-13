import React,{useState, useRef} from 'react'
import {BsChevronCompactRight} from 'react-icons/bs'
import {FaChevronCircleRight} from 'react-icons/fa'
import styles from '../../styles/Nosotros.module.css'

export default function Accordion(props) {
    const [setActive, setActiveState] = useState('');
    const [setHeight, setHeightState] = useState('0px');
    const [setRotate, setRotateState] = useState(`${styles.accordionIcon}`);

    const content = useRef(null);

    function toggleAccordion(){
        setActiveState(setActive === '' ? 'active' : '' );
        setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
        setRotateState(setActive === 'active' ? `${styles.accordionIcon}` : `${styles.accordionIcon} ${styles.rotate}`);

        console.log('first')
    }
  return (
    <div className={styles.accordionSection}>
        <button className={`${styles.accordion} ${setActive}`} onClick={toggleAccordion}>
            <p className={styles.accordionTitle}>{props.title}</p>
            <FaChevronCircleRight className={`${setRotate}`}/>
        </button>
        <div ref={content} style={{maxHeight: `${setHeight}`}} className={styles.accordionContent}>
            <div className={styles.accordionText}
                dangerouslySetInnerHTML= {{ __html: props.content }}
            />
        </div>
    </div>
  )
}
