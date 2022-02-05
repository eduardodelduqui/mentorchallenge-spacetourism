import React, { useState, useEffect } from 'react';
import Subtitle from '../components/Subtitle';

export default function Crew () {

    const [crew, setCrew] = useState([])
    const [currentCrew, setCurrentCrew] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    const _getCrew = () =>{
        fetch('/data.json')
            .then((res) => {
                return res.json()
            })
            .then(data => {
                setCrew(data.crew)
                setCurrentCrew(data.crew[0])
                setIsLoaded(true)
            })
    }

    useEffect(() => {
        _getCrew();
    }, [])

    const changeCurrentCrew = (name) => {
        crew.forEach(person => {
            if (person.name === name) {
                setCurrentCrew(person)
            }
        })
    }

    const isActive = (name) => {
        return currentCrew.name === name
    }

    const crewImage = () => {
        return (
            <img
                className="mx-auto max-h-56 sm:max-h-[532px] lg:max-h-[700px]"
                src={currentCrew.images && currentCrew.images.png}
                alt={currentCrew.name}
            />
        )
    }

    const renderContent = () => {
        if(isLoaded) {
            return (
                <div className="flex flex-col mx-auto sm:flex-col-reverse lg:items-start">
                    <div className="thumbnail border-b max-h-56 border-dark-blue box-content
                    sm:max-h-[532px] lg:max-h-[700px] lg:hidden">
                        {crewImage()}
                    </div>
                    <div className="flex flex-col sm:flex-col-reverse">
                        <div className="py-7">
                            <ul className="crew-selector flex max-w-max mx-auto lg:ml-0">
                                {crew.map((person, index) => {
                                    return (
                                        <li
                                            className="p-2"
                                            key={index}
                                            onClick={() => changeCurrentCrew(person.name)}
                                        >
                                            <div
                                                className={`${isActive(person.name) ? 'active' : '' } crew-selector-item bg-white rounded-full w-[10px] h-[10px] cursor-pointer lg:w-[15px] lg:h-[15px]`}
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="crew-info sm:w-[28rem] mx-auto lg:pb-20">
                            <p className="font-bellefair text-base text-center text-white uppercase opacity-50 sm:text-2xl lg:text-left" >
                                {currentCrew.role}
                            </p>
                            <h1 className="text-2xl text-center text-white uppercase leading-7 pt-2 pb-4 sm:text-[2.5rem] sm:leading-[46px] lg:text-left" >
                                {currentCrew.name}
                            </h1>
                            <p className="text-light-blue text-center sm:text-base sm:leading-7 lg:text-left">
                                {currentCrew.bio}
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div page="crew-page" className="main-content bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop pt-[88px] sm:pt-32 lg:pt-52">
            <div className="w-full h-full max-w-[1440px] mx-auto xl:px-[165px] lg:flex lg:justify-between">
                <div>
                    <Subtitle number={'02'} text={'Meet Your Crew'} />
                    {renderContent()}
                </div>
                <img
                className="hidden lg:block"
                src={currentCrew.images && currentCrew.images.png}
                alt={currentCrew.name}
            />
            </div>
        </div>
    )
}