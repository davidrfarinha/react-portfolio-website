import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProjectThumbnail({ slug, title, subtitle, images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageRotationInterval, setImageRotationInterval] = useState(null);
    const rotatePictures = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        const changePicture = () => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }
        setImageRotationInterval(setInterval(changePicture, 1500));
    }

    const clearRotatePictures = () => {
        clearInterval(imageRotationInterval);
        setImageRotationInterval(null);
        setCurrentIndex(0);
    }

    const pictures = images.map((image, i) => (
        <img
            key={`picture${i + 1}`}
            src={image}
            alt="Project print screen"
            className={`thumbnail-picture ${i === currentIndex ? "active" : ""}`}
        ></img>
    ));

    return (
        <Link
            to={`${slug}`}
            className="project-thumbnail gradient-border box-shadow"
            onMouseEnter={rotatePictures}
            onMouseLeave={clearRotatePictures}
        >
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <div className="container-thumbnail-picture">
                {pictures}
            </div>

        </Link>
    );
}
ProjectThumbnail.propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };