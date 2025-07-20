import { useState } from 'react';
import data from './data';
import './App.css';

const App = () => {
    const [index, setIndex] = useState(0);
    const [person, setPerson] = useState(data[index]);

    const decreaseIndex = (event)=>{
        event.preventDefault();
        let newIndex;
        if(index === 0){
            newIndex = data.length - 1;
            setIndex(newIndex);
        }else{
            newIndex = index - 1;
            setIndex(newIndex);
        }
        setPerson(data[newIndex]);
    }

    const increaseIndex = (event)=>{
        event.preventDefault();
        let newIndex;
        if(index === data.length - 1){
            newIndex = 0;
            setIndex(newIndex);
        }else{
            newIndex = index + 1;
            setIndex(newIndex);
        }
        setPerson(data[newIndex]);
    }

    const createRandomIndex = () => {
        const randomNumber = parseInt(Math.random() * data.length);
        setIndex(randomNumber);
        setPerson(data[randomNumber]);
    }
    return (
        <main className="app">
            <section className='review'>
                <div className='review-person-image'>
                    <img src={person.img} alt={person.name} />
                    <div className='bookmark'>
                        <i>
                            &#44;
                            &#44;
                        </i>
                    </div>
                </div>
                <h2 className='review-person-name'>{person.name}</h2>
                <h3 className='review-person-job'>{person.job}</h3>
                <p className='review-person-text'>
                    {person.text}
                </p>
                <ul>
                    <li>
                        <a onClick={decreaseIndex} href="#">
                            &lsaquo;
                        </a>
                    </li>
                    <li>
                        <a onClick={increaseIndex} href="#">
                            &rsaquo;
                        </a>
                    </li>
                </ul>
                <button className='btn btn-inline-primary' onClick={createRandomIndex}>
                    suprise me
                </button>
            </section>
        </main>
    )
}

export default App;