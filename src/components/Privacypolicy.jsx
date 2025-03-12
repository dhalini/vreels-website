import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <button onClick={() => navigate(-1)} style={styles.backButton}>
                Back
            </button>
            <h1 style={styles.heading}>Vreels Privacy Policy</h1>
            <p style={styles.text}><strong>Last Updated:</strong> 3/12/2025</p>

            <p style={styles.text}>
                This Privacy Policy (“Policy”) explains how Maha Nagi Kali LLC, doing business as Vreels (“we”, “us”, or “our”) collects, uses, discloses, and protects information about you when you access and use our website, mobile application, and related services (collectively, the “Services”). By using our Services, you agree to the collection and use of information in accordance with this Policy.
            </p>

            <h2 style={styles.subHeading}>1. Information We Collect</h2>
            <h3 style={styles.subSubHeading}>a. Information You Provide</h3>
            <p style={styles.text}>
                We may collect information that you directly provide to us, including but not limited to:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong>Account Information:</strong> Such as your name, email address, username, and password.</li>
                <li style={styles.listItem}><strong>Profile Data:</strong> Profile pictures, biographies, or other details you choose to share.</li>
                <li style={styles.listItem}><strong>User Content:</strong> Photos, videos, comments, and other content you upload or post.</li>
                <li style={styles.listItem}><strong>Communications:</strong> Information contained in messages, emails, or customer support interactions.</li>
            </ul>

            <h3 style={styles.subSubHeading}>b. Information We Collect Automatically</h3>
            <p style={styles.text}>
                When you access or use our Services, we automatically collect certain information, including:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong>Usage Data:</strong> Details of how you interact with our Services, such as the pages you visit, features you use, and the actions you take.</li>
                <li style={styles.listItem}><strong>Device Information:</strong> Information about the device you use to access our Services, such as device type, operating system, and unique device identifiers.</li>
                <li style={styles.listItem}><strong>Location Information:</strong> Data on your geographic location, if you permit location-based services.</li>
                <li style={styles.listItem}><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to collect information about your browsing activities. For more details, please see our Cookie Policy section below.</li>
            </ul>

            <h2 style={styles.subHeading}>2. How We Use Your Information</h2>
            <p style={styles.text}>
                We use the collected information for various purposes, including to:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}>Provide, maintain, and improve our Services.</li>
                <li style={styles.listItem}>Personalize your experience and deliver content tailored to your interests.</li>
                <li style={styles.listItem}>Communicate with you about updates, promotions, and news related to our Services.</li>
                <li style={styles.listItem}>Analyze usage patterns and trends to enhance our platform.</li>
                <li style={styles.listItem}>Enforce our Terms of Service and prevent fraud or other unauthorized activities.</li>
                <li style={styles.listItem}>Comply with legal obligations and protect our legal rights.</li>
            </ul>

            <h2 style={styles.subHeading}>3. How We Share Your Information</h2>
            <p style={styles.text}>
                We may share your information in the following circumstances:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}><strong>With Service Providers:</strong> We share information with third-party service providers who perform services on our behalf, such as hosting, data analysis, payment processing, and customer support.</li>
                <li style={styles.listItem}><strong>With Business Partners:</strong> In connection with certain partnerships, we may share data to provide integrated services or promotions.</li>
                <li style={styles.listItem}><strong>Legal Compliance:</strong> We may disclose your information when required by law, regulation, or legal process, or to protect the rights, property, or safety of vreels, our users, or others.</li>
                <li style={styles.listItem}><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.</li>
                <li style={styles.listItem}><strong>With Your Consent:</strong> We may share your information with third parties when you have provided your explicit consent to do so.</li>
            </ul>

            <h2 style={styles.subHeading}>4. Cookies and Tracking Technologies</h2>
            <p style={styles.text}>
                We use cookies and similar tracking technologies to enhance your experience on our Services. Cookies help us understand user behavior, remember your preferences, and provide personalized content. You can manage your cookie preferences through your browser settings. However, please note that disabling cookies may affect the functionality of our Services.
            </p>

            <h2 style={styles.subHeading}>5. Data Security and Retention</h2>
            <p style={styles.text}>
                We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. Despite these measures, no security system is impenetrable, and we cannot guarantee the absolute security of your data.
            </p>
            <p style={styles.text}>
                We retain your information for as long as necessary to fulfill the purposes outlined in this Policy unless a longer retention period is required or permitted by law.
            </p>

            <h2 style={styles.subHeading}>6. Your Rights and Choices</h2>
            <p style={styles.text}>
                Depending on your jurisdiction, you may have rights regarding your personal information, including the right to:
            </p>
            <ul style={styles.list}>
                <li style={styles.listItem}>Access, correct, or delete your personal data.</li>
                <li style={styles.listItem}>Restrict or object to the processing of your personal data.</li>
                <li style={styles.listItem}>Withdraw your consent, where applicable.</li>
                <li style={styles.listItem}>Lodge a complaint with a data protection authority.</li>
            </ul>
            <p style={styles.text}>
                To exercise any of these rights or for any questions about your personal data, please contact us using the information provided in the “Contact Us” section below.
            </p>

            <h2 style={styles.subHeading}>7. Children’s Privacy</h2>
            <p style={styles.text}>
                Our Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information without parental consent, please contact us immediately, and we will take steps to remove the information promptly.
            </p>

            <h2 style={styles.subHeading}>8. Changes to This Privacy Policy</h2>
            <p style={styles.text}>
                We may update this Privacy Policy from time to time. When we make changes, we will update the “Last Updated” date at the top of the Policy. We encourage you to review this Policy periodically to stay informed about how we are protecting your information. Your continued use of our Services after any changes constitutes your acceptance of the revised Policy.
            </p>

            <h2 style={styles.subHeading}>9. Contact Us</h2>
            <p style={styles.text}>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <p style={styles.text}>
                Maha Nagi Kali LLC, DBA Vreels<br />
                200 W J Boaz Rd, Saginaw, TX 76179<br />
                <a href="mailto:mnkllc@vreels.com" style={styles.link}>mnkllc@vreels.com</a>
            </p>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black background
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
        color: 'white', // White text
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#4ecdc4', // Teal color for the heading
    },
    subHeading: {
        fontSize: '1.8rem',
        marginTop: '30px',
        marginBottom: '15px',
        color: '#4ecdc4', // Teal color for subheadings
    },
    subSubHeading: {
        fontSize: '1.4rem',
        marginTop: '20px',
        marginBottom: '10px',
        color: '#4ecdc4', // Teal color for sub-subheadings
    },
    text: {
        marginBottom: '15px',
        color: 'white', // White text
    },
    list: {
        marginBottom: '20px',
        paddingLeft: '20px',
    },
    listItem: {
        marginBottom: '10px',
        color: 'white', // White text
    },
    link: {
        color: '#4ecdc4', // Teal color for links
        textDecoration: 'none',
    },
    backButton: {
        backgroundColor: '#4ecdc4',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '20px',
    },
};

export default PrivacyPolicy;