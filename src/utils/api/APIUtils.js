import { BASE_URL, AUTH } from "./Api"

// Get Artist Data

export const getArtistData = (name, setData, setMessage, setLoading) => {
    setLoading(true)

    fetch(`${BASE_URL}/artists/${name}/?${AUTH}`)
    .then(response => response.json())
    .then(result => {
        if (result.length === 0) setMessage(`Artist with name "${name}" not found!`)
        else setData(result)
    })
    .catch(err => console.log('get artist error: ', err.message))
    .finally(() => setLoading(false))
}