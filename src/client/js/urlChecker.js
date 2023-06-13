export const checkUrl = function (text) {
	const urlPattern = /^(https?:\/\/)([\w.-]+)\.([a-z]{2,})(\/[^\s]*)?$/i;

	return !!urlPattern.test(text);
}