import React from 'react';
import cls from './style.module.scss';
import { Intro, Wishes, MyGallery, Friends } from './components'

const Landing = (props) => {

	return (<>
		<div className={cls.wrap}>
			<div id='top' />
			<Intro />
			<MyGallery />
			<Friends />
			<Wishes />
		</div>
	</>);
}

export default Landing;