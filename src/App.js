import React from "react"
import "./main.scss"
import { Routes } from "./routes"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { RecoilRoot } from "recoil"
import SideNav from "./components/sidenav"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  const navRef = React.createRef()
  const closeNav = () => {
    if (navRef.current) {
      navRef.current.closeNav()
    }
  }
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <SideNav ref={navRef} />
          <main onClick={closeNav}>
            <Header />
            <Switch>
              {Routes.map((route, key) => {
                return <Route key={key} path={route.path} exact={route.exact} children={route.component}></Route>
              })}
            </Switch>
            <Footer />
          </main>
        </Router>
      </RecoilRoot>
    </div>
  )
}

export default App
