import { NavLink } from "react-router-dom";
export function Navbar(){

    const navBarStyles = ({isActive})=>{
        return {
          fontWeight: isActive ? 'bold' : "normal",
          color: isActive ? "red" : "blue",
          opacity: isActive ? "1" : "0.5",
          textDecoration: isActive ? "none" : "underline"
        }
    }
    return(
        <nav className="nav" id="container">
           <NavLink style={navBarStyles} to='/'>Home</NavLink>
           <NavLink style={navBarStyles} to='/about'>About</NavLink>
           <NavLink style={navBarStyles} to='/products'>Products</NavLink>
        </nav>
    );
}