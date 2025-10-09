class GifApi {
  static giphyApiKey = "4TGfLiK60FgFKOTSc2QHSsPZISFJ8DDq";
  static endpointTemplate = (searchQuery) =>
    `https://api.giphy.com/v1/gifs/translate?api_key=${this.giphyApiKey}&s=${searchQuery}`;

  async get(searchQuery) {
    let gif;
    try {
      const response = await fetch(GifApi.endpointTemplate(searchQuery));
      const responseJson = await response.json();
      gif = responseJson.data.images.original.url;
    } catch {
      gif = null;
    }
    return gif;
  }
}

export default new GifApi();
