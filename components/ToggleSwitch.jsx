"use client";
import { useEffect, useRef } from "react";
import PrimaryButton from "./buttons/PrimaryButton";

export default function ToggleSwitch({
  firstButtonTitle,
  secondButtonTitle,
  firstButtonOnClick,
  secondButtonOnClick,
}) {
  const firstButtonRef = useRef(null);
  const secondButtonRef = useRef(null);

  useEffect(() => {
    // check first if the ref variables have elements in them
    if (firstButtonRef.current && secondButtonRef.current) {
      // activate the first button
      firstButtonRef.current.addEventListener("click", () => {
        // check if the button is not active
        if (!firstButtonRef.current.classList.contains("bg-secondary")) {
          // activate the button
          firstButtonRef.current.classList.add("bg-secondary", "text-primary");

          // disable the current active button
          secondButtonRef.current.classList.remove(
            "bg-secondary",
            "text-primary",
          );
          secondButtonRef.current.classList.add("text-secondary");
        }
      });

      // activate the second button
      secondButtonRef.current.addEventListener("click", () => {
        if (!secondButtonRef.current.classList.contains("bg-secondary")) {
          secondButtonRef.current.classList.add("bg-secondary", "text-primary");
          firstButtonRef.current.classList.remove(
            "bg-secondary",
            "text-primary",
          );
          firstButtonRef.current.classList.add("text-secondary");
        }
      });
    }
  }, []);

  return (
    <div className="flex justify-center gap-2">
      <PrimaryButton
        ref={firstButtonRef}
        className="bg-secondary text-primary"
        onClick={firstButtonOnClick}
      >
        {firstButtonTitle}
      </PrimaryButton>
      <PrimaryButton ref={secondButtonRef} onClick={secondButtonOnClick}>
        {secondButtonTitle}
      </PrimaryButton>
    </div>
  );
}
