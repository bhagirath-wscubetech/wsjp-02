import React from 'react';

const Result = ({ movies }) => {

    const boxes = movies.map(
        (movie, index) => {
            return <Box {...movie} key={index} />
        }
    )


    return (
        <div className='container'>
            {boxes}
        </div>
    );
}

export default Result;


const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return <div className='box'>
        <img src={IMGPATH + props.poster_path} alt="" />
        <div className='overlay'>
            {props.original_title}
            <br />
            {props.vote_average} / 10
        </div>
    </div>
}