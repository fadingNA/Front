import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import './skill.scss'
import {images} from "../../constants";

const skills = [
    {
        title: '',
        description: 'design library application for people with borrow and return option include payment in C++',
        github: 'https://github.com/fadingNA/LibraryManagement',
        imgURL: images.amazon
    },
    {
        title: 'Library Application',
        description: 'design library application for people with borrow and return option include payment in C++',
        github: 'https://github.com/fadingNA/LibraryManagement',
        imgURL: images.email
    }
]

const Skill = () => {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <>
            <div id="skills" className="...">



            </div>
        </>

    )
}

export default Skill;

