import * as React from "react";
import PropTypes from "prop-types";

const TechStack = ({ techs }) => {
    return (
        <div className="mb-0.5 mt-1.5 flex flex-row items-center place-content-center gap-2">
            <div className="w-full border-t border-dotted border-2 border-gray-500"></div>
            {techs.map((tech) => (
                <img key={tech.name} alt={tech.name} src={tech.icon} className="h-7" />
            ))}
            <div className="w-full border-t border-dotted border-2 border-gray-500"></div>
        </div>
    );
};

TechStack.propTypes = {
    techs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
    })).isRequired,
};

export default TechStack;