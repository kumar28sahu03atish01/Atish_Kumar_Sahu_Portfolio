import React from "react";
import './styles/Header.css';
import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <>
            <div className="HEADER_DIV_H1"><Link to="/" className="HEADER_DIV_H1_H1">Atish Kumar Sahu</Link></div>
        </>
    );
}