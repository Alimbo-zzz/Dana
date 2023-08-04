import React, { useState, useEffect } from 'react';
import cls from './style.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slides from './slides';
import { useGallery } from '@hooks';
const images_wishes = import.meta.globEager('@images/wishes/**/*');
import { Title } from '@/react/components';
import './slider.scss';

import decor_1 from '@images/decor_1.png';
import decor_3 from '@images/decor_3.png';


import { Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import classNames from 'classnames';

const Wishes = (props) => {
	const gallery = useGallery(images_wishes);

	const swiperData = {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,
		pagination: true,
		grabCursor: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		modules: [Pagination, Autoplay],
		breakpoints: {
			1024: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				pagination: false,
			}
		},
		className: "WishSlider"
	}

	return (<>
		<section id='wishes' className={classNames([cls.wrap])}>
			<img src={decor_1} className={cls.decor_1} />
			<img src={decor_3} className={cls.decor_3} />

			<Title>Пожелания</Title>
			<div className="container">
				<Swiper {...swiperData}>
					{slides.map(el => <SwiperSlide key={el.id}>
						<div className={cls.wish}>
							<img src={gallery.obj[el.img]} className={cls.wish__img} />
							<h4 className={cls.wish__name}>{el.name}</h4>
							<div className={cls.wish__text}>
								{el.review.map((text, i) => <p key={i}>{text}</p>)}
							</div>
						</div>
					</SwiperSlide>)}
				</Swiper>
			</div>
		</section>
	</>);
}

export default Wishes;