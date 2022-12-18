import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Home from '../../pages/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const SideBarData = [
    {
        title: "My Profile",
        icon: <AccountCircleIcon />,
        link: "/user/profile"
    },
    {
        title: "Favorite Books",
        icon: <FavoriteBorderIcon />,
        link: "/user/favorite"
    },

    {
        title: "My Library",
        icon: <LibraryBooksIcon />,
        link: "/user/library"
    },
    {
        title: "Update Profile",
        icon: <SyncAltIcon />,
        link: "/user/update"
    }


]