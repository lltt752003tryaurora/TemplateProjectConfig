import React from 'react'
import { Provider } from 'react-redux'
import store from 'store'

type XProviderProps = {
    children: React.ReactNode;
}

const XProvider: React.FC<XProviderProps> = (props) => {
  return (
    <Provider store={store}>
        {props.children}
    </Provider>
  )
}

export default XProvider