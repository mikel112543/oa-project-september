
import {Route, Routes} from "react-router-dom";
import {MovieDetailPage} from './frontend/pages/MovieDetailPage.jsx';
import {Layout} from "./layout.jsx";
import {Home} from "./frontend/pages/Home.jsx";


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
