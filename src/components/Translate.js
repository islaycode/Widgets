import React, { useState } from 'react'
import Dropdown from '../Dropdown';
import Convert from './Convert';

const options = [
    {
        label: "Afrikaans",
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]
export const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label">Enter Text</label>
                    <input className="input"
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options} />
            <br/>
            <hr />
            <h3 className="header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}
export default Translate;