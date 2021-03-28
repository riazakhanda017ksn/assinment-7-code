import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './component/Player/Player';
import SelectPlayer from './component/SelectPlayer/SelectPlayer';
const App = () => {
  const [players, setPlayer] = useState([])
  useEffect(() => {
    fetch('https://api.mocki.io/v1/c90b3c78')
      .then(res => res.json())
      .then(data => setPlayer(data))
  }, [])

  const [select, setSelect]=useState([])

  const selectPlayer=(player)=>{

    const addCount=[...select,player]
    setSelect(addCount)
  }
  return (
    <div>
      <div className="header">
        <div className="header-logo"><FontAwesomeIcon icon={faUsers} /></div>
        <div className="header-menu">
          <ul>
            <li>
              <a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Players</a></li>
          </ul>
        </div>
        <div className="header-button">
          <a href="">View More</a>
        </div>
      </div>
      <div className="banner-image">
        <div className="banner-img-title">

          <h1>join us and make your own team <br />  with us</h1>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laboriosam fugit et
          aliquam maiores quaerat nostrum in quos impedit ex quibusdam voluptatibus magni ullam,
          cumque eum! Aspernatur nobis necessitatibus dignissimos quis eius placeat debitis nulla ea velit?
          Quis, vero! Quod nemo molestiae consequuntur dolor minima, ea aspernatur molestias, deserunt autem
          temporibus qui debitis doloremque optio aliquid enim, ducimus perferendis provident dolorem sint velit!
         .</p>
          <div className="header-button button-extra-edit">
            <a href="">View More</a>
          </div>
        </div>

      </div>


      <Container fluid>
        <Row>
          <Col>
            <> 
             <div className="Api-section">
              <h1>Here Our Team</h1>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta asperiores repellendus non voluptatem.
              Molestias cum sint consequatur alias eius autem, enim voluptatibus sunt iusto architecto quam eum aut ducimus aliquam.</p>

            </div>
            
            </>

          </Col>
        </Row>
      </Container>

   {/* here is main section */}
   <Container fluid>
  <Row>
    <Col>
    <>
    <div className='Data-Show'>
        <div className="players-show-place">
           <h4>Our Total Football Team - {players.length}</h4>
            
            {
             players.map(player=><Player player={player} selectPlayer={selectPlayer} ></Player>)
           }
      
        </div>
        <div className='hired-player-area'>
         
         <h4> Select Player For Your Game -</h4>

          <SelectPlayer select={select} ></SelectPlayer>
          
        </div>
        <div>
        </div>
      </div>
    </>
    </Col>
  </Row>
</Container>
    <div className="footer">
      <p><code>all rights are reserved by riaz - 2021</code></p>
    </div>
    </div>
  );
};

export default App;
