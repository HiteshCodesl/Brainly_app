export function Sidebar() {
  return (
    <div className=" bg-white w-72 h-screen  gap-6 border border-r fixed left-0  ">
        <div className="text-3xl font-bold my-8 ml-10 text-black"><i className="ri-brain-2-line text-violet-800"></i> Second Brain</div>
        <div className="flex flex-col gap-8 font-normal ml-20 text-xl ">
       
    <div><i className="ri-twitter-line m-3 text-2xl "></i>Tweets</div>
    <div><i className="ri-youtube-line m-3"></i>Videos</div>
    <div><i className="ri-file-text-line m-3"></i>Documents</div>
    <div><i className="ri-link m-3"></i>Links</div>
    <div><i className="ri-hashtag m-3"></i>Tags</div>
            
        </div>
     </div>
 
  )
}


