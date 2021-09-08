import React, { useEffect, useState } from 'react'

const AuthContext = React.createContext({
      token: '',
      name: '',
      isLoggedIn: false,
      login: (token) => {},
      logout: () => {},
})

const calRemainTime = (expTime) => {
      const currentTime = new Date().getTime()
      // expiration time in the future
      const adjustedExpTime = new Date(expTime).getTime()

      const remainTime = adjustedExpTime - currentTime
      return remainTime
}

export const AuthContextProvider = (props) => {
      let initialToken = null
      let initialName = null

      const [token, setToken] = useState(initialToken)
      const [name, setName] = useState(initialName)

      useEffect(() => {
            initialToken = localStorage.getItem('token')
            initialName = localStorage.getItem('username')
            setToken(initialToken)
            setName(initialName)
      }, [])

      const userIsLoggedIn = !!token

      const logoutHandler = () => {
            setToken(null)
            setName(null)
            localStorage.clear()
      }

      const loginHandler = (token, name, expTime) => {
            setToken(token)
            setName(name)
            localStorage.setItem('token', token)
            localStorage.setItem('username', name)

            // auto log out after expiration time
            const remainTime = calRemainTime(expTime)
            setTimeout(() => logoutHandler(), remainTime)
      }

      const contextValue = {
            token: token,
            name: name,
            isLoggedIn: userIsLoggedIn,
            login: loginHandler,
            logout: logoutHandler,
      }

      return (
            <>
                  <AuthContext.Provider value={contextValue}>
                        {props.children}
                  </AuthContext.Provider>
            </>
      )
}

export default AuthContext
