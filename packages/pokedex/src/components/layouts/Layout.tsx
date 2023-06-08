import Link from 'next/link';
import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<nav className='bg-blue-600 p-6'>
				<div className='max-w-7xl mx-auto flex items-center justify-between'>
					<Link className='text-3xl font-extrabold text-white' href='/'>
						Pokedex
					</Link>
				</div>
			</nav>
			<main className='max-w-7xl mx-auto mt-6'>{children}</main>
		</>
	);
};
