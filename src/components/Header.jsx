import { Sun, Moon, Globe } from 'lucide-react';

// Header Component
const Header = ({ language, theme, onLanguageToggle, onThemeToggle, t, currentTheme }) => {
    return (
        <div style={{
            borderBottom: `1px solid ${currentTheme.border}`,
            padding: '15px 0',
            marginBottom: '20px',
            backgroundColor: currentTheme.surface
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px',
                    flexWrap: 'wrap',
                    gap: '10px'
                }}>
                    <h1 style={{
                        margin: 0,
                        fontSize: 'clamp(20px, 4vw, 28px)',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        flex: '1',
                        minWidth: '200px'
                    }}>
                        {t.title}
                    </h1>
                    <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
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
                            title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                        >
                            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                        </button>
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
                            title={language === 'ar' ? 'English' : 'العربية'}
                        >
                            <Globe size={16} />
                            {language === 'ar' ? 'EN' : 'عر'}
                        </button>
                    </div>
                </div>
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