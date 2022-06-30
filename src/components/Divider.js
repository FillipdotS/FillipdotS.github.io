import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const colorSchemes = {
    "blue": ["from-blue-500", "to-green-500"],
    "purple": ["from-purple-500", "to-indigo-500"],
    "red": ["from-red-500", "to-orange-500"],
    "default": ["from-blue-500", "to-green-500"],
};

const Divider = ({ title, icon, textColorVariant }) => {
    const textStyle = classNames("bg-clip-text", "text-transparent", "bg-gradient-to-tr", (colorSchemes[textColorVariant] || colorSchemes["default"]));

    return (
        <div className="my-8 px-10 flex flex-row items-center place-content-center">
            <div className="w-full border-t border-gray-500"></div>
            <div className="mx-3 flex flex-row items-center place-content-center">
                <div className="w-12 h-12 mr-1">
                    <img alt="Projects Icon" className="w-12 h-12" src={icon} />
                </div>
                <div className="text-3xl font-extrabold">
                    <span className={textStyle}>
                        {title}
                    </span>
                </div>
            </div>
            <div className="w-full border-t border-gray-500"></div>
        </div>
    );
};

Divider.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    textColorVariant: PropTypes.oneOf(["blue", "purple", "red"])
};

export default Divider;