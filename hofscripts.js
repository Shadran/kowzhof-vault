function collapseAllThreads(element) {
	const post = element.closest('div.post');
	const threads = post.querySelectorAll('div.thread');
	threads.forEach(t => t.classList.add('collapsed'));
}

function expandAllThreads(element) {
	const post = element.closest('div.post');
	const threads = post.querySelectorAll('div.thread');
	threads.forEach(t => t.classList.remove('collapsed'));
}

function toggleThreadCollapse(element) {
	const thread = element.closest('div.thread');
	thread.classList.toggle('collapsed');
}

function scrollToClosestPost() {
	const posts = Array.from(document.querySelectorAll('div.main-post'))
		.concat(Array.from(document.querySelectorAll('div.post')));
	const visiblePost = getElementIntoView(posts);
	if (!!visiblePost) {
		visiblePost.scrollIntoView({ behavior: 'smooth'});
	}
}

function getElementIntoView(elements) {
	const elementsIntoView = elements.filter(e => {
		const rect = e.getBoundingClientRect();
		return rect.top <= 0 && rect.bottom >= 0;
	});
	return elementsIntoView.find(() => true);
}

function hookButtons() {
	document.querySelectorAll('button[name="expand"]').forEach(e => e.addEventListener("click", () => expandAllThreads(e)));
	document.querySelectorAll('button[name="collapse"]').forEach(e => e.addEventListener("click", () => collapseAllThreads(e)));
	document.querySelectorAll('span[name="collapse-thread"]').forEach(e => e.addEventListener("click", () => toggleThreadCollapse(e)));
	document.querySelector('#button-back-to-post').addEventListener("click", () => scrollToClosestPost());
	document.querySelector('#button-back-to-top').addEventListener("click", () => document.getElementById('post-beginning').scrollIntoView({ behavior: 'smooth' }));
}

function loadDates() {
	document.querySelectorAll('span.date-time').forEach(e => {
		const timestamp = e.getAttribute('data-timestamp');
		const date = new Date(timestamp * 1000);
		e.innerText = date.toLocaleString();
	});
}

function pageLoaded() {
	hookButtons();
	loadDates();
}




window.addEventListener("load", (event) => {
  pageLoaded();
});