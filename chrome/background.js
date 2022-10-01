chrome.tabs.onUpdated.addListener((tabId, { status }) => {
	if (status === 'complete') {
		chrome.scripting.executeScript({
			target: { tabId },
			func: setPageBackgroundColor,
		})
	}
})

function setPageBackgroundColor() {
	const theaterButtonSelector = () =>
		document.querySelector('[title="Cinema mode (t)"]')

	function main() {
		/**
		 * @type HTMLVideoElement
		 */
		const video = document.getElementsByTagName('video').item(0)

		// click on the theater mode button after a couple ticks of progress to give the page a change to load
		let i = 0
		const handler = () => {
			i++
			if (i > 1) {
				clickOnTheater()
				video.removeEventListener('progress', handler)
			}
		}

		// only do it if you detect the theater button (the button doesn't show up if it's already in theater mode or fullscreen)
		if (theaterButtonSelector()) video.addEventListener('progress', handler)
	}

	function clickOnTheater() {
		const button = theaterButtonSelector()
		if (button) {
			button.click()
		}
	}

	main()
}
