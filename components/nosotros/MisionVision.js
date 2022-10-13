import { FaMedapps, FaReadme } from 'react-icons/fa'
import styles from '../../styles/Nosotros.module.css'
import Preguntas from './Preguntas';
import Accordion from './Accordion';


export default function MisionVision() {
    
    return (
    <div>
        <div className={styles.MisionVisionGrid}>
            <div>
                <div className={styles.MisionSubtitulo}>
                    <h2>Misión</h2>
                    <FaMedapps className={styles.nosotrosCardImg}/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam faucibus purus in massa tempor nec feugiat. In iaculis nunc sed augue lacus viverra vitae congue. Sit amet facilisis magna etiam tempor orci eu lobortis. Viverra maecenas accumsan lacus vel.</p>
            </div>
            <div>
                <div className={styles.MisionSubtitulo}>
                    <h2>Visión</h2>
                    <FaReadme className={styles.nosotrosCardImg}/>
                </div>
                <p>Facilisi cras fermentum odio eu feugiat. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Ut sem viverra aliquet eget. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. </p>
            </div>
        </div>
        <div className={styles.MisionPreguntas}>
            <h3>Preguntas frecuentes</h3>
            
            <Accordion title="Pregunta 1" content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultricies justo. Integer sit amet velit vulputate, commodo est vitae, porttitor dolor. In suscipit urna dolor, sit amet efficitur orci pulvinar id. Donec non mauris in nunc porttitor tempor. Cras id convallis tortor, bibendum gravida lorem.</p>"/>

            <Accordion title="Pregunta 2" content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultricies justo. Integer sit amet velit vulputate, commodo est vitae, porttitor dolor. In suscipit urna dolor, sit amet efficitur orci pulvinar id. Donec non mauris in nunc porttitor tempor. Cras id convallis tortor, bibendum gravida lorem.</p>"/>

            <Accordion title="Pregunta 3" content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultricies justo. Integer sit amet velit vulputate, commodo est vitae, porttitor dolor. In suscipit urna dolor, sit amet efficitur orci pulvinar id. Donec non mauris in nunc porttitor tempor. Cras id convallis tortor, bibendum gravida lorem.</p>"/>

            <Accordion title="Pregunta 4" content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultricies justo. Integer sit amet velit vulputate, commodo est vitae, porttitor dolor. In suscipit urna dolor, sit amet efficitur orci pulvinar id. Donec non mauris in nunc porttitor tempor. Cras id convallis tortor, bibendum gravida lorem.</p>"/>

            <Accordion title="Pregunta 5" content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultricies justo. Integer sit amet velit vulputate, commodo est vitae, porttitor dolor. In suscipit urna dolor, sit amet efficitur orci pulvinar id. Donec non mauris in nunc porttitor tempor. Cras id convallis tortor, bibendum gravida lorem.</p>"/>
        </div>

    </div>
    )
}
