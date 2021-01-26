import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../img/photos";

const PhotoGallery = () => <Gallery photos={photos} direction={"column"} />;

export default PhotoGallery;