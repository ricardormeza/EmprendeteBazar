import Link from 'next/link'
import {BsFacebook, BsInstagram, BsWhatsapp} from 'react-icons/bs'
import {FaFacebookMessenger} from 'react-icons/fa'

import styles from '../../styles/Redes.module.css'

export default function SeccionRedes() {
  return (
    <section className='contenedor'>
        <div className={styles.ContactoRedes}>
            <Link href="https://www.facebook.com/yoffiOficial" target="_blank">
                <a><BsFacebook/></a>
            </Link>
            <Link href="https://www.instagram.com/yoffi.mkt/" target="_blank">
                <a ><BsInstagram/></a>
            </Link>
            <Link href="https://twitter.com/YoffiMkt" target="_blank">
                <a><FaFacebookMessenger/></a>
            </Link>
            <Link href="https://twitter.com/YoffiMkt" target="_blank">
                <a><BsWhatsapp/></a>
            </Link>
        </div>
    </section>
  )
}
