import {useState, useEffect} from 'react'

const Card = ({xyz}) => {

    const[hasLiked, setHasLiked] = useState(false);
    const[count,setCount]= useState(0);

    useEffect(()=>{
        console.log(`${xyz} has been liked: ${hasLiked}`);
    },[hasLiked]);



    const handleLiked = (e) => {
        e.stopPropagation(); //ye kaam krra h apna button ke event pe so e=buttonclick

        setHasLiked((prev) => {
            setCount((c) => (prev ? c-1:c+1));
            return !prev;
        })
    }


    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            border: '1px solid #4b5362',
            padding: '20px',
            margin: '10px',
            backgroundColor: '#31363f',
            borderRadius: '5px',
        }} onClick={() => setCount((c) => c+1)}>
            <h2> {xyz} <br /> {count ? count: null}</h2>

            <div style={{ alignSelf: 'flex-end' }}>
                <button onClick={handleLiked}>
                    {hasLiked ? '💗' : '🌚'}
                </button>
            </div>
        </div>
    )
}

export default Card;