// Local Storage keys used in the app
export const STORAGE_KEYS = {
    NOTES: 'notesApp_notes',                // Stores all notes
    LANGUAGE: 'notesApp_language',          // Stores current language
    THEME: 'notesApp_theme',                // Stores current theme (light/dark)
    SEARCH_TERM: 'notesApp_searchTerm',     // Stores search term input
    SHOW_FAVORITES: 'notesApp_showFavorites', // Stores filter state for favorites
    SELECTED_NOTE_ID: 'notesApp_selectedNoteId' // Stores currently selected note ID
};

/**
 * Load a value from localStorage
 * @param {string} key - Key to retrieve
 * @param {any} defaultValue - Default value if key not found
 * @returns Parsed value from localStorage or defaultValue
 */
export const loadFromStorage = (key, defaultValue) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.warn(`Error loading ${key} from localStorage:`, error);
        return defaultValue;
    }
};

/**
 * Save a value to localStorage
 * @param {string} key - Key to save
 * @param {any} value - Value to save
 */
export const saveToStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn(`Error saving ${key} to localStorage:`, error);
    }
};

/**
 * Clear all app-related data from localStorage
 */
export const clearStorage = () => {
    try {
        Object.values(STORAGE_KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
    } catch (error) {
        console.warn('Error clearing localStorage:', error);
    }
};

/**
 * Export all app data from localStorage as an object
 * @returns {Object|null} Object containing all data or null on error
 */
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

/**
 * Import data into localStorage
 * @param {Object} data - Object containing keys matching STORAGE_KEYS
 * @returns {boolean} true if import successful, false on error
 */
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
