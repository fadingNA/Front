import React from "react";
import './header.scss';
import {motion} from 'framer-motion';
import {images} from '../../constants'


const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}
const Header = () => {
    return (
        <div id="home" className="app__header app__flex">
            <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{duration: 3}}
                className="app__header-info">
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>
                            👋🏻
                        </span>
                        <motion.div
                            whileInView={{opacity: 1}}
                            whileHover={{scale: 1.1}}
                            transition={{duration: 0.5, type: 'tween'}}
                            style={{marginLeft: 20}}>
                            <p className="p-text">Greeting</p>
                            <h1 className="head-text">
                                NONTHACHAI
                            </h1>

                        </motion.div>
                    </div>
                    <div className="tag-cmp app__flex">
                        <p className="p-text">
                            <motion.div
                                whileInView={{opacity: 1}}
                                whileHover={{scale: 1.1}}
                                transition={{duration: 0.5, type: 'tween'}}>
                                "Software Engineer"
                                <br/>
                                <br/>
                                "Looking for Co-Op Summer term"
                            </motion.div>
                        </p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className="text-center p-10">
                        <p className="app__header-text">
                            To learn and gain more experience as a Software developer and to apply my knowledge as well
                            as improve
                            <br/>
                            my problem solving and communication skills in order to have professional growth during my
                            co-op term.
                            <br/>
                        </p>
                    </motion.div>
                </div>
                <br/>
                <br/>
                <br/>
            </motion.div>
            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className={"app__header-img"}>
                <img src={images.working} alt="profile_bg"/>
            </motion.div>
            <a href={"https://github.com/fadingNA"}>
                <motion.div
                    variant={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.1, type: 'tween'}}
                    className="app__header-circles">
                    {[images.react, images.python, images.node, images.cpp, images.git].map((circle, index) => (
                        <div className="circle-cmp app__flex" key={`circle-${index}`}>
                            <img src={circle} alt={"profile_bg"}/>
                        </div>
                    ))}
                </motion.div>
            </a>
        </div>)
}

export default Header;