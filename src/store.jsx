// ===== Import libraries =====
import { create } from 'zustand'; // Zustand for state management
import { nanoid } from './utils'; // Utility to generate unique IDs

// ===== Helper function: persist state to localStorage =====
const persisted = (key, initial) => {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : initial; // Return saved value or initial value
    } catch {
        return initial; // Fallback in case of JSON parsing errors
    }
};

// ===== Create Zustand store =====
export const useStore = create((set, get) => ({
    // ===== State variables =====
    notes: persisted('notes', []),       // All notes
    theme: persisted('theme', 'light'),  // Current theme: 'light' or 'dark'
    lang: persisted('lang', 'en'),       // Current language: 'en' or 'ar'
    search: '',                           // Current search query
    activeId: null,                       // ID of the currently active note

    // ===== Actions / Methods =====

    // Update search query
    setSearch: (q) => set({ search: q }),

    // Update theme and persist it
    setTheme: (t) => {
        localStorage.setItem('theme', JSON.stringify(t)); // Persist to localStorage
        set({ theme: t }); // Update state
        document.documentElement.classList.toggle('dark', t === 'dark'); // Toggle dark mode class
        document.documentElement.setAttribute('dir', get().lang === 'ar' ? 'rtl' : 'ltr'); // Update text direction
    },

    // Update language and persist it
    setLang: (l) => {
        localStorage.setItem('lang', JSON.stringify(l)); // Persist language
        set({ lang: l }); // Update state
        document.documentElement.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr'); // Set text direction
    },

    // Create a new note with default values
    createNote: () => {
        const id = nanoid(); // Generate unique ID
        const now = new Date().toISOString();
        const n = {
            id,
            title: 'Untitled',
            content: '',
            tags: [],
            pinned: false,
            favorite: false,
            createdAt: now,
            updatedAt: now
        };

        const notes = [n, ...get().notes]; // Add new note to the top
        localStorage.setItem('notes', JSON.stringify(notes)); // Persist notes
        set({ notes, activeId: id }); // Update state
        return id; // Return new note ID
    },

    // Update an existing note by ID
    updateNote: (id, patch) => {
        const notes = get().notes.map(n =>
            n.id === id ? { ...n, ...patch, updatedAt: new Date().toISOString() } : n
        );
        localStorage.setItem('notes', JSON.stringify(notes)); // Persist changes
        set({ notes }); // Update state
    },

    // Delete a note by ID
    deleteNote: (id) => {
        const notes = get().notes.filter(n => n.id !== id);
        localStorage.setItem('notes', JSON.stringify(notes)); // Persist changes
        set({ notes, activeId: null }); // Clear active note if deleted
    },

    // Set the active note ID
    setActive: (id) => set({ activeId: id }),

    // Toggle a tag for a specific note
    toggleTag: (id, tag) => {
        const { notes } = get();
        const next = notes.map(n =>
            n.id === id
                ? {
                    ...n,
                    tags: n.tags.includes(tag) ? n.tags.filter(t => t !== tag) : [...n.tags, tag]
                }
                : n
        );
        localStorage.setItem('notes', JSON.stringify(next)); // Persist changes
        set({ notes: next }); // Update state
    }
}));
