import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function SlideShow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const rotatePictures = () => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
            const changePicture = () => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
            }
            setInterval(changePicture, 2000);
        }
        rotatePictures();
    }, []);

    const pictures = images.map((image, i) => (
        <img
            key={`picture${i + 1}`}
            src={image}
            alt="Project print screen"
            className={`thumbnail-picture ${i === currentIndex ? "active" : ""}`}
        ></img>
    ));

    return (
        <div
            className="slide-show"
        >
            {pictures}
        </div>
    );
}
SlideShow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};