import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Contact() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);
    
    // Enhanced feedback data with professional photos
    const feedbackData = [
        {
            id: 1,
            name: "Sarah Chen",
            rating: 5,
            comment: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616c6fc2162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            role: "Product Manager",
            location: "TechFlow"
        },
        {
            id: 2,
            name: "Marcus Johnson",
            rating: 5,
            comment: "Outstanding movie discovery platform! The curated collections and personalized recommendations have revolutionized how our team finds content.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            role: "Creative Director",
            location: "Digital Media Corp"
        },
        {
            id: 3,
            name: "Elena Rodriguez",
            rating: 5,
            comment: "Exceptional user experience and intuitive design. The platform's ability to organize and categorize content is unmatched in the industry.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            role: "UX Designer",
            location: "Innovation Studios"
        },
        {
            id: 4,
            name: "David Park",
            rating: 4,
            comment: "Impressive technical architecture and seamless performance. The advanced filtering and search capabilities exceed our expectations.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            role: "Software Engineer",
            location: "Tech Solutions Inc"
        },
        {
            id: 5,
            name: "Amy Thompson",
            rating: 5,
            comment: "Game-changing platform that has streamlined our content curation process. The analytics and insights provided are incredibly valuable.",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            role: "Content Strategist",
            location: "Media Dynamics"
        },
        {
            id: 6,
            name: "Robert Kim",
            rating: 5,
            comment: "Powerful analytics dashboard and comprehensive reporting features. The data visualization capabilities help us make informed decisions.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            role: "Data Analyst",
            location: "Analytics Pro"
        }
    ];

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % feedbackData.length);
        }, 5000);

        return () => clearInterval(intervalRef.current);
    }, [feedbackData.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % feedbackData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + feedbackData.length) % feedbackData.length);
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={index < rating ? 'star-filled' : 'star-empty'}
            />
        ));
    };

    return (
        <div className="feedback-section">
            <div className="feedback-container">
                <div className="feedback-header">
                    <h2 className="feedback-title">WHAT OUR USERS SAY</h2>
                    
                    {/* Modern Card-Style Testimonials */}
                    <div className="modern-testimonials">
                        {/* Navigation Controls */}
                        <div className="testimonial-navigation">
                            <button className="nav-btn prev" onClick={prevSlide}>
                                <FaChevronLeft />
                            </button>
                            <button className="nav-btn next" onClick={nextSlide}>
                                <FaChevronRight />
                            </button>
                        </div>

                        {/* Main Testimonial Card */}
                        <div className="testimonial-wrapper">
                            <div className="testimonial-card-modern">
                                {/* Left side - Professional Photo */}
                                <div className="testimonial-image-section">
                                    <div className="image-container">
                                        <img 
                                            src={feedbackData[currentSlide].avatar} 
                                            alt={feedbackData[currentSlide].name}
                                            className="testimonial-photo"
                                        />
                                        <div className="image-overlay"></div>
                                    </div>
                                </div>

                                {/* Right side - Content */}
                                <div className="testimonial-content-section">
                                    <div className="author-info-modern">
                                        <h2 className="author-name-modern">{feedbackData[currentSlide].name}</h2>
                                        <p className="author-position">{feedbackData[currentSlide].role} at {feedbackData[currentSlide].location}</p>
                                    </div>
                                    
                                    <div className="testimonial-text-section">
                                        <p className="testimonial-quote-modern">
                                            {feedbackData[currentSlide].comment}
                                        </p>
                                    </div>

                                    <div className="testimonial-footer">
                                        <div className="rating-section">
                                            <div className="stars-modern">
                                                {renderStars(feedbackData[currentSlide].rating)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Indicator Dots */}
                        <div className="testimonial-indicators">
                            {feedbackData.map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>


                </div>
                
                <div className="feedback-form-section">
                    <h3 className="form-section-title">SHARE YOUR FEEDBACK</h3>
                </div>
                
                <div className="feedback-form-wrapper">
                    <form className="feedback-form">
                        <div className="form-row">
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="feedback-input"
                                required
                            />
                        </div>
                        
                        <div className="form-row">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="feedback-input"
                                required
                            />
                        </div>
                        
                        <div className="form-row">
                            <input 
                                type="tel" 
                                placeholder="Phone Number" 
                                className="feedback-input"
                                required
                            />
                        </div>
                        
                        <div className="form-row">
                            <label className="feedback-label">Any comments, questions or suggestions ?</label>
                            <textarea 
                                className="feedback-textarea"
                                rows="6"
                            ></textarea>
                        </div>
                        
                        <div className="form-row">
                            <button type="submit" className="feedback-submit-btn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}