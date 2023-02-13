// HTML.
const mainListContainer = document.querySelector(".__main-list");
const toolsListContainer = document.querySelector(".__tools-list");
const gamesListContainer = document.querySelector(".__games-list");
const otherListContainer = document.querySelector(".__other-list");

function generateList() {
	list.forEach((item, index) => {
		const listTemplate = listTemplateCreate(item);

		if (item.category == "none") mainListContainer.innerHTML += listTemplate;
		if (item.category == "Tools") toolsListContainer.innerHTML += listTemplate;
		if (item.category == "Games") gamesListContainer.innerHTML += listTemplate;
		if (item.category == "Other") otherListContainer.innerHTML += listTemplate;
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