type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: Array<string>
  url: string
  created: string
}

type Filters = {
  name: ''
  status: ''
  species: ''
  type: ''
  gender: ''
}

type Info = {
  count: number
  pages: number
  next: string
  prev: string
}
