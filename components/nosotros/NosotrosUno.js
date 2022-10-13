import React, { useRef, useState } from "react";
import Link from 'next/link'
import Image from "next/future/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from '../../styles/Nosotros.module.css'

export default function NosotrosUno() {
  return (
    <section className="contenedor">
        <div className={styles.nosotrosGridUno}>
            {/* imagen */}
            <div className={styles.caruselNosotros}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <Image 
                        src="/images/photo1663890611(1).jpeg"
                        width={500}
                        height={300}
                        alt="imagen de bazar"
                        className={styles.logoImg}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image 
                        src="/images/photo1663895974(1).jpeg"
                        width={500}
                        height={300}
                        alt="imagen de bazar"
                        className={styles.logoImg}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image 
                        src="/images/photo1663895974(9).jpeg"
                        width={500}
                        height={300}
                        alt="imagen de bazar"
                        className={styles.logoImg}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image 
                        src="/images/photo1663896212(4).jpeg"
                        width={500}
                        height={300}
                        alt="imagen de bazar"
                        className={styles.logoImg}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                    <Image 
                        src="/images/photo1663896214.jpeg"
                        width={500}
                        height={300}
                        alt="imagen de bazar"
                        className={styles.logoImg}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <h2 className={styles.subtituloNosotros}>Pequeños cambios, grandes diferencias.</h2>
                <p className={styles.NosotrosUnoParrafo}>Comos un colectivo que siempre esta en constante movimiento. </p>
                <Link href="/contacto">
                    <a target="_blank" 
                    title='Ir a Fanpage Facebook Emprentete Bazar'
                    className={styles.UneteBtn}
                    >Únete</a>
                </Link>
            </div>
        </div>
    </section>
  )
}
