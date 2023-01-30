import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import './Cards.css';

const Card = ({ movie }) => {
    const { original_title, release_date, vote_average, poster_path } = movie;
    
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, [])
    return (
        <div>
            {
                isLoading ? <div className='cards'>
                    <SkeletonTheme color='#202020' highlightColor="#444" />
                    <Skeleton height={300} duration={2} />
                    <SkeletonTheme />
                </div>
                    : <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                        <div className='cards'>
                            <img className='h-[300px]' src={` https://image.tmdb.org/t/p/original${movie ? poster_path: ''}`} alt="" />
                            <div className='card_lap' style={{
                                position: 'absolute',
                                padding: '0 1rem 1rem 1rem',
                                bottom: '0px',
                                height: '290px',
                                display: 'flex',
                                flexDirection: 'column',
                                width: '85%',
                                justifyContent: 'flex-end',
                                backgroundImage: 'linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1))',
                                opacity: '0',
                                transition: 'opacity .2s'
                            }}>  
                                <div style={{ fontWeight: '900', fontSize: '1rem', marginBottom: '0.4rem' }}>{movie ? original_title : ''} console.log(movie.original_title)</div>
                                <div style={{ fontSize: '.75rem', marginBottom: '0.25rem' }}>
                                    console.log(movie);
                                    {movie ? release_date : ''}
                                    <span style={{ float: 'right' }}>{movie ? vote_average : ""} <i className='fas fa-star' /></span>
                                </div>
                                <div style={{ fontSize: '.75rem', fontStyle: 'italic', marginBottom: '0.25rem' }}>{movie ? movie.overview.slice(0, 118) + '...' : ''}</div>
                            </div>
                        </div>
                    </Link>
            }
        </div >
    );
};

export default Card;