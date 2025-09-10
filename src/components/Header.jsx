import { Sun, Moon, Globe } from 'lucide-react';

// Header Component
// Props:
// - language: current language ('ar' or 'en')
// - theme: current theme ('light' or 'dark')
// - onLanguageToggle: function to toggle language
// - onThemeToggle: function to toggle theme
// - t: translation object with title/subtitle text
// - currentTheme: object with colors for styling
const Header = ({ language, theme, onLanguageToggle, onThemeToggle, t, currentTheme }) => {
    return (
        <div style={{
            borderBottom: `1px solid ${currentTheme.border}`, // bottom border for header
            padding: '15px 0',
            marginBottom: '20px',
            backgroundColor: currentTheme.surface // header background
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between', // space between title and buttons
                    alignItems: 'center',
                    marginBottom: '10px',
                    flexWrap: 'wrap',
                    gap: '10px'
                }}>
                    {/* Main title */}
                    <h1 style={{
                        margin: 0,
                        fontSize: 'clamp(20px, 4vw, 28px)', // responsive font size
                        fontWeight: 'bold',
                        textAlign: 'center',
                        flex: '1',       // take available space
                        minWidth: '200px'
                    }}>
                        {t.title}
                    </h1>

                    {/* Buttons container */}
                    <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                        {/* Theme toggle button */}
                        <button
                            onClick={onThemeToggle}
                            style={{
                                backgroundColor: currentTheme.primary,
                                color: 'white',
                                border: 'none',
                                padding: '8px 12px',
                                fontSize: '14px',
                                cursor: 'pointer',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                minWidth: '45px'
                            }}
                            title={theme === 'light' ? 'Dark Mode' : 'Light Mode'} // tooltip
                        >
                            {/* Icon changes based on current theme */}
                            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                        </button>

                        {/* Language toggle button */}
                        <button
                            onClick={onLanguageToggle}
                            style={{
                                backgroundColor: currentTheme.primary,
                                color: 'white',
                                border: 'none',
                                padding: '8px 12px',
                                fontSize: '14px',
                                cursor: 'pointer',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                minWidth: '60px'
                            }}
                            title={language === 'ar' ? 'English' : 'العربية'} // tooltip
                        >
                            <Globe size={16} />
                            {language === 'ar' ? 'EN' : 'عر'} {/* Button label */}
                        </button>
                    </div>
                </div>

                {/* Subtitle */}
                <p style={{
                    margin: '0',
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    color: currentTheme.textSecondary,
                    textAlign: 'center'
                }}>
                    {t.subtitle}
                </p>
            </div>
        </div>
    );
};

export default Header;
