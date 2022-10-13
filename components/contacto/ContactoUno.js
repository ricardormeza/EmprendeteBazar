import React from 'react'
import Link from 'next/link'
import {BsFacebook, BsInstagram, BsWhatsapp} from 'react-icons/bs'
import styles from '../../styles/Contacto.module.css'

export default function ContactoUno() {
  return (
    <div className='contenedor'>
        <Link href="https://wa.link/bfjhpj">
            <a className={styles.subtitleparrafo} target='_blank' title='Contactar por Whatsapp'>
                <span>Contáctanos</span>
            </a>
        </Link>
        <div className={styles.contactoIconos}>
        <Link href="https://www.facebook.com/emprendetebazar">
            <a target="_blank" title='Ir a Fanpage Facebook Emprentete Bazar'><BsFacebook className={styles.contactoIcono}/></a>
        </Link>
        <Link href="https://www.instagram.com/emprendete_bazar/">
            <a target="_blank" title='Ir a Instagram de Emprentete Bazar'><BsInstagram className={styles.contactoIcono}/></a>
        </Link>
        </div>
    </div>
  )
}
