import { createRoot } from 'react-dom/client'
import AppRouter from '@routes/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store'
import '@services/axios.global.js'
import '@styles/global.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
