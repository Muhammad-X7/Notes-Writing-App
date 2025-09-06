// Local Storage utilities
export const STORAGE_KEYS = {
    NOTES: 'notesApp_notes',
    LANGUAGE: 'notesApp_language',
    THEME: 'notesApp_theme',
    SEARCH_TERM: 'notesApp_searchTerm',
    SHOW_FAVORITES: 'notesApp_showFavorites',
    SELECTED_NOTE_ID: 'notesApp_selectedNoteId'
};

export const loadFromStorage = (key, defaultValue) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.warn(`Error loading ${key} from localStorage:`, error);
        return defaultValue;
    }
};

export const saveToStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn(`Error saving ${key} to localStorage:`, error);
    }
};

export const clearStorage = () => {
    try {
        Object.values(STORAGE_KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
    } catch (error) {
        console.warn('Error clearing localStorage:', error);
    }
};

export const exportData = () => {
    try {
        const data = {};
        Object.entries(STORAGE_KEYS).forEach(([name, key]) => {
            const item = localStorage.getItem(key);
            if (item) {
                data[name] = JSON.parse(item);
            }
        });
        return data;
    } catch (error) {
        console.warn('Error exporting data:', error);
        return null;
    }
};

export const importData = (data) => {
    try {
        Object.entries(STORAGE_KEYS).forEach(([name, key]) => {
            if (data[name] !== undefined) {
                localStorage.setItem(key, JSON.stringify(data[name]));
            }
        });
        return true;
    } catch (error) {
        console.warn('Error importing data:', error);
        return false;
    }
};