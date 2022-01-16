// Format Number
export const formatNumber = num => num < 10 ? `0${num}` : num

export const visitWebsiteHandler = (url) => window.open(url, "_blank")