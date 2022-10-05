import Link from "next/link"
import styles from '../styles/Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="contenedor">
        <nav className={styles.navegacion}>
                <Link href='/'>
                Inicio
                  </Link>
                <Link href='/nosotros'>
                Nosotros
                </Link>
                
                <Link href='/emprendedores'>
                Emprendedores
                </Link>
                <Link href='/contacto'>
                Contacto
                </Link>
              </nav>
              <p className={styles.FooterParrafo}>
                Todos los derechos reservados { new Date().getFullYear()}
              </p>
      </div>
      

    </footer>
  )
}
