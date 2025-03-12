import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
    const navigate = useNavigate();

    return (
        <div className="terms-page">
            <button onClick={() => navigate(-1)} className="back-button">
                Back
            </button>
            <h1>Terms of Service</h1>
            <p><strong>Last Updated:</strong> 3/12/2025</p>

            <p>
                These Terms of Service ("Agreement") constitute a legally binding contract between you ("User", "you", or "your") and Maha Naga Kali LLC, doing business as Vreels ("we", "us", or "our"). By accessing or using our website, mobile application, or any other related services (collectively, the "Services"), you agree to be bound by this Agreement. If you do not agree to these terms, you must not use our Services.
            </p>

            <h2>1. Overview of the Agreement</h2>
            <p>
                This Agreement sets forth the terms, conditions, and policies that govern your access to and use of the Services provided by vreels. It is designed to inform you of your rights and responsibilities while using our Services and to ensure a fair and safe environment for all users. We reserve the right to modify, update, or change this Agreement at any time, and your continued use of the Services will be deemed acceptance of those changes.
            </p>

            <h2>2. Acceptance of Terms by Users</h2>
            <p>
                By using our Services, you confirm that you have read, understood, and agree to be bound by this Agreement, including any future modifications. If you do not agree with any of the terms, you must immediately cease using our Services. Your use of our Services indicates that you are of legal age to form a binding contract and that you have the authority to enter into this Agreement.
            </p>

            <h2>3. Eligibility</h2>
            <p>
                You represent and warrant that you are at least 18 years of age, or if under 18, that you have obtained the consent of a parent or legal guardian to use our Services. By agreeing to these Terms, you represent that you have the legal capacity to enter into this Agreement and comply with its terms.
            </p>

            <h2>4. Account Registration and Security</h2>
            <p>
                <strong>Account Creation:</strong> In order to access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and update such information to keep it accurate.
            </p>
            <p>
                <strong>Security:</strong> You are responsible for maintaining the confidentiality of your account credentials, including your password, and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use or security breach related to your account.
            </p>

            <h2>5. User Conduct and Content</h2>
            <p>
                <strong>Acceptable Use:</strong> You agree to use the Services only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else’s use and enjoyment of the Services.
            </p>
            <p>
                <strong>User-Generated Content:</strong> Any content you submit, post, or display on or through our Services ("User Content") remains your property. However, by submitting User Content, you grant vreels a non-exclusive, worldwide, royalty-free, transferable, sublicensable license to use, reproduce, distribute, display, and perform your User Content solely for the purpose of operating, promoting, and improving our Services.
            </p>
            <p>
                <strong>Prohibited Activities:</strong> You agree not to engage in any activity that interferes with or disrupts the Services, including but not limited to the transmission of harmful or disruptive content, harassment of other users, or the infringement of any intellectual property rights.
            </p>

            <h2>6. Intellectual Property Rights</h2>
            <p>
                All content, trademarks, service marks, logos, and other intellectual property on the Services are the property of vreels or its licensors. You are granted a limited, non-exclusive, and non-transferable license to access and use the Services for your personal, non-commercial use, subject to the restrictions outlined in this Agreement.
            </p>

            <h2>7. Disclaimers and Limitation of Liability</h2>
            <p>
                <strong>No Warranties:</strong> The Services are provided "as is" without warranty of any kind, either express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p>
                <strong>Limitation of Liability:</strong> In no event shall vreels be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Services, even if advised of the possibility of such damages.
            </p>

            <h2>8. Indemnification</h2>
            <p>
                You agree to indemnify, defend, and hold harmless vreels, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, or expenses arising out of or in any way connected with your use of the Services or your violation of this Agreement.
            </p>

            <h2>9. Termination</h2>
            <p>
                We reserve the right to suspend or terminate your access to the Services at our sole discretion, without notice, for conduct that we believe violates this Agreement or is harmful to other users, vreels, or third parties. Upon termination, all rights granted to you under this Agreement will immediately cease.
            </p>

            <h2>10. Governing Law and Dispute Resolution</h2>
            <p>
                This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which vreels operates, without regard to its conflict of laws provisions. Any disputes arising under or in connection with this Agreement shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration body.
            </p>

            <h2>11. Modifications to the Terms</h2>
            <p>
                Vreels reserves the right to change or update this Agreement at any time. Any modifications will be effective immediately upon posting the updated Agreement on our Services. Your continued use of the Services following any such changes constitutes your acceptance of the new terms.
            </p>

            <h2>12. Contact Information</h2>
            <p>
                If you have any questions or concerns about these Terms of Service, please contact us at:
            </p>
            <p>
                Maha Nagi Kali LLC, DBA Vreels<br />
                200 W J Boaz Rd, Saginaw, TX 76179<br />
                <a href="mailto:mnkllc@vreels.com">mnkllc@vreels.com</a>
            </p>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#333', // Dark text color
        backgroundColor: '#fff', // White background
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
    text: {
        marginBottom: '15px',
        color: '#333', // Dark text color
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

export default TermsAndConditions;