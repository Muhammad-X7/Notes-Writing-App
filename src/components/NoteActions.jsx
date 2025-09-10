import { Star, Save, Edit, Trash2 } from 'lucide-react';

/**
 * Component for note action buttons: favorite, edit/save, delete
 * Props:
 * - note: the current note object
 * - isEditing: whether the note is currently being edited
 * - onEdit: function to start editing
 * - onSave: function to save changes
 * - onDelete: function to delete note
 * - onToggleFavorite: function to toggle favorite status
 * - isRTL: boolean indicating right-to-left layout
 * - t: translation object for tooltips/text
 * - currentTheme: object with colors for styling
 */
const NoteActions = ({ note, isEditing, onEdit, onSave, onDelete, onToggleFavorite, isRTL, t, currentTheme }) => {
    return (
        <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: isRTL ? 'flex-start' : 'flex-end', // adjust alignment for RTL
            marginTop: '10px'
        }}>
            {/* Favorite button */}
            <button
                onClick={() => onToggleFavorite(note.id)}
                style={{
                    backgroundColor: note.isFavorite ? currentTheme.warning : currentTheme.borderLight,
                    color: note.isFavorite ? 'white' : currentTheme.textSecondary,
                    border: 'none',
                    padding: '8px 12px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    minWidth: '40px'
                }}
                title={note.isFavorite ? t.removeFromFavorites : t.addToFavorites} // tooltip
            >
                <Star size={16} /> {/* Star icon */}
            </button>

            {/* Edit or Save button */}
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
                        borderRadius: '4px',
                        minWidth: '40px'
                    }}
                    title={t.save} // tooltip
                >
                    <Save size={16} /> {/* Save icon */}
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
                        borderRadius: '4px',
                        minWidth: '40px'
                    }}
                    title={t.edit} // tooltip
                >
                    <Edit size={16} /> {/* Edit icon */}
                </button>
            )}

            {/* Delete button */}
            <button
                onClick={() => onDelete(note.id)}
                style={{
                    backgroundColor: currentTheme.danger,
                    color: 'white',
                    border: 'none',
                    padding: '8px 12px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    minWidth: '40px'
                }}
                title={t.delete} // tooltip
            >
                <Trash2 size={16} /> {/* Trash icon */}
            </button>
        </div>
    );
};

export default NoteActions;
