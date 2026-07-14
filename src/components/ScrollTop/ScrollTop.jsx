import "./ScrollTop.css";
import { useEffect, useState } from "react";

function ScrollTop(){

    const [visible,setVisible]=useState(false);

    useEffect(()=>{

        const toggle=()=>{

            if(window.scrollY>400){
                setVisible(true);
            }else{
                setVisible(false);
            }

        }

        window.addEventListener("scroll",toggle);

        return ()=>window.removeEventListener("scroll",toggle);

    },[]);

    const top=()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

    return(

        visible &&

        <button className="scrollTop" onClick={top}>
            ↑
        </button>

    )

}

export default ScrollTop;