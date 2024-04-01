import { useState } from "react"
import pic1 from "../asates/team-04.jpg" 
// import pic2 from "../asates/WhatsApp Image 2024-01-04 at 23.13.00_a848cc09.jpg" 
import pic3 from "../asates/team-05.png" 
import pic4 from "../asates/team-06.png" 
import pic5 from "../asates/team-07.jpg"
import pic6 from "../asates/team-08.jpg"
// import pic7 from "../asates/3.jpg"
// import pic8 from "../asates/4.jpg"

const Slider = ()=> {
    const [counter, setcounter] = useState(0) 
    const [slider,setslider] =useState([
        {pic:pic1, id:0,},
        // {pic:pic2,},
        {pic:pic3,id:1,},
        {pic:pic4, id:2,},
        {pic:pic5, id:3,},
        {pic:pic6 , id:4,},
        // {pic:pic7 , id:5,},
        // {pic:pic8 , id:6,},
    ]);
    console.log(slider)
    const [index,setindex] = useState(0)
    const sliderlist = slider.map((el,idx)=>{
        return(
            <>
            <div className="container"> 
          <img src={el.pic} className={idx === counter ? "active" : "not"}/>
          {/* <div className="list">

          <ul><li onClick={()=>hadellis(el.id)}>{el.id + 1}</li></ul>
          </div> */}
          </div>
          {/* <div className="list">
          <ul><li onClick={()=>hadellis(el.id)}>{el.id + 1}</li></ul> 
          </div> */}
         
          </>
          
          
          

        )
    })
    const lists = slider.map((el,idx)=>{
        return(
            <>
            <ul  >
            <li onClick={()=>hadellis(el.id)} className={`${el.id === counter ? "color" : "no"} `} >{el.id + 1}</li>
            </ul>
            </>
        )
        
    })
    const hadellis =(id)=>{
       console.log(id)
       setcounter(id)
        slider.map((el,idx)=>{
            return(
               <div>
              <img src={el.pic} className={idx === counter ? "active" : "not"}/>
              </div>
              
              
    
            )
        })
       

    }

    
   
    const handelincrease = ()=>{
        if(counter !== slider.length - 1){
        setcounter( (c)=> c + 1)
        }
        else if(counter === slider.length - 1){
            console.log(counter)

        }
    }
    const handeldecrese = ()=>{
        if(counter !== 0){
        setcounter ( (c)=>c - 1)
        console.log(counter)
        }
        // else{
          
        // }
    }

    return(
        <>
        <div className="container">
            
                {/* <img src={slider.pic1} /> */}
                <div className="card"> {sliderlist } </div>
                <div className="counter">{` slide #${ counter + 1} of 5 `}</div>
          
          
            <div className="buttons">
                <button className= { ` increase ${ counter === slider.length - 1 ? "dis" : "act"}  `}  onClick={handelincrease} >next</button>
                <div className="hee"> {lists} </div>
                <button className={`decrease ${ counter ===  0 ? "dis" : "act"} `}  onClick={handeldecrese} >previous</button>

            </div> 
           
        </div>
       {/* <div className="hee"> {lists} </div> */}
 
        </>
    )
}
export default Slider;