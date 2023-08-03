import React from 'react';
import cls from './style.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper';
import { Title } from '@/react/components';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './slider.scss';

import { useGallery } from '@hooks';
const images_gallery = import.meta.globEager('@images/myGallery/**/*');


const MyGallery = (props) => {
	const gallery = useGallery(images_gallery);

	function shuffle(arr) {
		for (let i = arr.length - 1; i > 0; --i) {
			const pos = Math.floor(Math.random() * (i + 1));
			const t = arr[pos];
			arr[pos] = arr[i];
			arr[i] = t;
		}
		return arr;
	}

	const galleryArr = () => shuffle(gallery.arr);


	const swiperData = {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 2,
		loop: true,

		breakpoints: {
			480: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			}
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		modules: [EffectCoverflow, Pagination, Autoplay],
		pagination: true,
		className: 'myGallery'
	}



	return (<>
		<section id='myGallery'>

			<Title>Альбом</Title>

			<Swiper {...swiperData}>
				{galleryArr().map(el => <SwiperSlide key={el}>
					<div className={cls.slide}>
						<img src={el} />
					</div>
				</SwiperSlide>)}
			</Swiper>
		</section>
	</>);
}

export default MyGallery;