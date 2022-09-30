chrome.storage.sync.get('preference', ({ preference = 'theater' }) => {
	console.log(preference)

	setTimeout(() => {
		if (preference === 'theater') {
			if (!isTheater()) {
				clickOnTheater()
			}
		} else if (preference === 'fullscreen') {
			if (!isFullscreen()) {
				clickOnFullscreen()
			}
		}
	}, 1000)
})

function getPlayer() {
	const video = document.getElementById('movie_player')
	if (!video) throw new Error('Video player not found')
	return video
}

function isFullscreen() {
	const video = getPlayer()
	return (
		window.innerWidth === video.clientWidth &&
		window.innerHeight === video.clientHeight
	)
}

function isTheater() {
	const video = getPlayer()
	return window.innerWidth === video.clientWidth
}

function clickOnFullscreen() {
	const button = document.querySelector('[title="Full screen (f)"]')
	if (button) {
		console.log('fullscreen')
		button.click()
	}
}

function clickOnTheater() {
	const button = document.querySelector('[title="Cinema mode (t)"]')
	if (button) {
		console.log('theater')
		button.click()
	}
}
