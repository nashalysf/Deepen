import React, { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import create from "../../pages/CreatePosts";

const AddButton = () => {
    const navigate = useNavigate();
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        
                setShowTopBtn(true);
        });
   
    const goToTop = () => {
       navigate("/create");
    };
    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <IoIosAdd
                    className="icon-position2 icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};
export default AddButton;
