import NoteActions from './NoteActions';

/**
 * Component to view or edit a single note
 * Props:
 * - note: the note object (title, content, dates, isFavorite)
 * - isEditing: whether the note is in edit mode
 * - onNoteUpdate: function to update note fields
 * - onEdit: function to enable editing
 * - onSave: function to save changes
 * - onDelete: function to delete note
 * - onToggleFavorite: function to toggle favorite status
 * - language: current language ('ar' or 'en')
 * - isRTL: boolean for right-to-left layout
 * - t: translation object for labels/text
 * - currentTheme: theme object for colors
 */
const NoteViewer = ({
    note,
    isEditing,
    onNoteUpdate,
    onEdit,
    onSave,
    onDelete,
    onToggleFavorite,
    language,
    isRTL,
    t,
    currentTheme
}) => {
    return (
        <div>
            {/* Header: Note title and actions */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '20px',
                flexDirection: 'column',
                gap: '15px'
            }}>
                <div style={{ flex: 1, width: '100%' }}>
                    {isEditing ? (
                        /* Editable title input */
                        <input
                            type="text"
                            value={note.title}
                            onChange={(e) => onNoteUpdate(note.id, { title: e.target.value })}
                            style={{
                                width: '100%',
                                fontSize: 'clamp(18px, 4vw, 24px)',
                                fontWeight: 'bold',
                                border: `1px solid ${currentTheme.border}`,
                                padding: '8px',
                                fontFamily: 'inherit',
                                backgroundColor: currentTheme.background,
                                color: currentTheme.text,
                                borderRadius: '4px',
                                boxSizing: 'border-box'
                            }}
                        />
                    ) : (
                        /* Display note title */
                        <h2 style={{
                            margin: '0',
                            fontSize: 'clamp(18px, 4vw, 24px)',
                            fontWeight: 'bold',
                            wordBreak: 'break-word'
                        }}>
                            {note.title}
                            {/* Show favorite star */}
                            {note.isFavorite && (
                                <span style={{ color: currentTheme.warning, margin: isRTL ? '0 10px 0 0' : '0 0 0 10px' }}>★</span>
                            )}
                        </h2>
                    )}
                </div>

                {/* Note action buttons: favorite, edit/save, delete */}
                <NoteActions
                    note={note}
                    isEditing={isEditing}
                    onEdit={() => onEdit(true)}
                    onSave={() => onSave(false)}
                    onDelete={onDelete}
                    onToggleFavorite={onToggleFavorite}
                    isRTL={isRTL}
                    t={t}
                    currentTheme={currentTheme}
                />
            </div>

            {/* Note content */}
            <div style={{ marginBottom: '20px' }}>
                {isEditing ? (
                    /* Editable textarea for content */
                    <textarea
                        value={note.content}
                        onChange={(e) => onNoteUpdate(note.id, { content: e.target.value })}
                        style={{
                            width: '100%',
                            height: 'clamp(300px, 50vh, 400px)',
                            padding: '12px',
                            border: `1px solid ${currentTheme.border}`,
                            fontSize: '14px',
                            fontFamily: 'inherit',
                            resize: 'vertical',
                            backgroundColor: currentTheme.background,
                            color: currentTheme.text,
                            borderRadius: '4px',
                            boxSizing: 'border-box'
                        }}
                    />
                ) : (
                    /* Display note content */
                    <div style={{
                        border: `1px solid ${currentTheme.borderLight}`,
                        padding: '20px',
                        backgroundColor: currentTheme.noteBackground,
                        minHeight: 'clamp(250px, 40vh, 300px)',
                        borderRadius: '4px',
                        overflow: 'auto'
                    }}>
                        <pre style={{
                            whiteSpace: 'pre-wrap',
                            fontFamily: 'inherit',
                            fontSize: 'clamp(13px, 2.5vw, 14px)',
                            lineHeight: '1.6',
                            margin: 0,
                            color: currentTheme.text,
                            wordBreak: 'break-word'
                        }}>
                            {note.content || (
                                <span style={{ color: currentTheme.textMuted, fontStyle: 'italic' }}>
                                    {t.noContent}
                                </span>
                            )}
                        </pre>
                    </div>
                )}
            </div>

            {/* Note metadata: createdAt and updatedAt */}
            <div style={{
                borderTop: `1px solid ${currentTheme.borderLight}`,
                paddingTop: '15px',
                fontSize: 'clamp(11px, 2vw, 12px)',
                color: currentTheme.textSecondary
            }}>
                <p style={{ margin: '0 0 5px 0', wordBreak: 'break-word' }}>
                    <strong>{t.createdAt}</strong> {new Date(note.createdAt).toLocaleDateString(language === 'ar' ? 'ar' : 'en')} {new Date(note.createdAt).toLocaleTimeString(language === 'ar' ? 'ar' : 'en')}
                </p>
                <p style={{ margin: 0, wordBreak: 'break-word' }}>
                    <strong>{t.lastUpdated}</strong> {new Date(note.updatedAt).toLocaleDateString(language === 'ar' ? 'ar' : 'en')} {new Date(note.updatedAt).toLocaleTimeString(language === 'ar' ? 'ar' : 'en')}
                </p>
            </div>
        </div>
    );
};

export default NoteViewer;
