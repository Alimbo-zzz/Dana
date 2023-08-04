import React, { useEffect } from 'react';
import cls from './style.module.scss';
import title_decor from '@images/flower_3.png';
import Aos from 'aos';
import './aos.scss'
import classNames from 'classnames';


const Title = ({ children }) => {


	useEffect(() => {
		Aos.init();
	}, [])

	return (<>
		<h2 className={cls.title} >
			<div className="container">
				<div data-aos='fade-right'>
					{children}
				</div>
				<img src={title_decor} data-aos-offset="300" data-aos className={classNames([cls.title__decor, 'title-sec'])} />
			</div>
		</h2>
	</>);
}

export default Title;