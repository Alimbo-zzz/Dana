import React, { useEffect } from 'react';
import cls from './style.module.scss'
import { Navigation } from '@/react/components';
import classNames from 'classnames';
import avatar_mobile from '@images/main_avatar.png';
import avatar from '@images/main_avatar_2.png';
import { useMediaQuery } from 'react-responsive';
import Aos from 'aos';
import './aos.scss';


const Intro = (props) => {
	const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

	useEffect(() => {
		Aos.init();
	}, [])


	return (<>
		<section className={cls.wrap}>
			<div className={classNames(['container', cls.container])}>
				<Navigation />
				<div className={cls.content} >
					<h1 className={cls.title} data-aos-delay="500" data-aos="zoom-in-right">Поздравляем, Дана!</h1>
					<h2 className={cls.subTitle} data-aos-delay="500" data-aos="zoom-in-left">Твоя малышня очень рада за тебя, <br /> мы все тебя очень любим!</h2>

				</div>
			</div>
			<img data-aos data-aos-delay="0" data-aos-duration="1000" src={isMobile ? avatar_mobile : avatar} className={classNames([cls.mainAvatar, 'main-avatar'])} />
		</section>
	</>);
}

export default Intro;