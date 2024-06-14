import Task from "@/components/Task";
import ListTask from "@/components/ListTask";
import { useEffect, useState } from "react";

const App = () => {

    return(
        <> 
            <title>To Do List</title>
            <div className="container">

                <div className="div-header">
                    <text className="div-text" style={{color: "black"}}>
                        <strong>TODO LIST</strong>
                    </text >

                </div>

                <div className="div-body">

                <ListTask/>

                </div>


            </div>
        </>
    )
}



export default App;