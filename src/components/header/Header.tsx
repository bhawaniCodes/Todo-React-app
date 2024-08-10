import React from "react";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="bg-gray-800 pt-2 m-auto flex items-center justify-around text-5xl shadow-sm">
           <Link to='/'><MdPlaylistAddCheckCircle color="white" size='40'/></Link>
           <Link to='/counter'><PiClockCounterClockwiseBold color="white" size='40'/></Link>
        </div>
    )
}

export default React.memo(Header)