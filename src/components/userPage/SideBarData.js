import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Home from '../../pages/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const SideBarData = [
    {
        title: "Favorite Books",
        icon: <FavoriteBorderIcon />,
        link: "user/favorite"
    },

    {
        title: "My Library",
        icon: <LibraryBooksIcon />,
        link: "user/library"
    },
    {
        title: "Update Profile",
        icon: <AccountCircleIcon />,
        link: "user/update"
    }


]