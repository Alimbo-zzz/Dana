import React from 'react';
import cls from './style.module.scss'
import { Navigation } from '@/react/components';
import classNames from 'classnames';
import avatar_mobile from '@images/main_avatar.png';
import avatar from '@images/main_avatar_2.png';
import { useMediaQuery } from 'react-responsive';

const Intro = (props) => {
	const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

	return (<>
		<section className={cls.wrap}>
			<div className={classNames(['container', cls.container])}>
				<Navigation />
				<div className={cls.content} >
					<h1 className={cls.title}>Поздравляем, Дана!</h1>
					<h2 className={cls.subTitle}>Твоя малышня очень рада за тебя, <br /> мы все тебя очень любим!</h2>

				</div>
			</div>
			<img src={isMobile ? avatar_mobile : avatar} className={cls.mainAvatar} />
		</section>
	</>);
}

export default Intro;