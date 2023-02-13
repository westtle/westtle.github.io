const list = [
	{
		title: "Home",
		description: "The Homepage.",
		directory: "/index.html",
		repository: null,
		category: "none"
	},
	{
		title: "Simple Note",
		description: "A very simple notepad to use.",
		directory: "https://westtle.github.io/simple-note/",
		repository: "https://github.com/westtle/simple-note",
		category: "Tools"
	}
];

// HTML.
const mainListContainer = document.querySelector(".__main-list");
const toolsListContainer = document.querySelector(".__tools-list");

function generateList() {
	list.forEach((item, index) => {
		const listTemplate = listTemplateCreate(item);

		if (item.category == "none") mainListContainer.innerHTML += listTemplate;
		if (item.category == "Tools") toolsListContainer.innerHTML += listTemplate;
	});
};

function listTemplateCreate(listItem) {
	if (listItem.repository !== null) {
		return `<div class="_item">
		            <div class="info_">
	                    <a class="title-link__" href="${listItem.directory}" target="_blank"><h2>${listItem.title}</h2></a>
	                    <p class="description__">${listItem.description}</p>
	                </div>
	                <div class="repository_">
	                    <a class="repo-link__" href="${listItem.repository}" target="_blank"></a>
	                </div>
	            </div>`;
	} else {
		return `<div class="_item">
		            <div class="info_">
	                    <a class="title-link__" href="${listItem.directory}"><h2>${listItem.title}</h2></a>
	                    <p class="description__">${listItem.description}</p>
	                </div>
	            </div>`;
	};

};

document.addEventListener("DOMContentLoaded", () => {
	generateList();
});