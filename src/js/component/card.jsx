import React from "react"




const Card = ({randomImage}) => {
    return (
        <>
        <div className="container col-3 mx-auto my-5">
            <div className="card">
                <img src= {`https://picsum.photos/500/325?random=${randomImage}`}></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className=" card-footer bg-light w-100 px-5">
                    <a href="#" className="btn btn-dark">Find out more!</a>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Card 