import NoteItem from "./NoteItem";

const NotesList = ({ notes, selectedNote, onNoteSelect, searchTerm, showFavorites, language, isRTL, t, currentTheme }) => {
    return (
        <div>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '18px', fontWeight: 'bold' }}>
                {t.notesCount} ({notes.length})
            </h3>

            {notes.length === 0 ? (
                <p style={{ color: currentTheme.textSecondary, fontSize: '14px', fontStyle: 'italic' }}>
                    {searchTerm ? t.noResults : showFavorites ? t.noFavorites : t.noNotes}
                </p>
            ) : (
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {notes.map(note => (
                        <NoteItem
                            key={note.id}
                            note={note}
                            isSelected={selectedNote?.id === note.id}
                            onClick={onNoteSelect}
                            isRTL={isRTL}
                            language={language}
                            currentTheme={currentTheme}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NotesList;
