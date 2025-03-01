import { useEffect, useState } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LaunchPage.css';
import PropTypes from 'prop-types';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebaseConfig';

const LaunchPage = () => {
    const [countdown, setCountdown] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });
    const [email, setEmail] = useState('');
    const [isTermsExpanded, setIsTermsExpanded] = useState(false); // State for expandable Terms and Conditions

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Toast config
    const toastConfig = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        className: 'custom-toast',
        icon: false,
        style: {
            background: 'rgba(24, 24, 27, 0.9)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            borderRadius: '8px',
            padding: '12px 24px',
            color: '#fff'
        }
    };

    const ToastMessage = ({ icon, background, message }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ 
                background,
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px'
            }}>
                {icon}
            </span>
            <span>{message}</span>
        </div>
    );

    async function addEmail(email) {
        await addDoc(collection(db, "emails"), { email });
    }

    // Add PropTypes
    ToastMessage.propTypes = {
        icon: PropTypes.string.isRequired,
        background: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    };

    useEffect(() => {
        // Initialize particles
        if (window.particlesJS) {
            window.particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#4ecdc4'
                    },
                    shape: {
                        type: 'circle'
                    },
                    opacity: {
                        value: 0.5,
                        random: false
                    },
                    size: {
                        value: 3,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#4ecdc4',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    }
                },
                retina_detect: true
            });
        }

        // Countdown timer logic
        const calculateTimeLeft = () => {
            const launchDate = new Date('2025-03-15').getTime();
            const now = new Date().getTime();
            const difference = launchDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setCountdown({
                    days: days.toString().padStart(2, '0'),
                    hours: hours.toString().padStart(2, '0'),
                    minutes: minutes.toString().padStart(2, '0'),
                    seconds: seconds.toString().padStart(2, '0')
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Dismiss all existing toasts before showing new one
        toast.dismiss();
        
        // Check if email is empty
        if (!email.trim()) {
            toast.error(
                <ToastMessage 
                    icon="⚠️"
                    background="#FF4B4B"
                    message="Please fill out this field"
                />, 
                toastConfig
            );
            return;
        }
        
        // Then check if email is valid
        if (!emailRegex.test(email)) {
            toast.error(
                <ToastMessage 
                    icon="⚠️"
                    background="#FF4B4B"
                    message="Please enter a valid email address"
                />, 
                toastConfig
            );
            return;
        }

        // If email is valid, show success message
        addEmail(email);
        toast.success(
            <ToastMessage 
                icon="✓"
                background="#4ECE3D"
                message="Thank you for subscribing!"
            />,
            toastConfig
        );

        setEmail('');
    };

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                limit={1}
                hideProgressBar={true}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="dark"
                icon={false}
                transition={Slide}
                closeButton={false}
                style={{
                    width: 'auto',
                    padding: '12px'
                }}
            />
            <div className="particles-container" id="particles-js"></div>
            
            <main className="container">
                <div className="content">
                    <h1 className="logo animate-fade-in">VREELS</h1>
                    <div className="tagline animate-slide-up">
                        <h2>Something Amazing Is Coming</h2>
                        <p>We are crafting something extraordinary. Stay tuned for the revolution.</p>
                    </div>

                    <div className="countdown animate-fade-in">
                        <div className="countdown-item">
                            <span>{countdown.days}</span>
                            <span className="label">Days</span>
                        </div>
                        <div className="countdown-item">
                            <span>{countdown.hours}</span>
                            <span className="label">Hours</span>
                        </div>
                        <div className="countdown-item">
                            <span>{countdown.minutes}</span>
                            <span className="label">Minutes</span>
                        </div>
                        <div className="countdown-item">
                            <span>{countdown.seconds}</span>
                            <span className="label">Seconds</span>
                        </div>
                    </div>

                    <div className="notify-form animate-slide-up">
                        <h3>Get Notified When We Launch</h3>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                placeholder="Enter your email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit">Notify Me</button>
                        </form>
                    </div>

                    <div className="contact-info animate-fade-in">
                        <a href="mailto:mnkllc@vreels.com" className="email-link">
                            <i className="fas fa-envelope"></i>
                            mnkllc@vreels.com
                        </a>
                    </div>

                    <div className="social-links animate-fade-in">
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                    </div>
                    {/* Terms and Conditions Section */}
                    <div className="terms-link animate-fade-in">
                        By using this service, you agree to our{' '}
                        <button 
                            onClick={() => setIsTermsExpanded(!isTermsExpanded)} 
                            style={{ background: 'none', border: 'none', color: '#4ecdc4', cursor: 'pointer' }}
                        >
                            Terms and Conditions
                        </button>.
                    </div>

                    {/* Expandable Terms and Conditions Content */}
                    {isTermsExpanded && (
                        <div className="terms-content">
                            <h1>Terms and Conditions</h1>
                            <p>
                                By using this service, you agree to the following terms:
                            </p>
                            <h2>Opt-In via SMS</h2>
                            <p>
                                A potential subscriber can provide their consent to opt-in via SMS by texting the keyword provided to the short code. Standard messaging rates may apply.
                            </p>
                            <h2>OTP</h2>
                            <p>
                                For OTP, a potential subscriber will receive an initial text message containing a one-time password (OTP) to verify their identity. Standard messaging rates may apply.
                            </p>
                            <br />
                            <p>
                                For more information, please contact us at mnkllc@vreels.com.
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};

export default LaunchPage;