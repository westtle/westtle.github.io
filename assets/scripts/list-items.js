const list = [
	{
		title: "Home",
		description: "The homepage.",
		directory: "/index.html",
		repository: null,
		category: "none"
	},
	{
		title: "About",
		description: "About this site.",
		directory: "/assets/pages/about.html",
		repository: null,
		category: "none"
	},
	{
		title: "Rock Paper Scissors",
		description: "Play some rock paper scissors!",
		directory: "https://westtle.github.io/rock-paper-scissors/",
		repository: "https://github.com/westtle/rock-paper-scissors",
		category: "Games"
	},
	{
		title: "Tic Tac Toe",
		description: "Play some tic tac toe!",
		directory: "https://westtle.github.io/tic-tac-toe/",
		repository: "https://github.com/westtle/tic-tac-toe",
		category: "Games"
	},
	{
		title: "2048",
		description: "Play some 2048!",
		directory: "https://westtle.github.io/2048/",
		repository: "https://github.com/westtle/2048",
		category: "Games"
	},
	{
		title: "Minesweeper",
		description: "Play some classic Minesweeper!",
		directory: "https://westtle.github.io/minesweeper/",
		repository: "https://github.com/westtle/minesweeper",
		category: "Games"
	},
	{
		title: "Hangman",
		description: "Guess the letters.",
		directory: "https://westtle.github.io/hangman/",
		repository: "https://github.com/westtle/hangman",
		category: "Games"
	},
	{
		title: "Simple Note",
		description: "A very simple notepad to use.",
		directory: "https://westtle.github.io/simple-note/",
		repository: "https://github.com/westtle/simple-note",
		category: "Tools"
	},
	{
		title: "Lorem Ipsum Generator",
		description: "Generate random words for placeholder.",
		directory: "https://westtle.github.io/lorem-ipsum-generator/",
		repository: "https://github.com/westtle/lorem-ipsum-generator",
		category: "Tools"
	},
	{
		title: "Color Picker",
		description: "Pick a color!",
		directory: "https://westtle.github.io/color-picker/",
		repository: "https://github.com/westtle/color-picker",
		category: "Tools"
	},
	{
		title: "ID - EN Translator",
		description: "Translate between English & Indonesian!",
		directory: "https://westtle.github.io/id_en-translator/",
		repository: "https://github.com/westtle/id_en-translator",
		category: "Tools"
	},
	{
		title: "Date & Time",
		description: "A simple date & time with multiple timezones.",
		directory: "https://westtle.github.io/date-and-time/",
		repository: "https://github.com/westtle/date-and-time",
		category: "Tools"
	},
	{
		title: "To-Do List",
		description: "A simple to-do list.",
		directory: "https://westtle.github.io/to-do-list/",
		repository: "https://github.com/westtle/to-do-list",
		category: "Tools"
	},
	{
		title: "Calculator",
		description: "Just a simple calculator.",
		directory: "https://westtle.github.io/calculator/",
		repository: "https://github.com/westtle/calculator",
		category: "Tools"
	},
	{
		title: "Notepad",
		description: "A notepad you can use...",
		directory: "https://westtle.github.io/notepad/",
		repository: "https://github.com/westtle/notepad",
		category: "Tools"
	},
	{
		title: "PX to REM Converter",
		description: "Convert px to rem or the other way around.",
		directory: "https://westtle.github.io/px-to-rem-converter/",
		repository: "https://github.com/westtle/px-to-rem-converter",
		category: "Tools"
	},
	{
		title: "Goodbye World!",
		description: "Goodbye World!",
		directory: "https://westtle.github.io/goodbye-world/",
		repository: "https://github.com/westtle/goodbye-world",
		category: "Other"
	},
	{
		title: "Roomba Cat!",
		description: "cat go brrr.",
		directory: "https://westtle.github.io/roomba-cat/",
		repository: "https://github.com/westtle/roomba-cat",
		category: "Other"
	},
	{
		title: "Sliding Images",
		description: "Just a sliding images.",
		directory: "https://westtle.github.io/sliding-images/",
		repository: "https://github.com/westtle/sliding-images",
		category: "Other"
	},
	{
		title: "Hover Card",
		description: "A simple card with hover effect.",
		directory: "https://westtle.github.io/hover-card/",
		repository: "https://github.com/westtle/hover-card",
		category: "Other"
	},
	{
		title: "Rain",
		description: "Relaxing rain.",
		directory: "https://westtle.github.io/rain/",
		repository: "https://github.com/westtle/rain",
		category: "Other"
	},
	{
		title: "Tribute Page",
		description: "Tribute to...",
		directory: "https://westtle.github.io/tribute-page/",
		repository: "https://github.com/westtle/tribute-page",
		category: "Other"
	},
	{
		title: "Random Quote",
		description: "Get random quote.",
		directory: "https://westtle.github.io/random-quote/",
		repository: "https://github.com/westtle/random-quote",
		category: "Other"
	},
	{
		title: "CSS is Awesome",
		description: "It's ok I guess...",
		directory: "https://westtle.github.io/css-is-awesome/",
		repository: "https://github.com/westtle/css-is-awesome",
		category: "Other"
	},
	{
		title: "Random Cat",
		description: "Submission for https://www.dicoding.com/academies/123",
		directory: "https://westtle.github.io/random-cat/",
		repository: "https://github.com/westtle/random-cat",
		category: "Challenge Submission"
	},
	{
		title: "Reading List",
		description: "Submission for https://www.dicoding.com/academies/315",
		directory: "https://westtle.github.io/reading-list/",
		repository: "https://github.com/westtle/reading-list",
		category: "Challenge Submission"
	},
	{
		title: "QR Code Component",
		description: "Frontend Mentor #1 - QR code component.",
		directory: "https://westtle.github.io/qr-code-component/",
		repository: "https://github.com/westtle/qr-code-component",
		category: "Challenge Submission"
	},
	{
		title: "Results Summary Component",
		description: "Frontend Mentor #2 - Results summary component.",
		directory: "https://westtle.github.io/results-summary-component/",
		repository: "https://github.com/westtle/results-summary-component",
		category: "Challenge Submission"
	},
	{
		title: "Product Preview Card Component",
		description: "Frontend Mentor #3 - Product preview card component.",
		directory: "https://westtle.github.io/product-preview-card-component/",
		repository: "https://github.com/westtle/product-preview-card-component",
		category: "Challenge Submission"
	},
];