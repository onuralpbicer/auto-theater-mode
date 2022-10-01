browser.tabs.onUpdated.addListener((tabId, { status }) => {
	if (status === 'complete') {
		browser.scripting.executeScript({
			target: { tabId },
			files: ['theater.js'],
		})
	}
})
