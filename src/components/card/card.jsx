import React from "react";
import "./card.scss";
import { MdOutlineStar } from "react-icons/md";
import SwipeableViews from "react-swipeable-views";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import MobileStepper from "@mui/material/MobileStepper";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = ({ rating, location, host, date, price, images }) => {
  const [step, setStep] = useState(0);
  const [like, setLike] = useState(false);

  const maxSteps = images.length;

  const nextStep = () => {
    setStep((prevStep) =>
      prevStep === images.length - 1 ? (prevStep = 0) : prevStep + 1
    );
  };

  const prevStep = () => {
    setStep((lastStep) =>
      lastStep === 0 ? (lastStep = images.length - 1) : lastStep - 1
    );
  };

  const handleStepChange = (step) => {
    setStep(step);
  };
  return (
    <div className="card">
      <div className="card-box">
        <div className="card-scroll">
          {/* <img src={image[0]} alt="img" />{" "} */}
          {images.length && (
            <SwipeableViews
              axis={"x"}
              index={step}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => {
                return <img key={index} src={step} alt="img" />;
              })}
            </SwipeableViews>
          )}
          <div className="pagination">
            <MobileStepper
              sx={{ backgroundColor: "transparent" }}
              steps={maxSteps}
              position="static"
              activeStep={step}
            />
          </div>
          <div
            className={step === 0 ? "arrow-left-disabled" : "arrow-left"}
            onClick={prevStep}
          >
            <MdKeyboardArrowLeft />
          </div>
          <div
            className={
              step === images.length - 1
                ? "arrow-right-disabled"
                : "arrow-right"
            }
            onClick={nextStep}
          >
            <MdKeyboardArrowRight />
          </div>
          <div className="like-btn" onClick={() => setLike(!like)}>
            {like ? (
              <AiFillHeart />
            ) : (
              <AiFillHeart style={{ fill: "rgba(0, 0, 0, 0.7)" }} />
            )}
          </div>
        </div>
        <div className="card-body">
          <div className="card-left">
            <span className="location">{location}</span>
            <span className="host">Hosted by {host}</span>
            <span className="date">{date}</span>
            <span className="price">
              ${price} <span className="price-night">night</span>
            </span>
          </div>
          <div className="card-right">
            <div className="rating">
              <MdOutlineStar />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
