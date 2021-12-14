

export const getGifs = async(category) => {
    // encodeURI => remove all the spaces
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Rf2tWbQVcng6WCrg7R6BPNX4YplLjIPR`
    const resp = await fetch( url )
    const { data } = await resp.json()


    const gifs = data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            imgUrl: gif.images?.downsized_medium.url
        }
    } )

    return gifs
}
