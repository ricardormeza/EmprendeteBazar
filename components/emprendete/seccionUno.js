import React from 'react'
import { FcPositiveDynamic } from 'react-icons/fc'
import styles from '../../styles/Home.module.css'

export default function SeccionUno() {
    return (
        <section className='contenedor'>
            <br/>
            <h2 className={styles.titulo}>Ventajas</h2>
            <div className={styles.SeccionUno}>
                <p>En <span>Emprendete</span> Bazar contamos con el espacio para que <span>vendas</span> tus productos y consigas tu objetivo.
                <FcPositiveDynamic/>
                </p>
            </div>
        </section>
    )
}
