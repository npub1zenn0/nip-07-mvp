// eslint-disable-next-line import/no-unassigned-import
import "./options-storage.js";

console.log("chrome.browserAction");
chrome.action.onClicked.addListener(async (tab) => {
	const tabId = tab?.id;
	if (!tabId) {
		return;
	}
	await chrome.scripting.executeScript({
		target: {
			tabId,
		},
		func: () => {
			document.dispatchEvent(
				new CustomEvent("nostr_event", {
					detail: {
						data: "yes",
					},
				})
			);
		},
	});
});
