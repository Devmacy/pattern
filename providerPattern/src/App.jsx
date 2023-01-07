import {ThemeProvider} from "./components/ThemeProvider";
import Theme from "./components/Theme.jsx";
import './css/App.css'

function App() {

  return (
      <ThemeProvider>
          <Theme/>
      </ThemeProvider>
  )
}

export default App
