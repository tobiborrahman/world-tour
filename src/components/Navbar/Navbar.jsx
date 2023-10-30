import React from 'react';

const Navbar = () => {
	return (
		<div className="flex justify-between items-center py-6 px-5 bg-black text-white">
			<div>
				<h1>LOGO</h1>
			</div>
			<div>
				<ul className="flex items-center gap-6">
					<li>Home</li>
					<li>About</li>
					<li>Tours</li>
					<li>Places</li>
					<li>Services</li>
					<li>Adventurers</li>
					<li>Testimonial</li>
					<li>Newsletter</li>
				</ul>
			</div>
			<div>
				<h2>Login</h2>
			</div>
		</div>
	);
};

export default Navbar;
