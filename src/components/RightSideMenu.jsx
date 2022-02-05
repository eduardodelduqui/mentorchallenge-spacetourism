import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

export default function RightSideMenu (props) {
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

    const _handleClickCloseButton = () => {
        props.onOpenSideMenu()
    }
    
    return (
        <div className={props.isOpen ? () => {console.log('isopen')} : ''} className="right-sidebar absolute top-0 right-0 h-full backdrop-blur p-8 max-w-[16rem] w-full">
            <div className="blur-img"/>
            <header className="side-menu-header">
                <button onClick={() => _handleClickCloseButton()} className="close-button"/>
            </header>
            <ul className="menu-list">
                {items.map(item => {
                    return (
                        <li className="menu-list-item" key={item.id}>
                            <Link to={item.url}>
                                <span>{item.id}</span>{item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}