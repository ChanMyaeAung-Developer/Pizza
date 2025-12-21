
import { NavLink } from "react-router-dom";


const Sidebar = () => {


  const menuItems = [
    {
      label: "Home",
      to: "/",
   
    },

    {
      label: "Contact",
      to: "/Contact",
     
    },
    {
      label: "List",
      to: "/hello",
   
    },
  ];
 



  return (
    <div
      className=" bg-blue-900 text-white  justify-between flex flex-col h-screen w-60 "
        
    >
      <div className="flex flex-col">

     


        <nav className="space-y-4 px-4 mt-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 
     ${isActive
                  ? "bg-gradient-to-r from-white/20 to-white/10 text-yellow-300 font-bold shadow-inner"
                  : "text-white hover:text-yellow-200 hover:bg-white/10"}`
              }

            >
             
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      


    </div>
  );
};

export default Sidebar;
