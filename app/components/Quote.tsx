'use client';

import { quotes } from '@/typings';
import React, { useState, useEffect } from 'react';
import { ArrowPathIcon } from '@heroicons/react/20/solid';

type stateType = {
	lastIndex: number;
	data: quotes | null;
};

const Quote = ({ data }: { data: quotes[] }) => {
	const [state, setState] = useState<stateType>({
		data: null,
		lastIndex: 0,
	});
	const randomIndex = Math.floor(Math.random() * 20);

	// console.log('\n and state => ', state);

	useEffect(() => {
		setState({ data: data[randomIndex], lastIndex: randomIndex });
	}, []);

	const randomize = () => {
		let randomIndex;
		do {
			randomIndex = Math.floor(Math.random() * 20);
		} while (randomIndex === state.lastIndex);

		setState({ data: data[randomIndex], lastIndex: randomIndex });
	};

	return (
		<div className="">
			{state && (
				<div>
					<blockquote className="italic tracking-wide text-lg">
						{state?.data?.content}
					</blockquote>
					<p className="mt-2">~ {state?.data?.author}</p>
				</div>
			)}
			<div className="mt-20 text-center">
				<button onClick={randomize}>
					<ArrowPathIcon
						className="h-5 w-5 text-gray-400"
						aria-hidden="true"
					/>
				</button>
			</div>
		</div>
	);
};

export default Quote;
