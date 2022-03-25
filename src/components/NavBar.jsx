import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar (props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    
    const location = useLocation()

    const isActive = (name) => {
        const currentPage = window.location.pathname.split('/')[1] || 'home'
        return name === currentPage
    }

    const items = [
        {
            id: '00',
            name: 'home',
            url: '/'
        },
        {
            id: '01',
            name: 'destination',
            url: '/destination'
        },
        {
            id: '02',
            name: 'crew',
            url: '/crew'

        },
        {
            id: '03',
            name: 'technology',
            url: '/technology'

        }
    ]

    useEffect(() => {
    }, [location])

    const _openRightSidebar = () => {
        setIsSidebarOpen(true)
    }

    const _closeRightSidebar = () => {
        setIsSidebarOpen(false)
    }

    const rightSidebar = (isOpen) => {
        if (isOpen) {
            return (
                <div
                    className="absolute top-0 right-0 h-screen backdrop-blur-xl overflow-hidden max-w-[254px] w-full z-10"
                >
                    <div className="blur-img"/>
                    <header className="side-menu-header flex justify-end py-8 pl-8 pr-6">
                        <button
                            onClick={() => _closeRightSidebar()}
                            className="close-button bg-icon-close bg-no-repeat text-right bg-contain w-5 h-5"
                        />
                    </header>
                    <ul className="menu-list py-4">
                        {items.map(item => {
                            return (
                                <li className={`menu-list-item border-l-4 border-white border-opacity-0 pl-8 pr-6 ${isActive(item.name) ? 'border-opacity-100' : ''}`} key={item.id}>
                                    <Link
                                        className="flex gap-3 py-4 font-barlowCondensed text-white uppercase"
                                        onClick={() => _closeRightSidebar()}
                                        to={item.url}
                                    >
                                        <span className="font-bold">{item.id}</span>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }

    const collasableNavBar = () => {
        return (
            <>
                <nav className="absolute flex sm:hidden justify-between items-center top-0 w-full bg-transparent p-6">
                    <Link to="/">
                        <div className="bg-logo bg-no-repeat bg-contain w-10 h-10"></div>
                    </Link>
                    <button
                        className="bg-icon-hamburger bg-no-repeat bg-contain border-none w-5 h-5"
                        onClick={() => _openRightSidebar()}
                    />
                </nav>
                {rightSidebar(isSidebarOpen)}
            </>
        )
    }

    const regularNavBar = () => {
        return (
            <nav className="font-barlowCondensed absolute hidden sm:flex justify-between items-center w-full text-sm sm:pl-10 lg:pl-14 lg:pt-10">
                <Link to="/">
                    <div className="bg-logo bg-no-repeat bg-contain w-10 h-10"></div>
                </Link>
                <ul className="menu-list flex justify-between bg-white bg-opacity-[.04] backdrop-blur-2xl w-full h-24 px-12 sm:max-w-[450px] lg:gap-12 lg:max-w-[830px] lg:pl-32">
                    {items.map(item => {
                        return (
                            <li className={`menu-list-item flex items-center uppercase tracking-[2px] border-b-[3px] 
                            border-white border-opacity-0 hover:border-opacity-50 ${isActive(item.name) ? 'border-opacity-100' : ''}`} key={item.id}>
                                <Link
                                    className="text-white flex gap-3 h-full items-center"
                                    onClick={() => _closeRightSidebar()}
                                    to={item.url}
                                >
                                    <span className="font-bold hidden lg:block">{item.id}</span>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }

    return (
        <>
            {regularNavBar()}
            {collasableNavBar()}
        </>
    )
}