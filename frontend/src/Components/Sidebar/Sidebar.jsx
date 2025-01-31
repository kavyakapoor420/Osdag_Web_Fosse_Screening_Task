import SidebarButtons from "../SidebarButtons";
import './Sidebar.css'

const Sidebar=()=>{

    //function for user can select and go on page of Osdag(help,yt video tutorials,ask a question,design examples)
    const handleSelectChange=(e)=>{
        const selectedOptionVal=e.target.value ;

        if(selectedOptionVal==='1'){
            window.location.href="https://osdag.fossee.in/resources/videos";
        }else if(selectedOptionVal==='2'){
           window.location.href="https://www.youtube.com/channel/UCnSZ7EjhDwNi3eCPcSKpgJg";
        }else if(selectedOptionVal==='3'){
            window.location.href="file:///D:/Osdag_windows_installer_v2021.02.a.a12f/Osdag_windows_installer_v2021.02.a.a12f/Osdag/ResourceFiles/html_page/_build/html/index.html";
        }else if(selectedOptionVal==='4'){
            window.location.href="https://osdag.fossee.in/forum";
        }     
    }
    

    return(
        <>
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    <center>
                        <img src="./OsdagLogo.png" alt="logo" height='50px' width='50px' onClick={()=>navigate('/')}/>
                    </center>
                </div>
                
               <div className="sidebar-buttons">
                {/* button for connection  */}
                <div className="sidebar-buttons">
                <SidebarButtons label='Connection' route='/connection'/>
                </div>
                  {/* button for Tension Member  */}
                <div className="sidebar-buttons">
                <SidebarButtons label="Tension Member" route="/tensionMember" />
                </div>
                   {/* button for Compression Member  */}
                <div className="sidebar-buttons">
                <SidebarButtons label="Compression Member" route="/notAvailable" />
                </div>
                     {/* button fro Flexural Member  */}
                <div className="sidebar-buttons">
                <SidebarButtons label="Flexural Member" route="/notAvailable" />
                </div>
                {/* button for Beam-Column  */}
                <div className="sidebar-buttons">
                <SidebarButtons label="Beam-Column" route="/notAvailable" />
                </div>
                    {/* button for Plate Girder  */}
                <div className="sidebar-buttons">
                <SidebarButtons label="Plate Girder" route="/notAvailable" />
                </div>
                 {/* button for Truss  */}
                <div className="sidebar-buttons">
                <SidebarButtons label="Truss" route="/notAvailable" />
                </div>
                     {/* button for 2D Frame  */}
                <div className="sidebar-buttons">
                <SidebarButtons label="2D Frame" route="/notAvailable" />
                </div>
                 {/* button for 3D frame  */}
                <div className="sidebar-buttons">
                <SidebarButtons label="3D Frame" route="/notAvailable" />
                </div>
                 {/* button for  Group Design  */}
                <div className="sidebar-buttons">
                <SidebarButtons label="Group Design" route="/notAvailable" />  
                </div>                   
                 </div>
            </div>
            <div className="sidebar-settings">
                <select onChange={handleSelectChange}>
                    <option value={'1'}>Help</option>
                    <option value={'2'}>Video Tutorials</option>
                    <option value={'3'}>Design Examples</option>
                    <option value={'4'}>Ask Us a question</option>
                    {/* <option value={'5'}>Check For updates</option> */}
                </select>
            </div>
        </>
    )
}

export default Sidebar