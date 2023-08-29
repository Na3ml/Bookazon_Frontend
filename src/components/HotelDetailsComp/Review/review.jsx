import React from 'react';
import './review.css'
import { Container } from 'react-bootstrap';
import ReviewCards from '../../Reviews/ReviewCards';
const review = () => {
    return (
        <>
        <div className='' id='rating-reviews'>
            <h1 className='container' >Rating and reviews</h1>
            <div className='review1'>
                <div className='star-rating'>
                    <span className='star1 d-flex align-items-center'>
                        <h1 className='text-black'>4.5</h1>
                        <svg className="text-warning" width="40px" height="40" xmlns="http://www.w3.org/2000/svg" fill="#FF9200" viewBox="0 0 24 24" stroke="#FF9200">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                        </svg>
                    </span>
                    <button  className='feedback-btn btn btn-secondary text-white px-3 py-2'>Leave feedback</button>
                </div>
                <div className='mt-5'>
                    <ul>
                    <div class="">
                        <div class="d-grid gap-2">
                            <span className='d-flex gap-2'>
                                <h6>5</h6>
                                <svg class="text-warning " width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="#FF9200" viewBox="0 0 24 24" stroke="#FF9200">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                </svg>
                                <div className='line1'></div>
                            </span>
                            <span className='d-flex gap-2'>
                                <h6>4</h6>
                                <svg class="text-warning" width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="#FF9200" viewBox="0 0 24 24" stroke="#FF9200">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                </svg>
                                
                                <span className='line2'></span>
                            </span>
                            <span className='d-flex gap-2'>
                                <h6>3</h6>
                                <svg class="text-warning" width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="#FF9200" viewBox="0 0 24 24" stroke="#FF9200">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                </svg>
                                
                                <span className='line3'></span>
                            </span>
                            <span className='d-flex gap-2'>
                                <h6>2</h6>
                                <svg class="text-warning " width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="#FF9200" viewBox="0 0 24 24" stroke="#FF9200">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                </svg>
                                
                                <span className='line4'></span>
                            </span>
                            <span className='d-flex gap-2'>
                                <h6>1</h6>
                                <svg class="text-warning " width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="#FF9200" viewBox="0 0 24 24" stroke="#FF9200">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                </svg>
                                
                                <span className='line5'></span>
                            </span>
                        </div>
                    </div>
                    </ul>
                </div>
            </div>
        </div>
        <Container>
      
        <ReviewCards/>
        </Container>
        </>
    );
};

export default review;