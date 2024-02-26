import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./components/firebase-config";

const getMenuItems = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Research',
      url: 'research',
        },
    {
        title: 'Analytics',
        url: 'predictionform',
    },
    {
      title: 'Chat',
      url: 'chat',
    },
      
      
        {
          title: 'Blogs',
          url: 'blogs',
        },
    
    {
      title: 'Contact',
      submenu: [
        {
          title: 'About Us',
          url: 'volunteer',
        },
        {
          title: 'Contact Us',
          url: 'contact',
        },
        
      ],
    },
  ];

  return menuItems;
};

export default getMenuItems;
