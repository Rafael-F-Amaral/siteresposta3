import ButtonMenu from '../../Button/ButtonMenu'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../imagensSITE/Logo.svg'
import './Menu.css'
import { Link } from 'react-router-dom';
import { Notification } from './IconsMenu/Notification';





function OffcanvasExample(props) {

  return (
    <nav style={{ backgroundColor: '#D4D3F6', boxShadow: '0 1px 10px gray' }}  >
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 ">
          <Container fluid className='MenuContainer '>
            <Navbar.Brand href="#" className='LogoContainer' style={{ marginRight: '0px' }} >
              <Link to='/'><img
                className='Logotype'
                src={Logo}
              />
              </Link>
            </Navbar.Brand>

            <div className='ContainerButtonMenu'>

              <div className='IconMenu'>
                <Notification />
              </div>


              <ButtonMenu
                ButtonRespostas='RESPOSTAS'
              />

            </div>

          </Container>
        </Navbar>
      ))}
    </nav>
  );
}

export default OffcanvasExample;