import { Star, Save, Edit, Trash2 } from 'lucide-react';

// Note Actions Component
const NoteActions = ({ note, isEditing, onEdit, onSave, onDelete, onToggleFavorite, isRTL, t, currentTheme }) => {
    return (
        <div style={{ display: 'flex', gap: '10px', margin: isRTL ? '0 20px 0 0' : '0 0 0 20px' }}>
            <button
                onClick={() => onToggleFavorite(note.id)}
                style={{
                    backgroundColor: note.isFavorite ? currentTheme.warning : currentTheme.borderLight,
                    color: note.isFavorite ? 'white' : currentTheme.textSecondary,
                    border: 'none',
                    padding: '8px 12px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    borderRadius: '4px'
                }}
                title={note.isFavorite ? t.removeFromFavorites : t.addToFavorites}
            >
                <Star size={16} />
            </button>

            {isEditing ? (
                <button
                    onClick={onSave}
                    style={{
                        backgroundColor: currentTheme.success,
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        borderRadius: '4px'
                    }}
                    title={t.save}
                >
                    <Save size={16} />
                </button>
            ) : (
                <button
                    onClick={onEdit}
                    style={{
                        backgroundColor: currentTheme.primary,
                        color: 'white',
                        border: 'none',
                        padding: '8px 12px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        borderRadius: '4px'
                    }}
                    title={t.edit}
                >
                    <Edit size={16} />
                </button>
            )}

            <button
                onClick={() => onDelete(note.id)}
                style={{
                    backgroundColor: currentTheme.danger,
                    color: 'white',
                    border: 'none',
                    padding: '8px 12px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    borderRadius: '4px'
                }}
                title={t.delete}
            >
                <Trash2 size={16} />
            </button>
        </div>
    );
};

export default NoteActions;
