import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Movielist from '../../components/Movielist/Movielist';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])
    return (
        <div>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    popularMovies.map(movie => (
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={`/movie/${movie.id}`}>
                            <div className='lg:h-[564px]'>
                                <img className='block m-auto w-[100%]' src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt="" />
                            </div>
                            <div style={{position:'absolute', bottom:'0px', display:'flex', flexDirection:'column', padding:'5rem', opacity:'1', transition:'opacity .3s', height:'70%', width:'100%', justifyContent:'flex-end', alignItems:'flex-start', backgroundImage:'linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1)'}}>
                                <div className='text-[900] text-[4rem] mb-[0.4rem] text-left'>{movie ? movie.original_title : ''}</div>
                                <div className='text-[2rem] mb-[1rem]'>
                                    {movie ? movie.release_date : ''}
                                    <span className='ml-[3rem]'>
                                        {movie ? movie.vote_average : ''}
                                        <i className='fas fa-star' />{''}
                                    </span>
                                </div>
                                <div className='italic text-[1rem] mb-[0.25rem] flex text-left w-[50%]'>{movie ? movie.overview : ''}</div>
                            </div>
                        </Link>
                    ))
                }
            </Carousel>
            <Movielist />
        </div>
    );
};

export default Home;