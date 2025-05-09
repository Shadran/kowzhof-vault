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

function hookButtons() {
	document.querySelectorAll('button[name="expand"]').forEach(e => e.addEventListener("click", () => expandAllThreads(e)));
	document.querySelectorAll('button[name="collapse"]').forEach(e => e.addEventListener("click", () => collapseAllThreads(e)));
	document.querySelectorAll('span[name="collapse-thread"]').forEach(e => e.addEventListener("click", () => toggleThreadCollapse(e)));
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