// Footer Component
const Footer = ({ t, currentTheme }) => {
    return (
        <div style={{
            borderTop: `1px solid ${currentTheme.border}`,
            marginTop: '50px',
            padding: '20px 0',
            backgroundColor: currentTheme.surface,
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <p style={{
                    margin: 0,
                    fontSize: '14px',
                    color: currentTheme.textSecondary
                }}>
                    {t.footerText}
                </p>
            </div>
        </div>
    );
};

export default Footer;
