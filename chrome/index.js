document.addEventListener('DOMContentLoaded', (event) => {
	console.log(event)
})

function setPageBackgroundColor() {
	chrome.storage.sync.get('color', ({ color }) => {
		document.body.style.backgroundColor = color
	})
}
