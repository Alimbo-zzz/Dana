import React from 'react';
import cls from './style.module.scss'
import { Navigation } from '@/react/components';
import classNames from 'classnames';
// import avatar from '@images/main_avatar.png';
import avatar from '@images/main_avatar_2.png';

const Intro = (props) => {

	return (<>
		<section className={cls.wrap}>
			<div className={classNames(['container', cls.container])}>
				<Navigation />
				<div className={cls.content}>
					<h1 className={cls.title}>Поздравляем, Дана!</h1>
					<h2 className={cls.subTitle}>Твоя малышня очень рада за тебя, <br /> мы все тебя очень любим!</h2>

				</div>
			</div>
			<img src={avatar} className={cls.mainAvatar} />
		</section>
	</>);
}

export default Intro;