import axios from "axios";

interface Image {
  id: string;
  url: string;
  title: string;
}

export const fetchArticles = async (
  page: number,
  query: string
): Promise<Image[]> => {
  const response = await axios.get(
    `https://api.example.com/images?page=${page}&query=${query}`
  );
  return response.data;
};
