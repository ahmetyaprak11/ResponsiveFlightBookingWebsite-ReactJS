import React from "react";


// Icon import ediyoruz
import {BiCalendar} from 'react-icons/bi'
import { BsBookmarkCheck, BsShieldCheck } from "react-icons/bs";


const Info = () => {
    return (
        <div className="info section">
            <div className="infoContainer container">

                <div className="titleDiv flex">
                    <h2>Travel to make memories all around the world</h2>
                    <button className="btn">
                        View All
                    </button>
                </div>

                <div className="cardsDiv">

                    <div className="singleCard flex">
                        <div className="iconDiv flex">
                            <BiCalendar className="icon" />
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airliness from your phone and book a flight ticket!</p>
                    </div>

                    <div className="singleCard flex">
                        <div className="iconDiv flex colorOne">
                            <BsShieldCheck className="icon" />
                        </div>
                        <span className="cardTitle">Smart Checklist</span>
                        <p>You can also call airliness from your phone and book a flight ticket!</p>
                    </div>

                    <div className="singleCard flex">
                        <div className="iconDiv flex colorTwo">
                            <BsBookmarkCheck className="icon" />
                        </div>
                        <span className="cardTitle">Save more</span>
                        <p>You can also call airliness from your phone and book a flight ticket!</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Info