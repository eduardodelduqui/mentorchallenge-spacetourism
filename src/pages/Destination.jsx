import {React, useEffect, useState } from 'react';
import Subtitle from '../components/Subtitle';


export default function DestinationPage () {
    const [currentDestination, setCurrentDestination] = useState({});
    const [destinations, setDestinations] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    const _getDestinations = () =>{
        fetch('/data.json')
            .then((res) => {
                return res.json()
            })
            .then(data => {
                setDestinations(data.destinations)
                setCurrentDestination(data.destinations[0])
                setIsLoaded(true)
            })
    }
    useEffect(() => {
        _getDestinations();
    }, [])

    const _changeDestination = (name) => {
        destinations.forEach(destination => {
            if (destination.name === name) {
                setCurrentDestination(destination)
            }
        })
    }

    const isActive = (name) => {
        return currentDestination.name === name
    }

    const currentImage = (type) => {
        const images = currentDestination && currentDestination.images
        return (type === 'png') ? images && images.png : images && images.webp
    }

    const renderContent = () => {
        if (isLoaded) {
            return (
                <div className="flex flex-col gap-7 sm:gap-12 lg:flex-row lg:items-end">
                    <div className="min-h-[170px] max-w-[170px] sm:max-w-[300px] lg:max-w-[445px] mx-auto">
                        <img src={currentImage('png')} alt="teste"/>
                    </div>
                    <div className="destination-info">
                        <div className="destination-list pb-6">
                            <ul className="flex justify-between text-white text-sm uppercase h-7 max-w-[15rem] w-full mx-auto font-barlowCondensed sm:h-8 lg:m-0">
                                {destinations.map((destination, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={`destination-item ${isActive(destination.name) ? 'active' : ''} text-light-blue sm:text-base cursor-pointer`}
                                            onClick={() => _changeDestination(destination.name)}
                                        >
                                                {destination.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="mx-auto sm:max-w-xl">
                            <h1 className="text-white text-center text-6xl leading-[4rem] sm:text-[5rem] sm:leading-[5.75rem] lg:text-left">
                                {currentDestination.name}
                            </h1>
                            <p className="text-light-blue text-center sm:text-base sm:leading-7 lg:text-left">
                                {currentDestination.description}
                            </p>
                            <div className="text-center py-8 mt-8 flex flex-col gap-8 border-t border-dark-blue sm:flex-row sm:justify-center lg:justify-start">
                                <div className="flex flex-col gap-3 lg:text-left lg:w-full">
                                    <p className="text-light-blue">AVG. DISTANCE</p>
                                    <p className="font-bellefair text-white text-[1.75rem] uppercase">
                                        {currentDestination.distance}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 lg:text-left lg:w-full">
                                    <p className="text-light-blue">EST. TRAVEL TIME</p>
                                    <p className="font-bellefair text-white text-[1.75rem] uppercase">
                                        {currentDestination.travel}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div page="destination-page" className="main-content bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop pt-[88px] sm:pt-32 lg:pt-52">
            <div className="w-full max-w-[1110px] mx-auto">
                <Subtitle number={'01'} text={'Pick Your Destination'}/>
                {renderContent()}
            </div>
        </div>
    )
}