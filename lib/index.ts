import { quotes, quotesResponse, randomQoute } from '@/typings';

export const fetchRandomQuote = async () => {
	// const pageParams = calcDiffInDays();
	// console.log('getting page => ', pageParams);
	const page: number = Math.floor(Math.random() * 107);
	// console.log('page => ', page);

	const data: quotesResponse = await fetch(
		`https://api.quotable.io/quotes?page=${page}`,
	).then((res) => res.json());

	return data.results;
};

// const calcDiffInDays = () => {
// 	const currDate = new Date().toISOString().split('T')[0];

// 	// Create two Date objects representing the two days
// 	const date1: Date = new Date('2023-08-01'); // Replace with your first date
// 	const date2: Date = new Date(currDate); // Replace with your second date
// 	// console.log('date2 => ', date2);

// 	// Calculate the difference in milliseconds
// 	const differenceInMilliseconds = Math.abs(date2 - date1);
// 	// console.log('differenceInMilliseconds => ', differenceInMilliseconds);

// 	// Calculate the difference in days
// 	const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
// 	// console.log('differenceInDays => ', differenceInDays);
// 	return differenceInDays;
// };

// export const filterFromArray = (arr: quotes[]) => {
// 	let author = {},
// 		tag = {};

// 	const isRecordedTag = (el, tag) => {
// 		return tag[el];
// 	};

// 	const isRecordedAuthor = (el, author) => {
// 		if (!author[el]) {
// 			author[el] = true;
// 			return false;
// 		}
// 		return author[el];
// 	};

// 	const response = {
// 		tags: [],
// 		authors: [],
// 	};

// 	// arr.map(({ _id, author, tags }, _) => {
// 	// 	console.log('iterating ', author);
// 	// });

// 	const authors = arr.filter(({ author: person }, _) => {
// 		isRecordedAuthor(person, author)
// 			? console.log('has the value')
// 			: console.log('not present bruh');
// 	});
// 	console.log('authors => ', authors);
// };
