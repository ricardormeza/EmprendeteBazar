import Link from 'next/link'
import {BsFacebook, BsInstagram, BsWhatsapp} from 'react-icons/bs'
import {FaFacebookMessenger} from 'react-icons/fa'

import styles from '../../styles/Redes.module.css'

export default function SeccionRedes() {
  return (
    <section className='contenedor'>
        <div className={styles.ContactoRedes}>
            <Link href="https://www.facebook.com/emprendetebazar" >
                <a target="_blank" title='Ir a Fanpage Facebook Emprentete Bazar'><BsFacebook/></a>
            </Link>
            <Link href="https://www.instagram.com/emprendete_bazar/">
                <a target="_blank" title='Ir a Instagram de Emprentete Bazar'><BsInstagram/></a>
            </Link>
            <Link href="http://m.me/emprendetebazar">
                <a target="_blank" title='Enviar inbox de Emprentete Bazar'><FaFacebookMessenger/></a>
            </Link>
            <Link href="https://wa.link/bfjhpj">
                <a target="_blank" title='Contactar a Emprentete Bazar'><BsWhatsapp/></a>
            </Link>
        </div>
    </section>
  )
}
