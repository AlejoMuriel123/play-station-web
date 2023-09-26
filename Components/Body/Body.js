import React from "react";
import Body1_3 from "./Body 1_3/Body1_3";
import Body4_5 from "./Body4_5/Body4_5";
import Body5_6 from "./Body5_6/Body5_6";
import Body6 from "./Body5_6/Body6";
import Body9 from "./Body7_9/Body9";

const Body = function()
{
    return(
        <div className="divBody">
            <Body1_3/>
            <Body4_5/>
            <Body5_6/>
            <Body6/>
            <Body9/>
        </div>
    );
}

export default Body;