import { Search } from 'lucide-react';

/**
 * SearchBox Component
 * Props:
 * - t: translation object for labels and placeholders
 * - searchTerm: current search input value
 * - onSearchChange: callback function to update searchTerm
 * - isRTL: boolean indicating right-to-left layout
 * - currentTheme: theme object for colors
 */
const SearchBox = ({ t, searchTerm, onSearchChange, isRTL, currentTheme }) => {
    return (
        <div style={{ marginBottom: '30px' }}>
            {/* Search label */}
            <h3 style={{ margin: '0 0 15px 0', fontSize: '18px', fontWeight: 'bold' }}>
                {t.search}
            </h3>

            {/* Search input wrapper with icon */}
            <div style={{ position: 'relative' }}>
                {/* Search icon positioned inside the input */}
                <Search
                    size={16}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        [isRTL ? 'right' : 'left']: '8px', // support RTL layout
                        transform: 'translateY(-50%)',
                        color: currentTheme.textMuted
                    }}
                />

                {/* Search input */}
                <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    style={{
                        width: '100%',
                        padding: isRTL ? '8px 35px 8px 8px' : '8px 8px 8px 35px', // padding for icon
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