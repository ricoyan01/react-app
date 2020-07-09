import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Calculator from './StateUp';

class List extends React.Component{
    render(){
        const {data}= this.props
        return(
            <ol>
                {data.map((value, i) => <li key={i}>{value}</li>)}
            </ol>
        )
    }
}

export default function Topic() {
    let { topicId } = useParams();

    useEffect(() => {
        window.scrollTo(0, window.innerHeight, 'smooth');
    }, [])

    const data = ['Rumah Type A', 'Rumah Type B', 'Rumah Type C']
    return (
        <div className="App">
            <header className="App-header">
                Topik yang dipilih adalah {topicId}
                <p><List data={data}/></p>
                <p class="who-text bg-dark p-2">
                <Calculator></Calculator>
                </p>
            </header>
            
        </div>
    )
}