import React from 'react'
import { FcSalesPerformance, 
    FcPieChart, 
    FcPodiumWithAudience } from 'react-icons/fc'
    import { FaHandsHelping, FaBroadcastTower, FaUserFriends, FaGratipay  } from 'react-icons/fa'
import styles from '../../styles/Home.module.css'


export default function SeccionDos() {
    return (
        <section className='contenedor'>

            <div className='contenedor'>
                
                    <ul className={styles.gridSeccionDos}>
                        <li className={styles.listItem}>
                            <div className={styles.listItemIcon}>
                                <FaHandsHelping />
                            </div>
                            <p className={styles.listItemTitle}>Vende tus productos</p>
                            <p>Encuentra el espacio que necesitas para lograr las ventas que quieras.</p>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.listItemIcon}>
                                <FaGratipay />
                            </div>
                            <p className={styles.listItemTitle}>Posiciona tu marca</p>
                            <p>Haz crecer ese sueño que tienes en mente.</p>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.listItemIcon}>
                                <FaUserFriends />
                            </div>
                            <p className={styles.listItemTitle}>Comunidad</p>
                            <p>Somos una comunidad abierta a todos aquellos emprendedores que quieren mejorar sus ventas.</p>
                            {/* <p>Emprendete bazar es un lugar abierto a todos aquellos emprendedores que quieren mejorar sus ventas.</p> */}
                        </li>
                    </ul>
                </div>
            
        </section>
    )
}
