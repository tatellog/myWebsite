import React from 'react';
import { Route, Link} from 'react-router-dom';

import HomePage from "./../../pages/HomePage";
import AboutPage from "./../../pages/AboutPage";
import SkillsPage from './../../pages/SkillsPage';
import ContactPage from './../../pages/ContactPage';


const NavigationBar = () => {
	const routes =[
		{
		  path: '/',
		  exact :true,
		  sidebar : () => <HomePage/>,
		},
		{
		  path: '/about',
		  exact :true,
		  sidebar : () => <AboutPage/>
		},
		{
		  path: '/skills',
		  exact :true,
		  sidebar : () => <SkillsPage/>,
		},
		{
		  path: '/contact',
		  exact :true,
		  sidebar : () => <ContactPage/>,
		},
	  
	  ]
	  
	return (
		<container className='container-nav'>
			<div className='menu-nav__header'>
				<ul>
				<li><Link to = '/'>Home </Link></li>
				<li>/ <Link to = '/about'>About </Link></li>
				<li>/ <Link to = '/skills'>Skills </Link></li>
				<li>/ <Link to = '/contact'>Contact </Link></li>
				</ul>

				{routes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					exact={route.exact}
					component={route.sidebar}
				/>
				))}
			</div>
		</container>
	)
}
export default NavigationBar