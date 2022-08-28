import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle,IoIosArrowDropleft} from "react-icons/io"

export function ImageSlider({ slides }) {
  const [currentIndex, setcurrentIndex] = useState(0);
  const containerStyles = {
    display:"flex",
    // border: "1px solid red",
    alignItems: "center",
    gap:"70px",
    justifyContent: "center",
    marginTop:"80px",
    marginBottom: "50px"
  };
  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  const handleNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };
 
  return (
    <div style={containerStyles}>
      <IoIosArrowDropleftCircle onClick={handlePrev} size="60px" color="grey"/>
        <img
          src={slides[currentIndex].url}
          alt="pic"
          width="70%"
        />
      <IoIosArrowDroprightCircle onClick={handleNext}  size="60px" color="grey"/>
    </div>
  );
}
