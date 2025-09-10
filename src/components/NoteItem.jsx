/**
 * Component representing a single note item in the list
 * Props:
 * - note: note object containing title, content, isFavorite, updatedAt
 * - isSelected: whether this note is currently selected
 * - onClick: function to handle note selection
 * - isRTL: boolean indicating right-to-left layout
 * - language: current language ('ar' or 'en') for date formatting
 * - currentTheme: object with colors for styling
 */
const NoteItem = ({ note, isSelected, onClick, isRTL, language, currentTheme }) => {
    return (
        <li style={{ marginBottom: '15px' }}>
            {/* Note container */}
            <div style={{
                border: isSelected ? `2px solid ${currentTheme.primary}` : `1px solid ${currentTheme.borderLight}`, // highlight if selected
                padding: '15px',
                backgroundColor: isSelected ? currentTheme.surfaceHover : currentTheme.noteBackground,
                borderRadius: '4px',
                cursor: 'pointer'
            }}>
                {/* Note title button */}
                <button
                    onClick={() => onClick(note)}
                    style={{
                        color: currentTheme.primary,
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        marginBottom: '5px',
                        display: 'block',
                        textAlign: isRTL ? 'right' : 'left',
                        width: '100%'
                    }}
                    // underline on hover
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                >
                    {note.title} {/* Display title */}
                    {note.isFavorite && ' ★'} {/* Show star if favorite */}
                </button>

                {/* Note content preview */}
                <p style={{
                    margin: '5px 0 8px 0',
                    fontSize: '14px',
                    color: currentTheme.textSecondary,
                    lineHeight: '1.4'
                }}>
                    {note.content.substring(0, 100)}{note.content.length > 100 ? '...' : ''} {/* Truncate content */}
                </p>

                {/* Last updated date */}
                <small style={{ color: currentTheme.textMuted, fontSize: '12px' }}>
                    {new Date(note.updatedAt).toLocaleDateString(language === 'ar' ? 'ar' : 'en')}
                </small>
            </div>
        </li>
    );
};

export default NoteItem;
