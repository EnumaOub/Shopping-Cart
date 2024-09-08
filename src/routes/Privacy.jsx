import styled from 'styled-components';

export default function Privacy() {
    return (
        <StyledPrivacy>
            <h1>Privacy Policy</h1>
            <p>
                Welcome to Mystic Emporium's privacy policy page. This page outlines how we handle
                your personal information when you visit or make a purchase from our website.
            </p>
            <SectionTitle>1. Information We Collect</SectionTitle>
            <p>
                When you visit our site, we collect information about your device, including information
                about your web browser, IP address, time zone, and some cookies installed on your device.
                Additionally, we collect information about individual pages or products that you view,
                what websites or search terms referred you to the site, and information about how you
                interact with the site.
            </p>

            <SectionTitle>2. How We Use Your Information</SectionTitle>
            <p>
                We use the information we collect to process your orders, provide customer service, and
                improve your shopping experience. Your information is not shared with any third parties
                except as necessary to fulfill your order (for example, shipping companies).
            </p>

            <SectionTitle>3. Cookies</SectionTitle>
            <p>
                We use cookies to remember your login information and personalize your shopping experience.
                You can disable cookies in your browser settings, but doing so may limit your ability to
                use certain features of our website.
            </p>

            <SectionTitle>4. Data Retention</SectionTitle>
            <p>
                We retain your order information for our records unless and until you ask us to delete this
                information.
            </p>

            <SectionTitle>5. Your Rights</SectionTitle>
            <p>
                You have the right to access the personal information we hold about you and to ask that
                your personal information be corrected, updated, or deleted. If you would like to exercise
                this right, please contact us through the contact information on our site.
            </p>

            <SectionTitle>6. Changes to Our Policy</SectionTitle>
            <p>
                We may update this privacy policy from time to time in order to reflect changes to our
                practices or for other operational, legal, or regulatory reasons.
            </p>

            <p>
                If you have any questions or concerns, please contact us.
            </p>
        </StyledPrivacy>
    );
};

// Styled components
const StyledPrivacy = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  text-align: left;
  background-color: #f8f4ea;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-family: 'MedievalSharp', cursive;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 15px;
    line-height: 1.6;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-top: 20px;
`;