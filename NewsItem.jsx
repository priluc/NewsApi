import React from "react"
import noimage from "./noimage.png"
export default function NewsItem(props){
        return (
            <>

                <div className="card">
                    <img src={(props.image)?props.image:noimage} className="card-img-top"style={{width:"100%", height:"150px"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{height:"100px"}}>{(props.title) ? (props.title.slice(0, 50) + "...") : ""}</h5>
                        <hr/>
                        <p className="card-text"><small>News by:- {(props.author) ? (props.author):("unknown")}</small></p>
                        <p className="card-text"><small>Date:- {new Date(props.date).toGMTString()}</small></p>
                        <p className="card-text"><small>Source by:- {(props.source) ? (props.source):("unknown")}</small></p>
                        <hr/>
                        <p className="card-text" style={{height:"300px"}}>Description:- {(props.description) ? (props.description.slice(0, 200) + "...") : ("")}</p>
                        <a href={props.newsUrl} className="btn btn-primary w-100">Read Full News</a>
                    </div>
                </div>

            </>
        )
        }