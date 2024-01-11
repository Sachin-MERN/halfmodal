import { useEffect } from "react"

const ShowModal = ({CloseModal})=>{
    useEffect(()=>{
        document.body.style.overflowY = "hidden";
        // when modal is on that time scroll will hide
        return()=>{
            document.body.style.overflowY = "scroll";
            // this is our clean up function
        }
    },[])// now you can say it as (componentDidMount )
    return(
        <>
        <div className="position: fixed top-0 right-0 left-0 bottom-0 bg-transparent"onClick = {CloseModal}></div>
        <div className="Modal-Container px-6 py-3 rounded-lg ">
         <h2>STAY STUNED</h2>

         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, optio. Recusandae magni ullam maxime ad non maiores natus necessitatibus nesciunt eligendi quaerat mollitia hic ab delectus, ratione repudiandae ea consequuntur.</p>
          <button className='border mt-3 hover:bg-orange-500 hover:text-black py-2 px-2 bg-slate-600 rounded-xl text-white font-extrabold 'onClick={CloseModal}>Accept It</button>
          </div>
        </>
    )
} 
export default ShowModal