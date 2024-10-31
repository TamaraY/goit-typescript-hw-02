import axios from "axios";
import { Image } from "../components/App/App.types";

export const fetchArticles = async (
  page: number,
  query: string,
  clientId: string
): Promise<Image[]> => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      page,
      query,
      client_id: clientId,
    },
  });

  return response.data.results.map((image: any) => ({
    id: image.id,
    url: image.urls.thumb,
    title: image.alt_description,
    full: image.urls.full,
  }));
};
