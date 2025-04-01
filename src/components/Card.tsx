import { FC, ReactElement } from "react"

interface CardInterface  {
  type: "youtube" | "notion" | "twitter" | "instagram",
  title: string,
  Icons: {
    startIcon: ReactElement,
    shareIcon: ReactElement,
    deleteIcon: ReactElement,
  },
  content: FC,
  tags: string,
  date: string;

}

const titleStyle = "font-semibold text-lg"

const tagStyle = "bg-purple-300 p-1 rounded-md"

export function Card(props: CardInterface) {
  return <div className="flex justify-end">
        <div className=" p-8 bg-white rounded-md border-gray-100  border text-black">
        <div> 
          <div className="flex gap-6 ">
            <div>{props.Icons.startIcon}</div>
            <div className={titleStyle}>{props.title}</div>
            <div className="flex gap-4 ml-auto">
            <div>{props.Icons.shareIcon}</div>
            <div>{props.Icons.deleteIcon}</div>
            </div>
          </div>
        
              <div className="mt-5 h-[260px]">{props.content}</div> 
              <span className= {tagStyle} >{`#${props.tags}`}</span>
              <div className="mt-3">{props.date}</div>
     
        </div>
        </div>
  </div>
}

export default Card