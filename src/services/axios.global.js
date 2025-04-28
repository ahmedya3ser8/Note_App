import axios from 'axios'

axios.defaults.baseURL = "https://note-sigma-black.vercel.app"
axios.defaults.headers.common['token'] = `3b8ny__${localStorage.getItem('token')}`;
