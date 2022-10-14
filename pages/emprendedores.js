import Layout from "../components/Layout"
import styles from '../styles/Emprendedores.module.css'
import EmprendedorUno from "../components/emprendedores/EmprendedorUno"
import SeccionRedes from '../components/redes/SeccionRedes'

export default function Emprendedores() {
  return (
    <>
        <Layout
        title={'Emprendedores'}
        description={'Conoce a nuestros emprendedores que participan en Emprendete Bazar el sitio lider de compra y venta de productos locales en Tuxtla Gutiérrez, Chiapas'}
        >
          <div className="contenedor">
            <div className={styles.emprendedoresEncabezado}>
              <h1>Emprendete Bazar</h1>
              <h2>Nuestros <span>Emprendedores</span></h2>
            </div>
            <EmprendedorUno/>
            <br/>
            <SeccionRedes/>
          </div>
        </Layout>
    </>
  )
}
