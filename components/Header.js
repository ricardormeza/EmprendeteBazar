import { useState } from "react";
import Image from "next/future/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/Header.module.css'


export default function Header() {
  const router = useRouter()

  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
        {/* <div className={`contenedor ${styles.barra}`}> */}
        <div className='contenedor'>
          <div className={styles.logoEmprendete}>
          <Link href='/'>
              <a>
              {/* <Image src="/images/logo2Emprendete.png"  */}
              <Image src="/images/logo2Emprendete.png" 
                width={100} 
                height={100} 
                alt='logo emprendete bazar'
                style={{cursor: 'pointer'}}
                className={styles.logoNuevo}
                />
              </a>
              </Link>
          </div>
            <nav className={styles.navegacion}>
            <li className={styles.listItem}>
            <Link href='/'>
                <a className={router.pathname === '/' ? styles.active : ''}>
                  Inicio
                </a> 
                </Link>
            </li>
            <li className={styles.listItem}>
              <Link href='/nosotros'>
                <a className={router.pathname === '/nosotros' ? styles.active : ''}>
                  Nosotros
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href='/emprendedores'>
                <a className={router.pathname === '/emprendedores' ? styles.active : ''}>
                  Emprendedores
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href='/contacto'>
                <a className={router.pathname === '/contacto' ? styles.active : ''}>
                  Contacto
                </a>
              </Link>
            </li>
              
              {/* MENU RESPONSIE */}
              <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
              </div>
              <ul onClick={()=>setOpen(false)} 
                className={styles.menu} 
                style={{ right: open ? "0px" : "-50vw" }}
              >
                <li className={styles.menuItem}>
                  <Link href="/">
                    <a className={router.pathname === '/' ? styles.active : ''}>
                      Inicio
                    </a> 
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href='/nosotros'>
                    <a className={router.pathname === '/nosotros' ? styles.active : ''}>
                      Nosotros
                    </a>
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href='/emprendedores'>
                    <a className={router.pathname === '/emprendedores' ? styles.active : ''}>
                      Emprendedores
                    </a>
                  </Link>
                </li>
                <li className={styles.menuItem}>
                  <Link href='/contacto'>
                    <a className={router.pathname === '/contacto' ? styles.active : ''}>
                      Contacto
                    </a>
                  </Link>
                </li>

              </ul>
            </nav>
        </div>
    </header>
  )
}
