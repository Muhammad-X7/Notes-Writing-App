import NoteActions from './NoteActions';

// Note Viewer Component
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
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '20px',
                flexDirection: isRTL ? 'row-reverse' : 'row'
            }}>
                <div style={{ flex: 1 }}>
                    {isEditing ? (
                        <input
                            type="text"
                            value={note.title}
                            onChange={(e) => onNoteUpdate(note.id, { title: e.target.value })}
                            style={{
                                width: '100%',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                border: `1px solid ${currentTheme.border}`,
                                padding: '8px',
                                fontFamily: 'inherit',
                                backgroundColor: currentTheme.background,
                                color: currentTheme.text,
                                borderRadius: '4px'
                            }}
                        />
                    ) : (
                        <h2 style={{
                            margin: '0',
                            fontSize: '24px',
                            fontWeight: 'bold'
                        }}>
                            {note.title}
                            {note.isFavorite && (
                                <span style={{ color: currentTheme.warning, margin: isRTL ? '0 10px 0 0' : '0 0 0 10px' }}>★</span>
                            )}
                        </h2>
                    )}
                </div>

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

            <div style={{ marginBottom: '20px' }}>
                {isEditing ? (
                    <textarea
                        value={note.content}
                        onChange={(e) => onNoteUpdate(note.id, { content: e.target.value })}
                        style={{
                            width: '100%',
                            height: '400px',
                            padding: '12px',
                            border: `1px solid ${currentTheme.border}`,
                            fontSize: '14px',
                            fontFamily: 'inherit',
                            resize: 'vertical',
                            backgroundColor: currentTheme.background,
                            color: currentTheme.text,
                            borderRadius: '4px'
                        }}
                    />
                ) : (
                    <div style={{
                        border: `1px solid ${currentTheme.borderLight}`,
                        padding: '20px',
                        backgroundColor: currentTheme.noteBackground,
                        minHeight: '300px',
                        borderRadius: '4px'
                    }}>
                        <pre style={{
                            whiteSpace: 'pre-wrap',
                            fontFamily: 'inherit',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            margin: 0,
                            color: currentTheme.text
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

            <div style={{
                borderTop: `1px solid ${currentTheme.borderLight}`,
                paddingTop: '15px',
                fontSize: '12px',
                color: currentTheme.textSecondary
            }}>
                <p style={{ margin: '0 0 5px 0' }}>
                    <strong>{t.createdAt}</strong> {new Date(note.createdAt).toLocaleDateString(language === 'ar' ? 'ar' : 'en')} {new Date(note.createdAt).toLocaleTimeString(language === 'ar' ? 'ar' : 'en')}
                </p>
                <p style={{ margin: 0 }}>
                    <strong>{t.lastUpdated}</strong> {new Date(note.updatedAt).toLocaleDateString(language === 'ar' ? 'ar' : 'en')} {new Date(note.updatedAt).toLocaleTimeString(language === 'ar' ? 'ar' : 'en')}
                </p>
            </div>
        </div>
    );
};

export default NoteViewer;