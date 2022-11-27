import React, { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

//This component is used to add a new post, from the home page and the profile page
const AddButton = () => {
    const navigate = useNavigate();
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        setShowTopBtn(true);
    });
   
    const createPost = () => {
       navigate("/create");
    };
    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <IoIosAdd
                    className="icon-position2 icon-style"
                    onClick={createPost}
                />
            )}{" "}
        </div>
    );
};
export default AddButton;
