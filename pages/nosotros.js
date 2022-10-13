import Image from "next/future/image"
import Layout from "../components/Layout"
import { TbHandStop } from 'react-icons/tb'
import { FaHandshake, FaPrayingHands } from 'react-icons/fa'
import styles from '../styles/Nosotros.module.css'
import MisionVision from "../components/nosotros/MisionVision"
import SeccionRedes from '../components/redes/SeccionRedes'
import NosotrosUno from "../components/nosotros/NosotrosUno"

export default function Nosotros(){
  return (
    <>
        <Layout
            title={'Nosotros'}
            description={'Conoce más acerca de Emprendete bazar, el sitio lider en Tuxtla Gutíerrez para la venta y compra de productos locales.'}
        >
          <main className="contenedor">
            <div className={styles.NosotrosImagen}>
                <Image 
                  src="/images/photo1663896193(6).jpeg"
                  width={800}
                  height={500}
                  alt="imagen de Adriana"
                  className={styles.fotoAdriana}
                />
                <div className={styles.NosotrosEncabezado}>
                  <h1>Emprendete Bazar</h1>
                  <h2>Nuestra historia</h2>
                  <p><span>Emprendete</span> Bazar empieza un día el 4 de abril del 2022, y empieza por orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat sodales hendrerit. Integer hendrerit mauris vel lorem imperdiet, at maximus lorem pretium. Morbi efficitur consequat leo, id interdum lacus venenatis at. Aenean consectetur nec tortor et auctor. Praesent a libero non neque tincidunt viverra. </p>
                </div>
            </div>
            <h2 className={styles.subtituloNosotros}>¿Que es Emprendete Bazar?</h2>
            <div className={`contenedor ${styles.queEsNosotros}`}>
              <Image 
                  src="/images/emprendete-logo-1.png"
                  width={100}
                  height={100}
                  alt="imagen de bazar"
                  className={styles.logoImg}
                />
            <p>Somos un colectivo de emprendedores que adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam faucibus purus in massa tempor nec feugiat. In iaculis nunc sed augue lacus viverra vitae congue. Sit amet facilisis magna etiam tempor orci eu lobortis</p>
                <div>
                  <h3 className={styles.subtituloNosotros}>Nuestros valores</h3>
                  <div className={styles.nosotrosGridValores}>
                    <div className={styles.nosotrosCard}>
                      <TbHandStop
                        className={styles.nosotrosCardImg}
                      />
                      <h4>No a la violencia</h4>
                      <p>Suspendisse potenti. Praesent eleifend tellus nec leo euismod</p>
                    </div>
                    <div className={styles.nosotrosCard}>
                      <FaHandshake
                        className={styles.nosotrosCardImg}
                      />
                      <h4>Honor entre vecinos</h4>
                      <p>Suspendisse potenti. Praesent eleifend tellus nec leo euismod</p>
                    </div>
                    <div className={styles.nosotrosCard}>
                      <FaPrayingHands
                        className={styles.nosotrosCardImg}
                      />
                      <h4>Ayuda a otros</h4>
                      <p>Suspendisse potenti. Praesent eleifend tellus nec leo euismod</p>
                    </div>
                  </div>
                  <NosotrosUno/>
                  <MisionVision/>
                </div>
            </div>
            <SeccionRedes/>
          </main>

        </Layout>
    </>
  )
}
