import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const SalesTeamModal = () => (

  <Modal trigger={<Button>Bio</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/winesPouring.jpg' />
      <Modal.Description>
        <Header>Sales Team Profile</Header>
        <p>bio information for each team member goes here</p>
        <p>additional information for those who have two paragraphs</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default SalesTeamModal;