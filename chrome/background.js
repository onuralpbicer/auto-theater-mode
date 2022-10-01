chrome.tabs.onUpdated.addListener((tabId, { status }) => {
	if (status === 'complete') {
		chrome.scripting.executeScript({
			target: { tabId },
			files: ['theater.js'],
		})
	}
})
