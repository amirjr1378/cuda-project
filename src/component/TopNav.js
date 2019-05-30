import React, { useEffect } from 'react';
import { AuthButton } from './AuthButton';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
const TopNav = () => {
	const func = () => {
		var btn = $('.burger-menu');

		btn.on('click', function() {
			$(this).toggleClass('active');
            $(this).toggleClass('not-active');
            $("#navbar-nav").slideToggle();
		});
	};
	useEffect(func, []);
	return (
		<div className='top-nav'>
			<nav className='navbar navbar-expand-lg navbar-dark'>
				<a className='navbar-brand' href='#'>
					Cuda
				</a>
				<a className='burger-menu not-active ml-auto'>
					<span />
					<span />
					<span />
				</a>

				<div className='navbar-collapse' id='navbar-nav'>
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
