import './App.css'
import './styles/SortButton.css'
import {Route, Routes} from "react-router-dom";
import {MovieDetailPage} from "./pages/MovieDetailPage.jsx";
import {Layout} from "./layout.jsx";
import {Home} from "./pages/Home.jsx";


function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies/:id" element={<MovieDetailPage/>}/>
            </Routes>
        </Layout>
    )
}

export default App
