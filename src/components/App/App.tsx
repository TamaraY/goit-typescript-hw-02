import React, { useEffect, useState } from "react";
import { fetchArticles } from "../../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image } from "./App.types";

const clientId = "_mrFDVAvAE8ojYscnS83cqv1c0rdRqbbLcRav-AJnS4";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchArticles(page, query, clientId);
        console.log(data);
        setImages((prev) => [...prev, ...data]);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (searchValue: string) => {
    if (!searchValue.trim()) {
      toast.error("Please fill in the search field");
      return;
    }
    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  const handleOpenModal = (image: Image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery} />
      {isError && <ErrorMessage error="Something went wrong! Try again!" />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          image={selectedImage}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
