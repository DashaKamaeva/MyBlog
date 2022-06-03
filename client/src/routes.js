import React from "react"
import {Routes, Route} from 'react-router-dom'
import { LinksPage } from "./pages/LinksPage"
import { AuthPage } from "./pages/AuthPage"
import { PostPage } from "./pages/PostPage"
import { CreatePage } from "./pages/CreatePage"

export const useRoutes = isAuthenticated =>{
if(isAuthenticated){
    return(
        <Routes>
            <Route path="/links" element={<LinksPage />}/>
            <Route path="/create" element={<CreatePage />}/>
            <Route path="/post/:id" element={<PostPage />}/>
             
            {/* <Redirect to ="/create" /> */}
        </Routes>
    )
}
return(
        <Routes>
            <Route path="/auth" element={<AuthPage />}/>
            {/* <Redirect to ="/"/> */}
        </Routes>
    )
}
