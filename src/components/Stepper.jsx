import React, { useState } from "react";

const Stepper = ({ steps }) => {
    const [currentItem, setCurrentItem] = useState(0);
    const handleBack = () => {
        currentItem > 0 && setCurrentItem((prev) => prev - 1);
    };
    const handleContinue = () => {
        currentItem < steps.length - 1 && setCurrentItem((prev) => prev + 1);
    };
    return (
        <div className=" w-full h-screen flex justify-center items-center gap-36 bg-black text-white">
            <div>
                {steps.map(({ label, content }, index) => (
                    <div className="flex items-center gap-4 mb-8">
                        <div
                            className={` ${
                                index <= currentItem ? "bg-blue-600" : ""
                            } border-2 relative   border-white w-12 h-12  rounded-full flex justify-center items-center`}
                        >
                            {index + 1}
                            {index < steps.length - 1 && (
                                <div
                                    className={` ${
                                        index < currentItem
                                            ? "bg-blue-600"
                                            : "bg-white"
                                    } h-8 w-1  absolute top-12`}
                                ></div>
                            )}
                        </div>

                        <div>{label}</div>
                    </div>
                ))}
            </div>
            <div>
                <div>{steps[currentItem].content}</div>
            </div>
            <div className="">
                <button
                    onClick={handleBack}
                    className="border mr-4 border-white px-3 py-1"
                >
                    Back
                </button>
                <button
                    onClick={handleContinue}
                    className="border border-white px-3 py-1"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default Stepper;
