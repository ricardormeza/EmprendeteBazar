import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Contacto.module.css'
import {BsPinMap} from 'react-icons/bs'
import {MdOutlineMailOutline, MdOutlineTravelExplore} from 'react-icons/md'
import {FiPhone} from 'react-icons/fi'


export default function ContactoDos() {
  return (
    <div className='contenedor'>
        <h3 className={styles.TextoColor}>Contá<span className={styles.TextoColorDos}>ctanos</span></h3>
        <div className={`contenedor ${styles.contactoGrid}`}>
            <div className={styles.contactoGridItems}>
                <div className={styles.contactoIconos}>
                    <FiPhone className={styles.contactoIco}/>
                </div>
                <div className={styles.contactoGridItem}>
                    <h4>Teléfono</h4>
                    <Link href="tel:+529611029234">
                        <a>961 102 9234</a>
                    </Link>
                    <Link href="tel:+529611029234">
                        <a>961 102 9234</a>
                    </Link>
                </div>
            </div>
            <div className={styles.contactoGridItems}>
                <div className={styles.contactoIconos}>
                    <MdOutlineMailOutline className={styles.contactoIco}/>
                </div>
                <div className={styles.contactoGridItem}>
                    <h4>Correo Electrónico</h4>
                    <Link href="mailto:hola@emprendetebazar.com">
                        <a>hola@emprentetebazar.com</a>
                    </Link>
                    <Link href="mailto:adri@gmail.com">
                        <a>holaemprendedor@gmail.com</a>
                    </Link>
                </div>
            </div>
            <div className={styles.contactoGridItems}>
                <div className={styles.contactoIconos}>
                    <MdOutlineTravelExplore className={styles.contactoIco}/>
                </div>
                <div className={styles.contactoGridItem}>
                    <h4>Sitio</h4>
                    <h5>emprendetebazar.com</h5>
                </div>
            </div>
            <div className={styles.contactoGridItems}>
                <div className={styles.contactoIconos}>
                    <BsPinMap className={styles.contactoIco}/>
                </div>
                <div className={styles.contactoGridItem}>
                    <h4>Ubicación</h4>
                    <h5>Tuxtla Gutiérrez, Chiapas.</h5>
                </div>
            </div>
        </div>
    </div>
  )
}
