import SearchBox from "./SearchBox";
import NotesList from "./NotesList";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";

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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{
            width: '100%',
            maxWidth: '300px',
            marginBottom: isMobile ? '20px' : '0'
        }}>
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
