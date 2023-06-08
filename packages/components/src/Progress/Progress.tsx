import React from 'react';

interface ProgressProps {
	max: number;
	base: number;
	background?: string;
	gradient?: boolean;
	fromColor?: string;
	toColor?: string;
	textColor?: string;
}

export const Progress = ({
	max,
	base,
	background,
	fromColor,
	gradient,
	toColor,
	textColor,
}: ProgressProps) => {
	let backgroundColor = background ?? 'bg-blue-600';
	if (gradient) {
		backgroundColor = `bg-gradient-to-r ${fromColor ?? 'from-purple-500'} ${
			toColor ?? 'to-fuchsia-500'
		}`;
	}
	let text = textColor ?? 'text-white';
	const width = (base * 100) / max;
	return (
		<div
			className={`h-4 w-full rounded-sm ${backgroundColor} ${text}`}
			style={{ width: `${width}%` }}
			data-testid='progress-bar'
		></div>
	);
};
