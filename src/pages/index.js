import * as React from "react";
import Divider from "../components/Divider";
import myPhoto from "../images/me.png";
import projectsIcon from "../images/3d/projects.png";
import favicon from "../images/favicon.png"
import ogPreview from "../images/preview.png"
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import classNames from "classnames";

const IndexPage = () => {
    const footerLinkStyle = classNames("underline", "hover:decoration-dashed", "decoration-solid");

    return (
        <main>
            <div className="container p-3 z-2 relative">
                <div className="absolute z-1 -top-16 -left-16 w-48 h-48 rounded-full blur-3xl bg-gradient-to-bl from-blue-500 to-green-500 -z-10" />
                <div className="absolute z-1 0 right-0 bottom-0 w-48 h-48 rounded-full blur-3xl bg-gradient-to-bl from-blue-500 to-green-500 -z-10" />

                <div className="flex flex-row flex-wrap items-center place-content-center gap-3 mt-12">
                    <img alt="Picture of me" className="rounded-full p-1.5 w-40 h-40 ring-2 ring-gray-500 bg-gray-800" src={myPhoto} />
                    <div className="text-center sm:text-left">
                        <h1 className="text-6xl font-extrabold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                                Fillip<br />Serov
                            </span>
                        </h1>
                        <h3 className="text-2xl font-extrabold text-gray-500">
                            Software Engineer
                        </h3>
                    </div>
                    <div className="text-gray-200 max-w-2xl p-4">
                        <p className="indent-8 mb-5">
                            Hey, welcome to my portfolio. My name's Fillip and I'm a Software Engineer based in the UK. Below you'll find the personal projects that I believe are the most interesting and best showcase my skills.
                        </p>

                        <p className="text-xs">
                            In case you're interested, this website is hosted on <a className={footerLinkStyle} href="https://github.com/FillipdotS/FillipdotS.github.io">Github</a> and custom-made with tailwindcss
                        </p>
                    </div>
                </div>

                <Divider title={"Projects"} icon={projectsIcon} textColorVariant="blue" />

                <Projects />

                <Footer
                    elements={[
                        "Fillip Serov © 2022",
                        <a className={footerLinkStyle} href={"https://github.com/FillipdotS"}>Github</a>,
                        <a className={footerLinkStyle} href={"https://uk.linkedin.com/in/fillip-serov-066b101a2"}>LinkedIn</a>
                    ]}
                />
            </div>
        </main>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <title>Fillip Serov | Portfolio</title>
        <meta name="description" content="My portfolio to show off my personal projects" />
        <meta property="og:image" content={ogPreview} />
        <link rel="icon" type="image/x-icon" href={favicon} />
    </>
);
