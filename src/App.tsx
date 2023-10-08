import { Router, StoreProvider } from "components/wrapper"
import { paths } from "constants/paths"



function App() {
  return (
    <StoreProvider>
      <Router defaultRoute={paths.home} />
    </StoreProvider>
  )
}

export default App
