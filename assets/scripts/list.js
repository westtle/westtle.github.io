// HTML.
const mainListContainer = document.querySelector(".__main-list");
const toolsListContainer = document.querySelector(".__tools-list");
const gamesListContainer = document.querySelector(".__games-list");
const otherListContainer = document.querySelector(".__other-list");
const challengeSubmissionContainer = document.querySelector(".__challenge-list");

function generateList() {
	list.forEach((item, index) => {
		const listTemplate = listTemplateCreate(item);

		if (item.category == "none") mainListContainer.innerHTML += listTemplate;
		if (item.category == "Tools") toolsListContainer.innerHTML += listTemplate;
		if (item.category == "Games") gamesListContainer.innerHTML += listTemplate;
		if (item.category == "Other") otherListContainer.innerHTML += listTemplate;
		if (item.category == "Challenge Submission") challengeSubmissionContainer.innerHTML += listTemplate;
	});
};

function listTemplateCreate(listItem) {
	return `<div class="_item">
	            <div class="info_">
	                <a class="title-link__" href="${listItem.directory}" ${listItem.repository ? `target="_blank"` : ''}><h3>${listItem.title}</h3></a>
	                <p class="description__">${listItem.description}</p>
	            </div>
	            ${listItem.repository ? `<a class="_repo-link" href="${listItem.repository}" target="_blank" aria-label="Repository link for ${listItem.title}"></a>` : ''}
	        </div>`;
};

document.addEventListener("DOMContentLoaded", () => generateList());