import React from 'react';
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import ws from '../../media/ws.png';
import mp from '../../media/mp.jpg';
import coding from '../../media/coding.jpg';


const TeamList = (props) => {
    return (
        <div className="container">
            <br />
            <h1 className="h1">Basic Services</h1>
            <hr className="heading-horizon" />
            <br />
            <ListGroup className="team" flush>
                <ListGroupItem>
                    <Media>
                        <Media className="profile-pic" left>
                            <Media className="Media" object src={ws} height="64px" alt="Siya's Profile Photo" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Workshops
                            </Media>
                            <h5>Business Lunch Workshops.</h5>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Assumenda omnis dolore amet harum delectus ut, incidunt expedita,
                            cum modi deserunt porro saepe. Minima perferendis sapiente repellendus necessitatibus, eius enim? Aspernatur.
                        </Media>
                    </Media>
                </ListGroupItem>
                <ListGroupItem>
                    <Media>
                        <Media className="profile-pic" left>
                            <Media className="Media" object src={ws} height="64px" alt="Themba's Profile Photo" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Workshops
                            </Media>
                            <h5>Business Lunch Workshops.</h5>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Assumenda omnis dolore amet harum delectus ut, incidunt expedita,
                            cum modi deserunt porro saepe. Minima perferendis sapiente repellendus necessitatibus, eius enim? Aspernatur.
                        </Media>
                    </Media>
                </ListGroupItem>
                <ListGroupItem>
                    <Media>
                        <Media className="profile-pic" left>
                            <Media className="Media" object src={ws} height="64px" alt="Lolito's Profile Photo" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Workshops
                            </Media>
                            <h5>Business Lunch Workshops.</h5>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Assumenda omnis dolore amet harum delectus ut, incidunt expedita,
                            cum modi deserunt porro saepe. Minima perferendis sapiente repellendus necessitatibus, eius enim? Aspernatur.
                        </Media>
                    </Media>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default TeamList;