import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores/index'
import Home from './screens/Home/Home'

const App = () => {
  return (
    <Provider store={store}>
      {/* <MainNavigation /> */}
      <Home />
    </Provider>
  )
}

export default App
