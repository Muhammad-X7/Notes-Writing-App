import { Search } from 'lucide-react';

// Search Component
const SearchBox = ({ t, searchTerm, onSearchChange, isRTL, currentTheme }) => {
    return (
        <div style={{ marginBottom: '30px' }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '18px', fontWeight: 'bold' }}>
                {t.search}
            </h3>
            <div style={{ position: 'relative' }}>
                <Search
                    size={16}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        [isRTL ? 'right' : 'left']: '8px',
                        transform: 'translateY(-50%)',
                        color: currentTheme.textMuted
                    }}
                />
                <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    style={{
                        width: '100%',
                        padding: isRTL ? '8px 35px 8px 8px' : '8px 8px 8px 35px',
                        border: `1px solid ${currentTheme.border}`,
                        fontSize: '14px',
                        fontFamily: 'inherit',
                        backgroundColor: currentTheme.background,
                        color: currentTheme.text,
                        borderRadius: '4px'
                    }}
                />
            </div>
        </div>
    );
};

export default SearchBox;