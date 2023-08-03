import React from 'react';
import cls from './style.module.scss';
import { v4 as setId } from 'uuid';

const Navigation = (props) => {

	const navList = [
		{ id: setId(), value: 'Мой Альбом', link: '#myGallery' },
		{ id: setId(), value: 'Банда', link: '#friends' },
		{ id: setId(), value: 'Пожелания', link: '#wishes' },
	]

	return (<>
		<nav className={cls.nav}>
			{navList.map(el => (
				<a href={el.link} className={cls.nav__link} key={el.id}>{el.value}</a>
			))}
		</nav>
	</>);
}

export default Navigation;