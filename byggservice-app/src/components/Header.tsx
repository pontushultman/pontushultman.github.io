import styled from 'styled-components'
import { Ul, MenuToggle, Navbar } from './HeaderStyles';
import '../App.css';
import image from "../assets/images/original.png"


const Logo = styled.div`
  font-size: 30px;
  color: white;

`

const Div = styled.div`
  justify-content: center;
  align-items: center;
  display: block;
  margin-top: 400px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    color: white;
  }

  h2 {
    color: white;
  }

`

function Header() {
    return (
        <div id="background-image">
        <nav role="navigation">
        <div id="menuToggle">
         
          <input type="checkbox" />
          
          <span></span>
          <span></span>
          <span></span>

          
          
          <ul id="menu">
            <a href="#home"><li>Om oss</li></a>
            <a href="#services"><li>Våra tjänster</li></a>
            <a href="#work"><li>Tidigare arbeten</li></a>
            <a href="#contact"><li>Kontakt</li></a>
          </ul>
        </div>
      </nav>
      <Logo> Logga här</Logo>
      <Div> 
        <h1> Bygg- och snickeriarbeten Teknisk konsultation inom byggbranschen</h1>
      </Div>
      </div>
      
    )
}

export default Header;