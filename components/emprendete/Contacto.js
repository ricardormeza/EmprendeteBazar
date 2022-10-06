import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Contacto() {
  return (
    <section className='contenedor'>
        <div>
            <h3 className={styles.titulo}>Emprendete Bazar - Contáctanos</h3>
            
            <p className={styles.ContactoParrafo}>Somos un excelente lugar para vender tus productos y alcanzar tus metas.</p>
            <Link href='/contacto'>
                <a className={styles.Contactanos}>Contáctanos</a>
            </Link>
        </div>
    </section>
  )
}
