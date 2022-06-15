import React from "react"
import News from "./News.jsx"
import Navbar from "./Navbar.jsx"
import { BrowserRouter, Route, Routes} from "react-router-dom"

export default function Application (){
        return (
            <>
                <div>
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<News pagesize={20} country="in" category="general" />}/>
                            <Route path="/sports" element={<News pagesize={20} country="in" category="sports" />}/>
                            <Route path="/technology" element={<News pagesize={20} country="in" category="technology" />}/>
                            <Route path="/business" element={<News pagesize={20} country="in" category="business" />}/>
                            <Route path="/science" element={<News pagesize={20} country="in" category="science" />}/>
                            <Route path="/health" element={<News pagesize={20} country="in" category="health" />}/>
                            <Route path="/entertainment" element={<News pagesize={20} country="in" category="entertainment" />}/>

                        </Routes>
                    </BrowserRouter>
                </div>
            </>
        )
    }