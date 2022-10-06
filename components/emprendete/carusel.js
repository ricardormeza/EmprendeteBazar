import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import Image from "next/future/image";
import styles from '../../styles/Carusel.module.css'


export default function carusel() {
    return (
        <>
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Image src="/images/photo1663896214(5).jpeg"
                    alt="imagen de bazar"
                    width={800}
                    height={400}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/photo1663896214(7).jpeg"
                    alt="imagen de bazar"
                    width={800}
                    height={400}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/photo1663896209(4).jpeg"
                    alt="imagen de bazar"
                    width={800}
                    height={400}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/photo1663896193(1).jpeg"
                    alt="imagen de bazar"
                    width={800}
                    height={400}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/photo1663895974(6).jpeg"
                    alt="imagen de bazar"
                    width={800}
                    height={400}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/photo1663895974(4).jpeg"
                    alt="imagen de bazar"
                    width={800}
                    height={400}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/images/photo1663895974(1).jpeg"
                    alt="imagen de bazar"
                    width={800}
                    height={400}
                />
            </SwiperSlide>
        </Swiper>
        </>
    )
}
