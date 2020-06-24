import React from 'react';
import './CSS/Menu.css';
import Menu from './Menu';


const Main = ({
    title="My Title",
    description="My description",
    className="container-lg",    
    children,
}) => {
  return (
    <div>        
     <Menu /> 
     <div className={className} >
        {children}
      </div>
    </div>
  );
}

export default Main;
