import Image from "next/future/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/Header.module.css'


export default function Header() {
  const router = useRouter()


  return (
    <header className={styles.header}>
        {/* <div className={`contenedor ${styles.barra}`}> */}
        <div className='contenedor'>
          <div className={styles.logoEmprendete}>
          <Link href='/'>
              <a>
              <Image src="/images/emprendete-logo-1.png" 
                width={50} 
                height={60} 
                alt='logo emprendete bazar'
                style={{cursor: 'pointer'}}
                />
              </a>
              </Link>
          </div>
            <nav className={styles.navegacion}>
              <Link href='/'>
                <a className={router.pathname === '/' ? styles.active : ''}>
                  Inicio
                </a> 
                </Link>
              <Link href='/nosotros'>
                <a className={router.pathname === '/nosotros' ? styles.active : ''}>
                  Nosotros
                </a>
              </Link>
              
              <Link href='/emprendedores'>
                <a className={router.pathname === '/emprendedores' ? styles.active : ''}>
                  Emprendedores
                </a>
              </Link>
              <Link href='/contacto'>
                <a className={router.pathname === '/contacto' ? styles.active : ''}>
                  Contacto
                </a>
              </Link>
            </nav>
        </div>
    </header>
  )
}
