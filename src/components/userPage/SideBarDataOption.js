import React from 'react'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Home from '../../pages/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const SideBarDataOption = [
    {
        title: "Settings",
        icon: <SettingsApplicationsIcon />,
        link: "user/settings"
    },

    {
        title: "Log out",
        icon: <LogoutIcon />,
        link: "user/logout"
    },
    


]