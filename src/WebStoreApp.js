import React from 'react'
import { Home } from './components/Home'
import { Footer } from './components/ui/Footer'
import { Navbar } from './components/ui/Navbar'

export const WebStoreApp = () => {
    return (
        <div >
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}
