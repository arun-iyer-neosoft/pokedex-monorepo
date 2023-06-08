import React from 'react';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
	variant?: 'light' | 'primary';
	type?: 'button' | 'submit' | 'reset';
	isLoading?: boolean;
	children: React.ReactNode;
}

export const Button = ({
	variant,
	type,
	children,
	isLoading,
	disabled,
	...rest
}: ButtonProps) => {
	const colors =
		variant === 'light'
			? 'bg-gray-200 hover:bg-gray-300 text-black'
			: 'bg-blue-600 hover:bg-blue-700 text-white';
	return (
		<button
			disabled={disabled || isLoading}
			className={`mb-12 px-6 py-2 rounded-lg text-xl ${colors} disabled:opacity-70`}
			type={type ?? 'button'}
			{...rest}
		>
			{children}
		</button>
	);
};
