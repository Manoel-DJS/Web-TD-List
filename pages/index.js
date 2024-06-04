import Task from "@/components/Task";
import { useEffect, useState } from "react";

const App = () => {

    return(
        <> 
            <div className="container">

                <div className="dheader">
                    <text className="div-text" style={{color: "black"}}>
                        <strong>TODO LIST</strong>
                    </text >


                </div>

                <div className="dbody">


                </div>

            </div>
        <Task/>
        </>
    )
}



export default App;