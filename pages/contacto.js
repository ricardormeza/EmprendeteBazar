import Layout from "../components/Layout"
import styles from '../styles/Contacto.module.css'
import ContactoUno from "../components/contacto/ContactoUno"
import ContactoDos from "../components/contacto/ContactoDos"
import SeccionRedes from '../components/redes/SeccionRedes'

export default function Contacto() {
  return (
    <>
        <Layout
            title={'Contacto'}
            description={'Contáctanos si quieres vender tus producos, encuentra con nosotros el espacio ideal para que vendas tus productos.'}
        >
          <div className="contenedor">
            <h1 className={styles.titulo}>Emprendete Bazar</h1>
            <h2 className={styles.subtilulo}>Somos lo que buscas</h2>
          </div>
          <ContactoUno/>
          <ContactoDos/>
          <SeccionRedes/>
        </Layout>
    </>
  )
}