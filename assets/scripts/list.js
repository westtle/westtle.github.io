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
    const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;

    return `<div class="_item">
                <div class="info_">
                    <a class="title-link__" href="${listItem.directory}" ${listItem.repository ? `target="_blank"` : ''}><h3>${listItem.title}</h3></a>
                    <p class="description__">${listItem.description}</p>
                </div>
                ${listItem.repository ? `<a class="_repo-link" href="${listItem.repository}" target="_blank" aria-label="Repository link for ${listItem.title}">${githubIcon}</a>` : ''}
            </div>`;
};

document.addEventListener("DOMContentLoaded", () => generateList());