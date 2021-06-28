import React from 'react';
import *as FaIcons from "react-icons/fa";
import *as AiIcons from "react-icons/ai"; 
import *as MdIcons from "react-icons/md";


export const SidebarData = [  
    {
        title: 'Subscriber',
        path: '/subscriber',
        icon: <MdIcons.MdSubscriptions/>,
        cName: 'nav-text'
    },
    {
        title: 'Premium',
        path: '/premium',
        icon: <AiIcons.AiFillTag />,
        cName: 'nav-text'
    },{
        title: 'Live Stremming',
        path: '/liveStremming',
        icon: <FaIcons.FaWifi />,
        cName: 'nav-text'
    },{
        title: 'Channel',
        path: '/channel',
        icon: <AiIcons.AiOutlineFundProjectionScreen />,
        cName: 'nav-text'
    },{
        title: 'Music',
        path: '/music',
        icon: <FaIcons.FaMusic />,
        cName: 'nav-text'
    },{
        title: 'Sports',
        path: '/sports',
        icon: <FaIcons.FaRunning />,
        cName: 'nav-text'
    },{
        title: 'Trending',
        path: '/trending',
        icon: <AiIcons.AiFillFire />,
        cName: 'nav-text'
    },{
        title: 'Library',
        path: '/library',
        icon: <MdIcons.MdLibraryMusic />,
        cName: 'nav-text'
    },{
        title: 'User Account',
        path: '/UserAccounts',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'
    }
]