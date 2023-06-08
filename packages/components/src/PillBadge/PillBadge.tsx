import React from 'react';

interface PillBadgeProps {
	children: string;
	background?: 'blue' | 'purple';
}

export const PillBadge = ({ children, background }: PillBadgeProps) => {
	let backgroundColor = background === 'blue' ? 'bg-blue-700' : 'bg-purple-700';
	return (
		<span
			className={`cursor-pointer ${backgroundColor} text-white text-lg rounded-full px-8 py-1 uppercase`}
		>
			{children}
		</span>
	);
};
