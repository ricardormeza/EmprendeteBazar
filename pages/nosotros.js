import Image from "next/future/image"
import Layout from "../components/Layout"
import styles from '../styles/Nosotros.module.css'


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
              src="/images/photo1663895974(9).jpeg"
              width={800}
              height={500}
              alt="imagen de bazar"
            />
            </div>
            <h2>Nosotros</h2>
            <div>
              <h2>Misión</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam faucibus purus in massa tempor nec feugiat. In iaculis nunc sed augue lacus viverra vitae congue. Sit amet facilisis magna etiam tempor orci eu lobortis. Viverra maecenas accumsan lacus vel. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Sed id semper risus in hendrerit gravida. Velit aliquet sagittis id consectetur purus. Quis lectus nulla at volutpat. Nunc sed augue lacus viverra. Gravida rutrum quisque non tellus orci ac auctor augue. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Turpis egestas maecenas pharetra convallis posuere. Et netus et malesuada fames ac. Varius vel pharetra vel turpis nunc eget lorem. Mauris augue neque gravida in fermentum et sollicitudin. Urna et pharetra pharetra massa massa ultricies mi quis.</p>
              <h2>Visión</h2>
              <p>Facilisi cras fermentum odio eu feugiat. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Ut sem viverra aliquet eget. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Tempor nec feugiat nisl pretium fusce id. Quisque egestas diam in arcu cursus euismod quis viverra. Augue interdum velit euismod in pellentesque. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Dui vivamus arcu felis bibendum ut. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Imperdiet proin fermentum leo vel orci porta. Arcu odio ut sem nulla pharetra diam sit. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Adipiscing elit pellentesque habitant morbi tristique senectus et netus.</p>
            </div>
          </main>

        </Layout>
    </>
  )
}
