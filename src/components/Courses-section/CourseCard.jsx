import React from "react";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating, price } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h5 className="course__title mb-4">{title}</h5>

        <div className=" d-flex justify-content-between align-items-center bg-[#bef7ed] rounded-[5px] pt-3">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-time-line"></i> {lesson} Months
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-eye-line"></i> {students}K
          </p>
        </div>
              <hr></hr>
        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i><i class="ri-star-line"></i> {rating}
          </p>

          <p className="enroll d-flex align-items-center gap-1">
          <h4>PKR {price}</h4>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
