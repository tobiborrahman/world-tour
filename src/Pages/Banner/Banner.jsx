import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Navigation } from 'swiper/modules';
import img1 from '../../assets/tobibur2.jpg';
import img2 from '../../assets/971.jpg';
import img3 from '../../assets/abedon.jpg';

export default function App() {
	return (
		<>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img className="w-[100px] h-[500px]" src={img1} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="w-[100%] h-[500px]" src={img2} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="w-[100%] h-[500px]" src={img3} alt="" />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
