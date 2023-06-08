import React from 'react';

interface NavigationBarProps {
	Brand: React.ReactNode;
}

export const NavigationBar = ({ Brand }: NavigationBarProps) => {
	return (
		<nav className='bg-blue-600 p-6'>
			<div className='max-w-7xl mx-auto flex items-center justify-between'>
				<div>{Brand}</div>
				<div></div>
			</div>
		</nav>
	);
};
