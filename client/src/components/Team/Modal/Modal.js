import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const SalesTeamModal = () => (
  <Modal trigger={<Button>Read Bio</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Sales Team Profile</Header>
        <p>bio information for each team member goes here</p>
        <p>additional information for those who have two paragraphs</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default SalesTeamModal;