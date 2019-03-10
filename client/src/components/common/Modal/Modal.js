import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const SalesTeamModal; = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Profile Image</Header>
        <p>teams.json</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default SalesTeamModal;