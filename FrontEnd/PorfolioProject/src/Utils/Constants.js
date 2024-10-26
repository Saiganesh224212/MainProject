import userimage from '../resources/images/userimage.JPG'
import { CodeRounded, ContactPageRounded, FacebookRounded, HomeRounded, SchoolRounded } from "@mui/icons-material";

export const userProfileDefaultData={
    "Name"      :"Sai Ganesh",
    "UserName"  :"sai_ganesh224212",
    "DOB"       :"03-10-2024",
    "Address"   :"MDH",
    "EmailID"   :"12b18saiganesh@gmail.com",
    "PhoneNo"   :"8668070230",
    "Description":"I'm a Computer Science Student",
    "Photo"     : userimage
}

export const IconTitleMap={
    "Home": <HomeRounded className="icon"/>,
    "Academics": <SchoolRounded className="icon"/>,
    "Projects": <CodeRounded className="icon"/>,
    "Social Profiles": <FacebookRounded className="icon"/>,
    "Resume": <ContactPageRounded className="icon"/>
}

export const DEFAULT_SIDE_MENU=[
    {
        "title": "Home",
        "icon":  IconTitleMap.Home,
        "link": "/home"
    },
    {
        "title": "Academics",
        "icon": IconTitleMap.Academics,
        "link": "/academics"
    },
    {
        "title": "Projects",
        "icon": IconTitleMap.Projects,
        "link": "/projects"
    },
    {
        "title": "Social Profiles",
        "icon": IconTitleMap["Social Profiles"],
        "link": "/social-profile"
    },
    {
        "title": "Resume",
        "icon": IconTitleMap.Resume,
        "link": "/resume"
    }
]


export const DEFAULT_DRAWER_FLAG= true;
export const DEFAULT_ACTIVE_PAGE= DEFAULT_SIDE_MENU[0].title

export const drawerWidth = 300;


export const DarkTheme              = "dark"
export const LightTheme             = "light"
