import React from 'react'
import { LANGUAGES } from '../../lib/constants'


const LanguageDropdown = () => {

    const [selectedLanguage, setSelectedLanguage] = React.useState(LANGUAGES.EN)
    const [isOpen, setIsOpen] = React.useState(false)
    
    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language)
        setIsOpen(false)
    }

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`lang-dropdown-menu-container ${isOpen ? 'open' : ''}`}>
            <button className='lang-selected-dropdown-item' onClick={handleToggleDropdown}>{selectedLanguage}</button>
            <ul className='lang-dropdown-items'>
                {isOpen && Object.values(LANGUAGES)?.map((language: string, index: number) => {
                    return (
                        <li key={index} className='lang-dropdown-item' onClick={() => handleLanguageChange(language)}>
                            {language}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default LanguageDropdown
