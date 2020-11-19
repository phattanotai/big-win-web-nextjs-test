import { useEffect, useState } from "react";

export default function SlideImages({imagesArray,nameEl}) {
    let slideIndex = 1;
    const [images, setImages] = useState(imagesArray);
  
    useEffect(() => {
      plusSlides(1);
      const interval = setInterval(() => {
        plusSlides(1);
      }, 10000);
      return () => clearInterval(interval);
    }, []);
  
    const plusSlides = (n) => {
      slideIndex += n;
      showSlides();
    };
    const showSlides = () => {
      var i;
      var slides = document.getElementsByClassName(`${nameEl}Slide fadeImg`);
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      if (slideIndex < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
    };
  return (
    <div
      className="slideshow-container"
      style={{ maxWidth: "100%", minHeight: "100%", margin: 0 }}
    >
      {images.map((b, index) => {
        if (b.active) {
          return (
            <div className={`${nameEl}Slide fadeImg`} key={index}>
              <img src={b.pathName} style={{ maxWidth: "100%",minHeight: "100%", margin: 0 }} />
            </div>
          );
        }
      })}
      <a
        className="prev"
        onClick={() => {
          plusSlides(-1);
        }}
      >
        &#10094;
      </a>
      <a
        className="next"
        onClick={() => {
          plusSlides(1);
        }}
      >
        &#10095;
      </a>
    </div>
  );
}
