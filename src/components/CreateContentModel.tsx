import { useRef } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import axios from "axios";

export function CreateContentModel({open, onClose}) {
  const titleRef = useRef();
  const linkRef = useRef();
  
  const handlerFunction = async() =>{

    const title = titleRef.current.value;
    const link = linkRef.current.value;

    await axios.post("http://localhost:3000/user/content", {
        title,
        link
    })
  }
  return (
    open && <div className="top-0 h-screen w-screen bg-slate-300 opacity-90 fixed left-0 flex justify-center ">

        <div className="flex flex-col justify-center  "> 
    
            <span className=" p-8 bg-white opacity-100">
                <div className="flex justify-end mb-3">
                <div onClick={onClose}>
                   <CrossIcon  />
                </div>
                </div>
                <div className="flex gap-3">
                    <input ref={titleRef} className="p-3  border border-black" type="text" placeholder="Enter a Title" />
                    <input ref={linkRef} className="p-3  border border-black" placeholder="Enter a Link" type="text" />
                    </div>

                    <div className="flex p-3 justify-center cursor-pointer">
                    <Button  variant="secondary" text="Submit" size="md"/>
                    </div>

               </span>
        </div>
    </div>
  )
}

export default CreateContentModel
