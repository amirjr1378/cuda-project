import React from 'react';
import { AuthButton } from './AuthButton';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
const TopNav = () => {
	const handleBurgerMenu = event => {
		console.log('clicked');
		const btn = $(event.target);
       btn.toggleClass('active');
       btn.toggleClass('not-active');

	};
	return (
		<div className='top-nav'>
			<nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
				<a className='navbar-brand' href='#'>
					Cuda
				</a>
				<a className='burger-menu not-active' onClick={handleBurgerMenu}>
					<span />
					<span />
					<span />
				</a>

				<div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
					<ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
						<li className='nav-item'>
							<NavLink
								className='nav-link'
								activeClassName='active'
								exact={true}
								to='/'
							>
								Home
							</NavLink>
						</li>

						<li className='nav-item'>
							<NavLink className='nav-link' to='/about'>
								About
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' to='/work'>
								work
							</NavLink>
						</li>
						<AuthButton />
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default TopNav;
