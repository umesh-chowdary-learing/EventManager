import { SfcShell, SfcShellAppBar, SfcShellAppBarIcon, SfcShellLeftNav, SfcShellTopNav } from "@synerg/react-components";
import { useLocation } from "react-router-dom";
const HeaderCmp=({children})=>{
    const loc = useLocation();
    let Menu=[];
        Menu =[
            {title: "Event Manager", icon: "home", id:'event_manager', hash:"#/eventManagerPage"},
            {title: "Admin", icon: "home", id:'admin', hash:"#/adminPage"},
            {title: "User",icon:"home",id:'user',hash:"#/userPage"},
        ];
    
    
    return (
        <>
       <SfcShell emphasis="primary"> 
          <SfcShellAppBar size="large"
            slot="app-bar"
            loggedInUser={{}}
            onSfcSignout={{}} >
              Event Management System
            </SfcShellAppBar>
            <SfcShellTopNav slot="nav" menuProvider={Menu}

                onSfcShellLeftNavReady={(e) => {
                    let pathName = loc.pathname;
                    let activeMenu = Menu.filter((val) => {
                        if (val.id === pathName) {
                            return val;
                        }
                    });
                    
                    if (activeMenu.length > 0) e.target.activeItem = activeMenu[0];
                }}

            />
            {children}
     
       </SfcShell>
        </>
    )
}

export default HeaderCmp;