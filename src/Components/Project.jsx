import React from "react";
import "./styles/Project.css";
import { Projects1, Work } from "../Data"; 
export const Project = () => {
    return (
        <>
            <div className="DIV_WE_D">
                <div><h1 className="DIV_WE_D_H1">Work Experience</h1></div>
                {
                    Work.map(wr => (
                        <div className="DIV_WE-D_L" key={wr.id}>
                            <div className="DIV_WE_D_L_D1">
                                <p className="DIV_WE_D_L_D1_WRNAME">{wr.name}, </p>
                                <p className="DIV_WE_D_L_D1_ADD">&nbsp;{wr.address}</p>
                            </div>
                            <div className="DIV_WE_D_L_D2">
                                <p className="DIV_WE_D_L_D1_WRNAME">{wr.position}, </p>
                                <p className="DIV_WE_D_L_D1_ADD">&nbsp;{wr.start} to {wr.end}</p>
                            </div>
                            <div>
                                <p className="DIV_WE_D_L_D1_PP">{wr.des1}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="DIV_PRO">
                <div className="DIV_PRO_H1_DIV"><h1 className="DIV_PRO_H1_DIV_H1_D">Projects</h1></div>
                <div className="DIV_PRO_PRO_LIST">
                    {
                        Projects1.map(pro => (
                            <div key={pro.id} className="DIV_PRO_PRO_LIST_P">
                                <img className="PRO_IMAGE" src={pro.image} alt={pro.name} width="400px" height="200px" />
                                <p className="PRO_PT">{pro.name}</p>
                                <a className="PRO_A_LINK" href={pro.link} target="_blank">Click Here!</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}