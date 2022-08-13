import * as React from "react";
import PropTypes from "prop-types";

const Footer = ({ elements }) => {
    return (
        <div className="flex flex-row items-center place-content-center my-12">
            <h3 className="text-2xl font-extrabold text-gray-200">
                {elements.map((element, index) => {
                    return (
                        <>
                            {element}
                            {index + 1 !== elements.length &&
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mx-2">
                                    ⬤
                                </span>
                            }
                        </>
                    );
                })}
            </h3>
        </div>
    );
};

Footer.PropTypes = {
    elements: PropTypes.array.isRequired,
};

export default Footer;