import React from "react";
const Card=({city})=>{
    return(
        <div>
            <div className="card">
                <div className="maininfo">
                    <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="" />
                    <div className="title">{city}</div>
                    <div className="">cloude</div>
                    <div className="temperature">20°</div>
                </div>
                <div className="information">
                    <div>Humid: 15</div>
                    <div>leki: 19</div>
                </div>
            </div>
        </div>
    )
}
export default Card;