import SearchBox from "./SearchBox";
import NotesList from "./NotesList";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";

/**
 * Sidebar Component
 * Props:
 * - notes: array of note objects
 * - selectedNote: currently selected note
 * - onNoteSelect: callback to select a note
 * - searchTerm: current search input
 * - onSearchChange: callback when search input changes
 * - showFavorites: boolean to filter favorites
 * - onToggleFavorites: callback to toggle favorites filter
 * - onNewNote: callback to create a new note
 * - language: current language ('ar' or 'en')
 * - isRTL: boolean for right-to-left layout
 * - t: translation object for labels/text
 * - currentTheme: theme object for colors
 */
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
    // Detect if the screen is mobile-sized
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // update on resize
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{
            width: '100%',
            maxWidth: '300px', // Sidebar max width
            marginBottom: isMobile ? '20px' : '0' // extra bottom margin on mobile
        }}>
            {/* Navigation buttons: New Note, toggle favorites */}
            <Navigation
                t={t}
                onNewNote={onNewNote}
                showFavorites={showFavorites}
                onToggleFavorites={onToggleFavorites}
                currentTheme={currentTheme}
            />

            {/* Search input */}
            <SearchBox
                t={t}
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
                isRTL={isRTL}
                currentTheme={currentTheme}
            />

            {/* List of notes */}
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