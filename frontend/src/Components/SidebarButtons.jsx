import { useNavigate } from "react-router-dom"


const SidebarButtons = ({label,route}) => {

    const navigate=useNavigate()

  return (
    <div>
        <div className="sidebar-item">
          <button onClick={()=>navigate(route)}>{label}</button>
        </div>
    </div>
  )
}

export default SidebarButtons