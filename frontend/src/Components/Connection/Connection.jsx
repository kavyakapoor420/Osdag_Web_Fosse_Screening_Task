import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Connection.css'

const Connection = () => {

      const [toggleState,setToggleState]=useState(1)
      const [subToggleState,setSubToggleState]=useState(1)


      const toggleTab=(indx)=>{
        setToggleState(indx)
      }
      const subToggleTab=(indx)=>{
        setSubToggleState(indx)
      }

      const navigate=useNavigate()



  return (
    <div className="container">
    <div className="bloc-tabs">
      <button
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(1)}
      >
        Shear Connection
      </button>
      <button
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}
      >
        Moment Connection 
      </button>
      <button
        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(3)}
      >
        Base Plate 
      </button>
      <button
        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(4)}
      >
        Truss Connection 
      </button>
    </div>

    <div className="content-tabs">
      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <center><h2> Shear Connection</h2></center>
        <hr />
          <div className='conn-grid-container'>
            <div className='conn-grid-item'><input type="radio" value="Fin_Plate" name="shear-conn"></input><b>Fin Plate</b><br/><img src={sc1}/></div> 
            <div className='conn-grid-item'><input type="radio" value="Cheat_Angle" name="shear-conn" /><b>Cleat Angle</b><br/> <img src={sc2}/></div>
            <div className='conn-grid-item'><input type="radio" value="End_Plate" name="shear-conn" /><b>End Plate</b><br/> <img src={sc3}/></div>
            <div className='conn-grid-item'><input type="radio" value="Seated_Angle" name="shear-conn" /><b>Seated Angle</b><br/> <img src={sc4}/></div>
          </div>
          <center><div className='conn-btn'><button onClick={()=>navigate("/connection/finplate")}>Start</button></div></center>
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        {/* +++++++++++++++++++ */}
          <div className="container">
    <div className="bloc-tabs">
      <button
        className={subtoggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => subtoggleTab(1)}
      >
        Beam-to-Beam Splice
      </button>
      <button
        className={subtoggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => subtoggleTab(2)}
      >
        Beam-to-Column
      </button>
      <button
        className={subtoggleState === 3 ? "tabs active-tabs" : "tabs"}
        onClick={() => subtoggleTab(3)}
      >
        Column-to-Column Splice
      </button>
      <button
        className={subtoggleState === 4 ? "tabs active-tabs" : "tabs"}
        onClick={() => subtoggleTab(4)}
      >
        PEB
      </button>
    </div>

    <div className="content-tabs">
      <div
        className={subtoggleState === 1 ? "content  active-content" : "content"}
      >
        <center><h2>Beam-to-Beam Splice</h2></center>
        <hr />
        <div className='conn-grid-container'>
            <div className='conn-grid-item'><input type="radio" value="Fin_Plate" name="shear-conn"></input><b>Cover Plate Bolted</b><br/><img src={mcbb1}/></div> 
            <div className='conn-grid-item'><input type="radio" value="Cheat_Angle" name="shear-conn" /><b>Cover Plate Welded</b><br/> <img src={mcbb2}/></div>
            <div className='conn-grid-item'><input type="radio" value="Seated_Angle" name="shear-conn" /><b>End Plate</b><br/> <img src={mcbb3}/></div>
          </div>
          <center><div className='conn-btn'><button>Start</button></div></center>
      </div>

      <div
        className={subtoggleState === 2 ? "content  active-content" : "content"}
      >
        <center><h2>Beam-to-Column</h2></center>
        <hr />
        <div className='conn-grid-container'>
            <div className='conn-grid-item solo-item' ><input type="radio" value="Fin_Plate" name="shear-conn"></input><b>Cover Plate Bolted</b><br/><img src={mcbc1}/></div> 
          </div>
          <center><div className='conn-btn'><button>Start</button></div></center>
      </div>
      <div
        className={subtoggleState === 3 ? "content  active-content" : "content"}
      >
        <center><h2>Column-to-Column Spice</h2></center>
        <hr />
        <div className='conn-grid-container'>
            <div className='conn-grid-item'><input type="radio" value="Fin_Plate" name="shear-conn"></input><b>Cover Plate Bolted</b><br/><img src={mccc1}/></div> 
            <div className='conn-grid-item'><input type="radio" value="Cheat_Angle" name="shear-conn" /><b>Cover Plate Welded</b><br/> <img src={mccc2}/></div>
            <div className='conn-grid-item'><input type="radio" value="Seated_Angle" name="shear-conn" /><b>End Plate</b><br/> <img src={mccc3}/></div>
          </div>
          <center><div className='conn-btn'><button>Start</button></div></center>
      </div>
      <div
        className={subtoggleState === 4 ? "content  active-content" : "content"}
      >
        <center><h2>PEB</h2></center>
        <hr />
        <p>
          This Model is currently under Development !!!
        </p>
      </div>
    </div>
  </div>
      </div>
      <div
        className={toggleState === 3 ? "content  active-content" : "content"}
      >
        <center><h2>Base Plate</h2></center>
        <hr />
        <div className='conn-grid-container'>
            <div className='conn-grid-item'><input type="radio" value="Fin_Plate" name="shear-conn"></input><b>Base Plate Connection</b><br/><img src={bp1}/></div> 
        
          </div>
          <center><div className='conn-btn'><button>Start</button></div></center>
      </div>
      <div
        className={toggleState === 4 ? "content  active-content" : "content"}
      >
        <center><h2>Truss Connection</h2></center>
        <hr />
        <p>
          
          This Model is currently under Development !!!
        </p>
      </div>
    </div>
  </div>
  )
}

export default Connection