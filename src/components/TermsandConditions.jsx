import React from 'react';

function TermsAndConditions() {
    return (
        <div className="terms-container">
            <h1>Terms and Conditions</h1>
            <p>
                By using this service, you agree to the following terms:
            </p>
            <h2>Opt-In via SMS</h2>
            <p>
                A potential subscriber can provide their consent to opt-in via SMS by texting the keyword provided to the short code. Standard messaging rates may apply.
            </p>
            <h2>2FA/OTP</h2>
            <p>
                For 2FA/OTP, a potential subscriber will receive an initial text message containing a one-time password (OTP) to verify their identity.
            </p>
            <h2>QR Code</h2>
            <p>
                A potential customer can find the QR code displayed on our website or at physical locations. Scanning the QR code will direct them to the opt-in page.
            </p>
            <p>
                For more information, please contact us at support@vreels.com.
            </p>
        </div>
    );
}

export default TermsAndConditions;
