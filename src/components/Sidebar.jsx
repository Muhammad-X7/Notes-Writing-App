import SearchBox from "./SearchBox";
import NotesList from "./NotesList";
import Navigation from "./Navigation";

// Sidebar Component
const Sidebar = ({
    notes,
    selectedNote,
    onNoteSelect,
    searchTerm,
    onSearchChange,
    showFavorites,
    onToggleFavorites,
    onNewNote,
    language,
    isRTL,
    t,
    currentTheme
}) => {
    return (
        <div style={{ width: '300px', flexShrink: 0, order: isRTL ? 2 : 1 }}>
            <Navigation
                t={t}
                onNewNote={onNewNote}
                showFavorites={showFavorites}
                onToggleFavorites={onToggleFavorites}
                currentTheme={currentTheme}
            />

            <SearchBox
                t={t}
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
                isRTL={isRTL}
                currentTheme={currentTheme}
            />

            <NotesList
                notes={notes}
                selectedNote={selectedNote}
                onNoteSelect={onNoteSelect}
                searchTerm={searchTerm}
                showFavorites={showFavorites}
                language={language}
                isRTL={isRTL}
                t={t}
                currentTheme={currentTheme}
            />
        </div>
    );
};

export default Sidebar;