import { Save, X } from 'lucide-react';

// Component for creating a new note
const CreateNoteForm = ({ newNote, onNoteChange, onSave, onCancel, t, currentTheme }) => {
    return (
        <div>
            {/* Form title */}
            <h2 style={{
                margin: '0 0 20px 0',
                fontSize: 'clamp(18px, 4vw, 24px)',
                fontWeight: 'bold'
            }}>
                {t.createNewNote}
            </h2>

            {/* Note title input field */}
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: 'clamp(14px, 2.5vw, 16px)' }}>
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
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        fontFamily: 'inherit',
                        backgroundColor: currentTheme.background,
                        color: currentTheme.text,
                        borderRadius: '4px',
                        boxSizing: 'border-box'
                    }}
                    autoFocus
                    placeholder={t.titlePlaceholder}
                />
            </div>

            {/* Note content textarea */}
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: 'clamp(14px, 2.5vw, 16px)' }}>
                    {t.noteContent}
                </label>
                <textarea
                    value={newNote.content}
                    onChange={(e) => onNoteChange({ ...newNote, content: e.target.value })}
                    style={{
                        width: '100%',
                        height: 'clamp(250px, 40vh, 300px)',
                        padding: '12px',
                        border: `1px solid ${currentTheme.border}`,
                        fontSize: 'clamp(13px, 2.5vw, 14px)',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                        backgroundColor: currentTheme.background,
                        color: currentTheme.text,
                        borderRadius: '4px',
                        boxSizing: 'border-box'
                    }}
                    placeholder={t.contentPlaceholder}
                />
            </div>

            {/* Buttons container */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {/* Save button */}
                <button
                    onClick={onSave}
                    style={{
                        backgroundColor: currentTheme.primary,
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        minWidth: '120px',
                        justifyContent: 'center'
                    }}
                >
                    <Save size={16} /> {/* Icon from lucide-react */}
                    {t.saveNote}
                </button>

                {/* Cancel button */}
                <button
                    onClick={onCancel}
                    style={{
                        backgroundColor: currentTheme.textSecondary,
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        minWidth: '120px',
                        justifyContent: 'center'
                    }}
                >
                    <X size={16} /> {/* Icon from lucide-react */}
                    {t.cancel}
                </button>
            </div>
        </div>
    );
};

export default CreateNoteForm;
