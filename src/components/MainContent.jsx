import WelcomeScreen from "./WelcomeScreen";
import CreateNoteForm from "./CreateNoteForm";
import NoteViewer from "./NoteViewer";

// Main Content Component
const MainContent = ({
    isCreating,
    selectedNote,
    isEditing,
    newNote,
    onNewNoteChange,
    onCreateNote,
    onCancelCreate,
    onNoteUpdate,
    onEditingChange,
    onDeleteNote,
    onToggleFavorite,
    onStartCreate,
    language,
    isRTL,
    t,
    currentTheme
}) => {
    return (
        <div style={{ flex: 1, order: isRTL ? 1 : 2 }}>
            {isCreating ? (
                <CreateNoteForm
                    newNote={newNote}
                    onNoteChange={onNewNoteChange}
                    onSave={onCreateNote}
                    onCancel={onCancelCreate}
                    t={t}
                    currentTheme={currentTheme}
                />
            ) : selectedNote ? (
                <NoteViewer
                    note={selectedNote}
                    isEditing={isEditing}
                    onNoteUpdate={onNoteUpdate}
                    onEdit={onEditingChange}
                    onSave={onEditingChange}
                    onDelete={onDeleteNote}
                    onToggleFavorite={onToggleFavorite}
                    language={language}
                    isRTL={isRTL}
                    t={t}
                    currentTheme={currentTheme}
                />
            ) : (
                <WelcomeScreen
                    onCreateNote={onStartCreate}
                    t={t}
                    currentTheme={currentTheme}
                />
            )}
        </div>
    );
};

export default MainContent;
