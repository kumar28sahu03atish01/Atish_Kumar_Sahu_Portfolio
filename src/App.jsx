import { Welcome } from './Components/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './Components/About';
import {Header} from './Components/Header';
import {Footer} from './Components/Footer';
import {Project} from './Components/Project';
export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Project />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}