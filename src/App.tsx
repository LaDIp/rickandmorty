import { List, Spin, Typography, Pagination } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Character from './components/Character'
import Filters from './components/Filters'
import ModalCharacter from './components/ModalCharacter'

function App() {
  const [characters, setCharacters] = useState<Array<Character>>([])
  const [info, setInfo] = useState<Info>({
    count: 0,
    pages: 0,
    next: '',
    prev: '',
  })
  const [error, setError] = useState(true)
  const [isLoad, setIsLoad] = useState(true)

  const [filters, setFilters] = useState<Filters>({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  })
  const [page, setPage] = useState(1)

  const [character, setCharacter] = useState<Character>()

  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setIsLoad(true)
    axios
      .get('https://rickandmortyapi.com/api/character', {
        params: {
          page,
          name: filters.name,
          status: filters.status,
          species: filters.species,
          type: filters.type,
          gender: filters.gender,
        },
      })
      .then((response: any) => {
        console.log(response)
        setError(false)
        setCharacters(response.data.results)
        setInfo(response.data.info)
      })
      .catch((error: any) => {
        console.log(error)
        setError(true)
        setCharacters([])
        setInfo({ count: 0, pages: 0, next: '', prev: '' })
      })
      .finally(() => {
        setIsLoad(false)
      })
  }, [filters, page])

  const handleChangeFilters = (filter: Object) => {
    console.log(filter)
    setFilters({ ...filters, ...filter })
    setPage(1)
  }

  const handleChangePage = (page: number) => {
    setPage(page)
  }

  const showMore = (id: number) => {
    setCharacter(
      characters.filter((character: Character) => character.id === id)[0]
    )
    setModalVisible(true)
    console.log(id)
  }

  const handleModalCancel = () => {
    setModalVisible(false)
  }

  const handleResetFilters = () => {
    setPage(1)
    setFilters({
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
    })
  }

  console.log(characters, error)

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto',
          padding: '1rem',
        }}>
        <Typography.Title style={{ textAlign: 'center' }}>
          Rick and Morty Characters
        </Typography.Title>
        <Filters onChange={handleChangeFilters} onReset={handleResetFilters} />

        {isLoad ? (
          <Spin size='large' />
        ) : (
          <>
            <List
              itemLayout='horizontal'
              style={{ width: '100%' }}
              dataSource={error ? [] : characters}
              renderItem={(character: Character) => (
                <Character {...character} onClick={showMore} />
              )}
            />
            <Pagination
              defaultCurrent={1}
              current={page}
              total={error ? 1 : info.count}
              pageSize={20}
              showSizeChanger={false}
              hideOnSinglePage
              onChange={handleChangePage}
            />
          </>
        )}
      </div>
      {character && (
        <ModalCharacter
          character={character}
          visible={modalVisible}
          onCancel={handleModalCancel}
        />
      )}
    </>
  )
}

export default App
