
import { useState } from 'react';
import './App.css'

import { Button } from './components/Button'
import Card from './components/Card';
import DeleteIcon from './icons/DeleteIcon';
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon';
import { StartIcon } from './icons/StartIcon';
import CreateContentModel from './components/CreateContentModel';
import { Sidebar } from './components/Sidebar';

function App() {
const [modelOpen, setModelOpen] = useState(null)
return(
<div>
  <div className=' flex ml-auto justify-end'>
  
  <Sidebar />
  <CreateContentModel  open={modelOpen} onClose={() =>{
       setModelOpen(false)
    }} />

<Button 
variant= {'secondary'}
 startIcon={<ShareIcon size={"sm"} />} 
 size="md" 
 text="share Brain">
 </Button>

<Button onClick={()=>{
   setModelOpen(true)
}}
variant= {'primary'}
 startIcon={<PlusIcon size={"md"} />} 
 size="md" 
 text="Add content">
 </Button>
 </div>
 
 <div className='flex ml-80 -mt-12'>
<span className="text-3xl font-bold">All Notes</span>
</div>

<div className='flex mt-7 ml-80 gap-3 '>

<Card
Icons={{
 startIcon: <StartIcon />,
 shareIcon: <ShareIcon  size={"md"}/>,
 deleteIcon: <DeleteIcon />
}}
content = {
<iframe
 src="https://www.youtube.com/embed/X8BYu3dMKf0?si=-_-7nV1CflPSK2iV" 
 title="YouTube video player" 
 frameborder="0" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
}
 title = "Web Development"
 type = "youtube"
 tags= "productive"
 date='created at 31/03/2025'
/>
<Card 
Icons={{
  startIcon: <StartIcon />,
  shareIcon: <ShareIcon  size={"md"}/>,
  deleteIcon: <DeleteIcon />
 }}
 content ={
  <div>
 <blockquote className="twitter-tweet ">
  <a href="https://twitter.com/username/status/807811447862468608"></a> 
</blockquote>
  </div>
}
  title = "Twitter"
  type = "youtube"
  tags= "Sports"
  date='created at 31/03/2025'
  />
</div>
</div>

  )  
}

export default App;
