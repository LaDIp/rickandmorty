import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
import { FeaturesProvider } from './useFeature'

ReactDOM.render(
  <React.StrictMode>
    <FeaturesProvider>
      <App />
    </FeaturesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
