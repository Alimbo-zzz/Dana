import React from 'react';
import cls from './style.module.scss';
import title_decor from '@images/flower_3.png';


const Title = ({ children }) => {

	return (<>
		<h2 className={cls.title}>
			<div className="container">
				{children}
				<img src={title_decor} className={cls.title__decor} />
			</div>
		</h2>
	</>);
}

export default Title;