import * as React from "react";
import Project from "../components/Project";
import coronaTravelerImage from "../images/projects/corona-traveler.png";
import xmrBotImage from "../images/projects/xmr-bot.png";
import ctscanImage from "../images/projects/ctscan.gif";
import goldbergsImage from "../images/projects/goldbergshouse.png";
import { CSharp, Django, Java, Javascript, Monero, NodeJs, ReactTech, Unity } from "../components/Techs";
import classNames from "classnames";

const Projects = () => {
    const listStyle = classNames("list-disc", "pl-4", "font-semibold");

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <Project
                title="Corona Traveler"
                image={coronaTravelerImage}
                techs={[Javascript, ReactTech, Django]}
                githubLink="https://github.com/FillipdotS/corona-traveler"
            >
                An interactive map for coronavirus travel restrictions. Users choose their country and the map will show what other countries are open to them.
                <ul className={listStyle}>
                    <li>Was live for ~1 year</li>
                </ul>
            </Project>
            <Project
                title="XMR Bot"
                image={xmrBotImage}
                techs={[Javascript, NodeJs, Monero]}
                githubLink="https://github.com/FillipdotS/xmr-bot"
                viewLink="https://steamcommunity.com/id/xmrkeybot"
            >
                This is a bot that would trade the Monero cryptocurrency for game items from the game Counter Strike: Global Offensive, and vice versa.
                <ul className={listStyle}>
                    <li>Used local Monero node</li>
                </ul>
            </Project>
            <Project
                title="CT Scanner"
                image={ctscanImage}
                techs={[Java]}
                githubLink="https://github.com/FillipdotS/ct-scan-renderer"
            >
                A program written in Java to take CT scan data (3D matrix of integer values) and provide several ways to render them.
                <ul className={listStyle}>
                    <li>Diffuse shading with moving light source</li>
                    <li>Volume rendering</li>
                    <li>Slice rendering</li>
                </ul>
            </Project>
            <Project
                title="Goldberg's House"
                image={goldbergsImage}
                techs={[CSharp, Unity]}
                githubLink="https://github.com/FillipdotS/GoldbergsHouse"
            >
                A 2D physics puzzle game made in Unity (C#) for a competition, winning 2nd place. Created in a two-person team, where my main responsibility was the programming. Used Git for version control.
                <ul className={listStyle}>
                    <li>Large project that took six months to finish</li>
                </ul>
            </Project>
        </div>
    );
};

export default Projects;