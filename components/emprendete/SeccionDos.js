import React from 'react'
import { FcSalesPerformance, 
    FcPieChart, 
    FcPodiumWithAudience } from 'react-icons/fc'
import styles from '../../styles/Home.module.css'


export default function SeccionDos() {
    return (
        <seection className='contenedor'>

            <div className='contenedor'>
                
                    <ul className={styles.gridSeccionDos}>
                        <li className={styles.listItem}>
                            <div className={styles.listItemIcon}>
                                <FcSalesPerformance />
                            </div>
                            <p className={styles.listItemTitle}>Vende tus productos</p>
                            <p>Encuentra el espacio que necesitas para lograr las ventas que quieras.</p>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.listItemIcon}>
                                <FcPieChart />
                            </div>
                            <p className={styles.listItemTitle}>Posiciona tu marca</p>
                            <p>Haz crecer ese sueño que tienes en mente.</p>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.listItemIcon}>
                                <FcPodiumWithAudience />
                            </div>
                            <p className={styles.listItemTitle}>Comunidad</p>
                            <p>Emprendete bazar es un lugar abierto a todos aquellos emprendedores que quieren mejorar sus ventas.</p>
                        </li>
                    </ul>
                </div>
            
        </seection>
    )
}
