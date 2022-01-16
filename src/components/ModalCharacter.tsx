import { Col, Divider, Image, List, Modal, Row } from 'antd'
import React from 'react'
import EpisodesGrid from './EpisodesGrid'

type propsType = {
  character: Character
  visible: boolean
  onCancel: () => void
}

function ModalCharacter({ character, visible, onCancel }: propsType) {
  return (
    <Modal
      title={character.name}
      centered
      visible={visible}
      onCancel={onCancel}
      footer={[]}
      width={1000}>
      <Row gutter={[16, 16]}>
        <Col md={{ span: 6 }} xs={{ span: 24 }}>
          <Image
            src={character.image}
            alt={character.name}
            style={{ width: '100%' }}
          />
        </Col>
        <Col md={{ span: 18 }} xs={{ span: 24 }}>
          <List itemLayout='horizontal'>
            <List.Item>
              <List.Item.Meta title={'Name'} description={character.name} />
            </List.Item>
            <List.Item>
              <List.Item.Meta title={'Status'} description={character.status} />
            </List.Item>
            <List.Item>
              <List.Item.Meta
                title={'Species'}
                description={character.species || 'None'}
              />
            </List.Item>
            <List.Item>
              <List.Item.Meta
                title={'Type'}
                description={character.type || 'None'}
              />
            </List.Item>
            <List.Item>
              <List.Item.Meta title={'Gender'} description={character.gender} />
            </List.Item>
            <List.Item>
              <List.Item.Meta
                title={'Origin'}
                description={character.origin.name}
              />
            </List.Item>
            <List.Item>
              <List.Item.Meta
                title={'Location'}
                description={character.location.name}
              />
            </List.Item>
          </List>
          <Divider orientation='left'>Episodies</Divider>
          <EpisodesGrid list={character.episode} />
        </Col>
      </Row>
    </Modal>
  )
}

export default ModalCharacter
