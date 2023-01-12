import { Route, Routes } from "react-router-dom";
import { Box } from "./components";
import Home from "./pages/home";
import Kamdo from "./pages/kamdo";
import NotFound from "./pages/not-found";

function App() {
    return (
        <main className="h-screen w-full">
            <Routes>
                <Route index element={<Home />} />
                <Route path="/s2wt-kamdo" element={<Kamdo />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Box className="absolute bottom-4 right-0 left-0">
                <p className="text-center text-gray-400 text-xs">
                    Made with <span className="text-red-500">❤</span> by{" "}
                    <a href="https://msar.me" target="_blank" rel="noreferrer">
                        Saiful Alam
                    </a>
                </p>
            </Box>
        </main>
    );
}

export default App;
