import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Home } from '../components/Home'
import { OurService } from '../views/ourService/OurService'
import { News } from '../views/news/News'

export default function RouterPath() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/ourService',
            element: <OurService />
        },
        {
            path: '/news',
            element: <News />
        }
    ])
    return <RouterProvider router={router} />
}
