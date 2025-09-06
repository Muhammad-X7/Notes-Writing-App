import { Save, X } from 'lucide-react';

// Create Note Form Component
const CreateNoteForm = ({ newNote, onNoteChange, onSave, onCancel, t, currentTheme }) => {
    return (
        <div>
            <h2 style={{ margin: '0 0 20px 0', fontSize: '24px', fontWeight: 'bold' }}>
                {t.createNewNote}
            </h2>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    {t.noteTitle}
                </label>
                <input
                    type="text"
                    value={newNote.title}
                    onChange={(e) => onNoteChange({ ...newNote, title: e.target.value })}
                    style={{
                        width: '100%',
                        padding: '12px',
                        border: `1px solid ${currentTheme.border}`,
                        fontSize: '16px',
                        fontFamily: 'inherit',
                        backgroundColor: currentTheme.background,
                        color: currentTheme.text,
                        borderRadius: '4px'
                    }}
                    autoFocus
                    placeholder={t.titlePlaceholder}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    {t.noteContent}
                </label>
                <textarea
                    value={newNote.content}
                    onChange={(e) => onNoteChange({ ...newNote, content: e.target.value })}
                    style={{
                        width: '100%',
                        height: '300px',
                        padding: '12px',
                        border: `1px solid ${currentTheme.border}`,
                        fontSize: '14px',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                        backgroundColor: currentTheme.background,
                        color: currentTheme.text,
                        borderRadius: '4px'
                    }}
                    placeholder={t.contentPlaceholder}
                />
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
                <button
                    onClick={onSave}
                    style={{
                        backgroundColor: currentTheme.primary,
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    <Save size={16} />
                    {t.saveNote}
                </button>
                <button
                    onClick={onCancel}
                    style={{
                        backgroundColor: currentTheme.textSecondary,
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    <X size={16} />
                    {t.cancel}
                </button>
            </div>
        </div>
    );
};

export default CreateNoteForm;