import React, { useState, useEffect } from 'react';
import Subtitle from '../components/Subtitle';

export default function Technology () {
    const [technologies, setTechnologies] = useState([])
    const [currentTechnology, setCurrentTechnology] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    const _getTechnologies = () =>{
        fetch('/data.json')
            .then((res) => {
                return res.json()
            })
            .then(data => {
                setTechnologies(data.technology)
                setCurrentTechnology(data.technology[0])
                setIsLoaded(true)
            })
    }

    useEffect(() => {
        _getTechnologies();
    }, [])

    const changeCurrentTechnology = (name) => {
        technologies.forEach(technology => {
            if (technology.name === name) {
                setCurrentTechnology(technology)
            }
        })
    }

    const isActive = (name) => {
        return currentTechnology.name === name
    }

    const renderContent = () => {
        if (isLoaded) {
            return (
                <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:gap-16">
                    <img
                        src={currentTechnology.images && currentTechnology.images.landscape}
                        alt={currentTechnology.name}
                        className="mx-auto lg:hidden"
                    />
                    <img
                        src={currentTechnology.images && currentTechnology.images.portrait}
                        alt={currentTechnology.name}
                        className="hidden lg:block"
                    /> 
                    <div className="lg:flex lg:justify-between">
                        <ul className="technology-selector flex gap-4 max-w-max mx-auto pt-8 pb-6 sm:pt-14 sm:pb-12 lg:flex-col lg:gap-8 lg:p-0">
                            {technologies.map((technology, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => changeCurrentTechnology(technology.name)}
                                    >
                                        <div
                                            className={`technology-selector-item font-bellefair flex items-center justify-center rounded-full cursor-pointer
                                            w-10 h-10 sm:w-[3.75rem] sm:h-[3.75rem] sm:text-2xl ${isActive(technology.name) ? 'active' : '' }`}
                                        >
                                            {index+1}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="technology-info px-6">
                            <div className="max-w-md mx-auto">
                                <p className="text-sm text-center text-light-blue uppercase sm:text-base lg:text-left">The Terminology</p>
                                <h1 className="text-2xl text-center text-white uppercase leading-7 pt-2 pb-4 sm:text-[2.5rem] sm:leading-[46px] sm:pt-4 lg:text-left">
                                    {currentTechnology.name}
                                </h1>
                                <p className="text-light-blue text-center sm:text-base sm:leading-7 lg:text-left">
                                    {currentTechnology.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div page="technology-page" className="main-content bg-technology-mobile px-0 pt-[88px] sm:pt-32 sm:bg-technology-tablet lg:bg-technology-desktop lg:pt-52">
            <div className="w-full max-w-[1440px] mx-auto lg:pl-6 xl:pl-[165px]">
                <Subtitle number={'03'} text={'Space Launch 101'} className='px-6 lg:px-0'/>
                {renderContent()}
            </div>
        </div>
    )
}