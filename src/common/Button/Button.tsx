import * as React from 'react';

export default function Button({
	text,
	onClick = (e) => {
		e.preventDefault();
	},
}) {
	return <button onClick={onClick}>{text}</button>;
}
