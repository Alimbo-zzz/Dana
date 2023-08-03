import React, { useState, useEffect, useRef } from 'react';
import cls from './style.module.scss';
import { useGallery } from '@hooks';
import { Title } from '@/react/components';
import Gallery from "react-photo-gallery";
const images_friends = import.meta.globEager('@images/friends/**/*');
import { useMediaQuery } from 'react-responsive';


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './slider.scss';
import classNames from 'classnames';

function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; --i) {
		const pos = Math.floor(Math.random() * (i + 1));
		const t = arr[pos];
		arr[pos] = arr[i];
		arr[i] = t;
	}
	return arr;
}


const Friends = (props) => {
	const [gallery, setGallery] = useState([])
	const gallery_images = useGallery(images_friends);
	const galleryRef = useRef(null);
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
	const galleryFromSwiper = () => shuffle(gallery_images.arr);

	const swiperData = {
		effect: 'cube',
		grabCursor: true,
		cubeEffect: {
			shadow: true,
			slideShadows: true,
			shadowOffset: 20,
			shadowScale: 0.94,
		},
		pagination: {
			type: 'fraction',
		},
		modules: [EffectCube, Pagination],
		className: "cubeSwiper"
	}



	useEffect(() => {
		let arr = [];

		for (const key in gallery_images.obj) {
			let ratio_arr = key.split('_');
			let width = Number(ratio_arr[1]);
			let height = Number(ratio_arr[2]);
			let src = gallery_images.obj[key];

			arr.push({ width, height, src })
		}

		setGallery(shuffle(arr));
	}, [gallery_images.obj])

	useEffect(() => {
		if (gallery.length && galleryRef.current) {
			const wrap = galleryRef.current;
			const images = wrap.querySelectorAll('img');
		}
	}, [gallery])


	return (<>
		<section id='friends' className='sec'>

			<Title>Не забывай про своих малышей</Title>

			<div className={classNames(['container', cls.sliderCont])}>
				{!isTabletOrMobile && (
					<div ref={galleryRef} className={cls.gallery}>
						<Gallery photos={gallery} direction='column' />
					</div>
				)}

				{isTabletOrMobile && (<Swiper {...swiperData}>
					{galleryFromSwiper().map((imgSrc, i) => <SwiperSlide key={`${imgSrc}${i}`}>
						<div className={cls.slide}>
							<img src={imgSrc} className={cls.slide__img} />
						</div>
					</SwiperSlide>)}
				</Swiper>)}
			</div>
		</section>
	</>);
}

export default Friends;