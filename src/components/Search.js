import React,{useState,useEffect} from 'react'
import axios from 'axios';
export const Search = () => {
    const [term,setTerm] = useState('');
    const [results,setResults] = useState([]);
    console.log(results)

    useEffect(()=>{
        const search = async ()=>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });
            setResults(data.query.search);
        }
        const timeoutId = setTimeout(()=>{

        if(term){
            search();    
        }
        },200)

        return()=>{
            clearTimeout(timeoutId);
        }
        
    },[term])
    
    const renderedResults = results.map((result)=>{
        return(
            <div key={result.pageid}className="item">
                <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >More Details</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    })
    return (
        <div>
        <div className="ui form">
        <div className="field">
            <label>Search</label>
            <input className="input"
            value={term}
            onChange={e=> setTerm(e.target.value)}
            />
        </div>
        <div className="ui celled list">{renderedResults}</div>
        </div>
        </div>
    )
}
