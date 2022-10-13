import { useState } from 'react'
import { Data } from './Data'
import { FaPlus, FaMinus } from 'react-icons/fa'
import styles from '../../styles/Nosotros.module.css'


export default function Preguntas() {
    const [ clicked, setClicked ] = useState(false);
    
    const toggle = index => {
        if(clicked === index){
            // If clicked question is already active, then close
            return setClicked(null);
        }
        setClicked(index);
    }

    
    return (
        <div className={styles.contenidoMision}>
            <div className={styles.AcordionSection}>
                <div className={styles.ContainerAcordion}>
                    {Data.map((item, index) => {
                    return(
                        <>
                            <div className={styles.wrap}
                                onClick={() => toggle(index)} key={index}
                            >
                                <h3>{item.question}</h3>
                                <span>{clicked === index ? <FaMinus/>  : <FaPlus/> }</span>
                            </div>
                            {clicked === index ? (
                            <div className={styles.dropDownQuestion}>
                                <p>{item.answer}</p>
                            </div>
                            ) : null }
                        </>
                        )
                    })}

                </div>

                    </div>
            
        </div>
    )
}
