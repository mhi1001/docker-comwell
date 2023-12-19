import React from "react";

const Amenity = ({ label }) => (
  <div className="flex gap-[8px] text-[13px]">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.625 3.125C5.27982 3.125 5 3.40482 5 3.75V8.125H6.875V5.625C6.875 4.93464 7.43464 4.375 8.125 4.375H11.875C12.5654 4.375 13.125 4.93464 13.125 5.625V8.125H15V3.75C15 3.40482 14.7202 3.125 14.375 3.125H5.625ZM13.125 9.375H6.875H4.61714L3.78381 11.875H16.2162L15.3829 9.375H13.125ZM11.875 8.125V5.625H8.125V8.125H11.875ZM3.75 13.125V15.625H16.25V13.125H3.75ZM3.75 18.125V16.875H16.25V18.125H17.5V11.7736L16.25 8.02358V3.75C16.25 2.71447 15.4105 1.875 14.375 1.875H5.625C4.58947 1.875 3.75 2.71447 3.75 3.75V8.02358L2.5 11.7736V18.125H3.75Z"
        fill="black"
      />
    </svg>
    <span>{label}</span>
    <svg
      width="1"
      height="18"
      viewBox="0 0 1 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1" height="18" fill="#E0E0E0" />
    </svg>
  </div>
);

export default Amenity;
