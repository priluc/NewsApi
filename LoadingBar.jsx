import React from "react";
export default function Loading(props){
        return (
            <>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow={props.progress} style={{width: props.progress +"%" }} aria-valuemin="0" aria-valuemax="100"></div>
                </div>

            </>
        )
    }