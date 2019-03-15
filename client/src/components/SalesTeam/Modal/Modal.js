import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import "./Modal.css";

const SalesTeamModal = props => {

  const name = props.member ? props.member.name : "";
  const email = props.member ? props.member.email : "";
  const phone = props.member ? props.member.phone : "";
  const bio = props.member ? props.member.bio : "";
  const image = props.member ? props.member.image : "";
  console.log(props.member);

  return (

    <Modal
    
      open={props.open}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content image>
        <Image className="modalImageSize" src={image}/>
        <Modal.Description>
          <Header>{`${email} • ${phone}`}</Header>
          <p>
            {bio}
          </p>

        </Modal.Description>
      </Modal.Content>
      <Modal.Content style={{textAlign: "center"}}
       >
        <Button onClick={props.closeModal} className="seeAllWinesBtn" size='small'>
          <p className="seeAllWinesText">Close</p></Button>
      </Modal.Content>

    </Modal>
  )
}

export default SalesTeamModal;