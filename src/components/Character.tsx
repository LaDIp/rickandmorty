import React from 'react'
import { Badge, List, Avatar, Button } from 'antd'

type propTypes = Character & {
  onClick: (id: number) => void
}

function Character({ id, name, image, status, onClick }: propTypes) {
  const badgeStatus =
    status === 'Alive' ? 'success' : status === 'Dead' ? 'error' : 'warning'

  const handleClick = () => {
    onClick(id)
  }

  return (
    <List.Item
      actions={[
        <Button key={`${id}_loadmore`} type='primary' onClick={handleClick}>
          Load more
        </Button>,
      ]}>
      <List.Item.Meta
        avatar={<Avatar src={image} size={50} />}
        title={name}
        description={<Badge status={badgeStatus} text={status} />}
      />
    </List.Item>
  )
}

export default Character
