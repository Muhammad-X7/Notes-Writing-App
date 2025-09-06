// Note Item Component
const NoteItem = ({ note, isSelected, onClick, isRTL, language, currentTheme }) => {
    return (
        <li style={{ marginBottom: '15px' }}>
            <div style={{
                border: isSelected ? `2px solid ${currentTheme.primary}` : `1px solid ${currentTheme.borderLight}`,
                padding: '15px',
                backgroundColor: isSelected ? currentTheme.surfaceHover : currentTheme.noteBackground,
                borderRadius: '4px',
                cursor: 'pointer'
            }}>
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
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                >
                    {note.title}
                    {note.isFavorite && ' ★'}
                </button>
                <p style={{
                    margin: '5px 0 8px 0',
                    fontSize: '14px',
                    color: currentTheme.textSecondary,
                    lineHeight: '1.4'
                }}>
                    {note.content.substring(0, 100)}{note.content.length > 100 ? '...' : ''}
                </p>
                <small style={{ color: currentTheme.textMuted, fontSize: '12px' }}>
                    {new Date(note.updatedAt).toLocaleDateString(language === 'ar' ? 'ar' : 'en')}
                </small>
            </div>
        </li>
    );
};

export default NoteItem;