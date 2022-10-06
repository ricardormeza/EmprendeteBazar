import Image from "next/future/image"
import Layout from "../components/Layout"
import { TbHandStop } from 'react-icons/tb'
import { FaHandshake, FaPrayingHands } from 'react-icons/fa'
import styles from '../styles/Nosotros.module.css'
import SeccionRedes from '../components/redes/SeccionRedes'

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
                />
                <div className={styles.NosotrosEncabezado}>
                  <h1>Emprendete Bazar</h1>
                  <h2>Nuestra historia</h2>
                  <p><sopan>Emprendete</sopan> Bazar empieza un día el 4 de abril del 2022, y empieza por orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat sodales hendrerit. Integer hendrerit mauris vel lorem imperdiet, at maximus lorem pretium. Morbi efficitur consequat leo, id interdum lacus venenatis at. Aenean consectetur nec tortor et auctor. Praesent a libero non neque tincidunt viverra. </p>
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
                  <div>
                    <h2>Misión</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam faucibus purus in massa tempor nec feugiat. In iaculis nunc sed augue lacus viverra vitae congue. Sit amet facilisis magna etiam tempor orci eu lobortis. Viverra maecenas accumsan lacus vel. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Sed id semper risus in hendrerit gravida. Velit aliquet sagittis id consectetur purus. Quis lectus nulla at volutpat. Nunc sed augue lacus viverra. Gravida rutrum quisque non tellus orci ac auctor augue. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Turpis egestas maecenas pharetra convallis posuere. Et netus et malesuada fames ac. Varius vel pharetra vel turpis nunc eget lorem. Mauris augue neque gravida in fermentum et sollicitudin. Urna et pharetra pharetra massa massa ultricies mi quis.</p>
                    <h2>Visión</h2>
                    <p>Facilisi cras fermentum odio eu feugiat. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Ut sem viverra aliquet eget. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tempor nec feugiat nisl pretium fusce id. Quisque egestas diam in arcu cursus euismod quis viverra. Augue interdum velit euismod in pellentesque. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Dui vivamus arcu felis bibendum ut. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Imperdiet proin fermentum leo vel orci porta. Arcu odio ut sem nulla pharetra diam sit. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Adipiscing elit pellentesque habitant morbi tristique senectus et netus.</p>
                    <h3>Preguntas frecuentes</h3>
                    <h4>¿Que puedo vender?</h4>
                    <h4>¿Que más puedo preguntar?</h4>
                    <h4>¿Que tipo de preguntas hacen?</h4>
                  </div>
                </div>
            </div>
            <SeccionRedes/>
          </main>

        </Layout>
    </>
  )
}
