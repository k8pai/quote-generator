import Image from 'next/image';
import Quote from './components/Quote';
import { fetchRandomQuote } from '@/lib';

export default async function Home() {
	const data = await fetchRandomQuote();

	return (
		<main className="flex flex-col items-center justify-between w-full p-24 h-full">
			<div className="flex-grow h-full">
				<Quote data={data} />
			</div>
			<div></div>
		</main>
	);
}
