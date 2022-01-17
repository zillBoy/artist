// Format Number
export const formatNumber = num => num < 10 ? `0${num}` : num

export const visitWebsiteHandler = (url) => window.open(url, "_blank")

// Filter Handler
export const filterHandler = (value, keys, data) => {
    
    let updatedData = []

    if (value.length) {
        updatedData = data.filter((item) => {

            let startsWith = keys.map(key => {
                return item['venue'][key]
                    .toString()
                    .toLowerCase()
                    .startsWith(value.toLowerCase())
            })

            startsWith = startsWith.includes(true)

            let includes = keys.map(key => {
                return item['venue'][key]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase())
            })

            includes = includes.includes(true)
                
            if (startsWith) return startsWith
            else if (!startsWith && includes) return includes
            else return null
        })

        return updatedData
    }
}