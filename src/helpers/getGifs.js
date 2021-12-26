export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&api_key=S2AdiuHAqCaWZlP1xfBlTEOoTNPDFlf3&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((item) => {
    let { id, title } = item;
    let {
      downsized: { url },
    } = item?.images;
    return {
      id,
      title,
      url,
    };
  });

  return gifs;
};
