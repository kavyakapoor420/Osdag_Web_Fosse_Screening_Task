import { useEffect, useState } from "react"
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const FinPlate = () => {

    const [data,setData]=useState([])
    const [values,setValues]=useState({
        DesignName:'',PhotoFileName:''
    })
    
    const fetchDesign=async()=>{
        try{
            //url of backend fetch the design from backend  http://127.0.0.1:3000/design
            const res=await axios.get('http://127.0.0.1:3000/design')
        }catch(err){
            console.error('error fetching the data',err)
        }
    }
    // const postData=async(values)=>{
    //     try{
    //         const res=await axios.post('http://localhost:5173/design',
    //         {
    //             DesignName:values.DesignName,PhotoFileName:values.PhotoFileName
    //         },
    //         {
    //             headers:{
    //                 Accept:'application/json',
    //                 "Content-Type":'application/json'
    //             }
    //         }
    //     )
    //     return res.data

    //     }catch(err){
    //        console.error('error in posting the data',err)
    //        throw err 
    //     }
    // }
    const savedata=async()=>{
        if(values.DesignName=="" && values.PhotoFileName==""){
            toast.warn('pleaser enter some data',{position:'top-right',autoClose:3000,hideProgressBar:false,closeOnClick:true,pauseOnHover:true,draggable:true,progress:undefined,theme:'light'})
            return 
        }
       fetch('http://127.0.0.1:3000//design',{
        method:"POST",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            DesignName:values.DesignName,
            PhotoFileName:values.PhotoFileName
        })
       }).then((res)=>res.json())

        fetchDesign()

        toast.success('Data saved sucessfully',{postion:'top-right',autoClose:3000,theme:'light',hideProgressBar:false,closeOnClick:true,pauseOnHover:true,draggable:true,progress:undefined})

        setValues.DesignName("")
        setValues.PhotoFileName("")
    }
    useEffect(()=>{
        
        fetchDesign()
    },[])
    
  return (
    <>
        <div>
            <div className="moduleNavbar">
                <div>File</div>
                <div>Edit</div>
                <div>Graphics</div>
                <div>Database</div>
                <div>Help</div>
            </div>
            {/* i have replaced superMainBody with mainContainer  */}
            <div className="mainContainer">
                {/* left section of main container  */}
                 <div className="leftContainer">
                    <h1>Connecting Members</h1>
                    <div className="leftSectionChild">
                        <h2>Connectivity</h2>
                    </div>
                    <div>
                        <select style={{width:'200px'}}>
                            <option value={"CFBW"}>Column Flange-Beam Web</option>
                            <option value={"CWBW"}>Column web-Beam Web</option>
                            <option value={"BB"}>Beam-Beam</option>      
                        </select>
                    </div>
                    <div>
                        <img src="./ShearConnectionImage1.png" alt="" height='100px' width='100px'/>
                    </div>
                    <div className="leftSectionChild">
                        <h4>Primary Beam</h4>
                        <select style={{width:'200px'}}>
                            <option value={'CFBW'}>Select Section</option>
                            <option value={'CFBW'}>JB 150</option>
                            <option value={'CFBW'}>JB 175</option>
                            <option value={'CFBW'}>JB 200</option>
                            <option value={'CFBW'}>JB 225</option>
                        </select>
                    </div>
                    <div className="leftSectionChild">
                        <h4>Secondary Beam </h4>
                        <select style={{width:'200px'}}>
                            <option value={'CFBW'}>Select Section</option>
                            <option value={'CFBW'}>JB 150</option>
                            <option value={'CFBW'}>JB 175</option>
                            <option value={'CFBW'}>JB 200</option>
                            <option value={'CFBW'}>JB 225</option>
                        </select>
                    </div>
                    <div className="leftSectionChild">
                        <select style={{width:'200px'}}>
                            <option value={'CFBW'}>{`E 165 (Fe 290)`}</option>
                            <option value={'CFBW'}>{`E 250 (Fe 410 W)`}A</option>
                            <option value={'BB'}>{`E 250 (Fe 410 W)`}B</option>
                            <option value={'BB'}>{`E 250 (Fe 410 W)`}C</option>
                            <option value={'BB'}>{`E 300 (Fe 440)`}</option>
                        </select>
                    </div>
                 </div>
                 <div className="middleConatiner">
                   <div className="middleSection">
                      <img src="./ShearConnectionImage2.png" height='400px' width='400px'/>
                      <br />
                   </div>
                   <ul>
                    <select name="" size='5'>
                        {
                            data.map((item)=>{
                                <option key={item.DesignId} value={item.DesignName}>
                                    Save Name : File Name :{item.PhotoFileName}
                                </option>
                            })
                        }
                    </select>
                   </ul>
                   <div></div>
                   <div className="rightContainer">
                    {/* input for file name  */}
                       <div>
                          <lable>Enter File Name</lable>
                          <input name="fileName" value={values.DesignName} onChange={(e)=>setValues((prevVal)=>({...prevVal,DesignName:e.target.value}))}/>
                       </div>
                       <div>
                        {/* input for taking file from user */}
                        <input type="file" name='fileName' value={valus.PhotoFilenam} onChange={(e)=>setValues((prevVal)=>({...prevVal,PhotoFilename:e.target.value}))}/>
                       </div>
                       <div>
                            <label>Property Classes :</label>
                            <Input type="text" name="fileName" disabled/>
                        </div>
                        <div>
                            <label>Shared Capacity :</label>
                            <Input type="text" name="fileName" disabled/>
                        </div>
                        <div>
                             <label>Bering Capacity :</label>
                             <Input type="text" name="fileName" disabled/>
                        </div>

                         <div>
                            <label>Bolt ColumnsNo :</label>
                            <Input type="text" name="fileName" disabled/>
                        </div>
                        <input type="button" value='Submit' onClick={savedata}/>
                   </div>
                 </div>
                 <ToastContainer/>
            </div>
        </div>
        
    </>
  )
}

export default FinPlate