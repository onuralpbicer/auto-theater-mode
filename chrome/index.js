chrome.storage.sync.get('preference', ({ preference = 'theater' }) => {
	const radios = document.querySelectorAll('input[name="input"]')
	radios.forEach((radio) => {
		radio.removeAttribute('disabled')
		if (radio.value === preference) radio.checked = 'true' //('selected', 'true')

		radio.addEventListener('click', function () {
			chrome.storage.sync.set({ preference: radio.value })
		})
	})
})
