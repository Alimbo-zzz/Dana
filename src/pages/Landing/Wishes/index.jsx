import React, { useState, useEffect } from 'react';
import cls from './style.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slides from './slides';
import { useGallery } from '@hooks';
const images_wishes = import.meta.globEager('@images/wishes/**/*');
import { Title } from '@/react/components';

const Wishes = (props) => {
	const gallery = useGallery(images_wishes);

	const swiperData = {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			}
		}
	}

	return (<>
		<section id='wishes' className='sec'>

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