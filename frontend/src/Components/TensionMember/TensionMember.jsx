import './TensionMember.css'


const TensionMember = () => {
  return (
    <div>
        <div className="content-tabs">
            <center><h2>Tension Member</h2></center>
            <hr />
            <div className="conn-grid-container">
                <div className="conn-grid-item">
                     <input type="radio" value='Fin_Plate' name="shear-conn"/>
                     <b>Bolted To End Gusst</b>
                     <br/>
                     <img src="./TensionMemberBeg.png" alt="" />
                </div>
                <div className="conn-grid-item">
                <input type="radio" value='Cheat_Angle' name="shear-conn"/>
                     <b>Welded to End Gusst</b>
                     <br/>
                     <img src="./TensionMemberWeg.png" alt="" />
                </div>
                <center>
                    <div className="conn-btn">
                        <button>Start</button>
                    </div>
                </center>
            </div>
        </div>
    </div>
  )
}

export default TensionMember