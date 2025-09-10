import { Plus } from 'lucide-react';

const WelcomeScreen = ({ onCreateNote, t, currentTheme }) => {
    return (
        <div style={{ textAlign: 'center', paddingTop: '80px' }}>
            <h2 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: currentTheme.text
            }}>
                {t.welcome}
            </h2>
            <p style={{
                fontSize: '18px',
                color: currentTheme.textSecondary,
                marginBottom: '30px',
                lineHeight: '1.6'
            }}>
                {t.welcomeMessage}
            </p>
            <button
                onClick={onCreateNote}
                style={{
                    backgroundColor: currentTheme.primary,
                    color: 'white',
                    border: 'none',
                    padding: '15px 30px',
                    fontSize: '18px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                <Plus size={20} />
                {t.createFirstNote}
            </button>
        </div>
    );
};

export default WelcomeScreen;