chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ preference: 'theater' })
	// chrome.storage.sync.set({ preference: 'fullscreen' })
})
