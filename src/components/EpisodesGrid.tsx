import { Button, Space } from 'antd'
import React from 'react'

type propsType = {
  list: Array<string>
}

function EpisodesGrid({ list }: propsType) {
  const count = 51
  const episodiesNums = list.map(episode => {
    const num = episode.match(/\d+/g)
    return num && Number(num[0])
  })
  const episodies = Array(count)
    .fill(null)
    .map((_, episode) => {
      return episodiesNums.find(num => num === episode + 1) || 0
    })
  console.log(episodies)
  return (
    <div>
      <Space wrap>
        {episodies.map((inEpisode, episode) => (
          <Button
            key={episode}
            type={!!inEpisode ? 'primary' : 'dashed'}
            style={{ width: '3rem' }}
            disabled={!inEpisode}>
            {episode + 1}
          </Button>
        ))}
      </Space>
    </div>
  )
}

export default EpisodesGrid
