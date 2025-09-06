import { create } from 'zustand';
import { nanoid } from './utils';

// helpers
const persisted = (key, initial) => {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : initial;
    } catch {
        return initial;
    }
};

export const useStore = create((set, get) => ({
    notes: persisted('notes', []),
    theme: persisted('theme', 'light'),
    lang: persisted('lang', 'en'),
    search: '',
    activeId: null,

    setSearch: (q) => set({ search: q }),
    setTheme: (t) => {
        localStorage.setItem('theme', JSON.stringify(t));
        set({ theme: t });
        document.documentElement.classList.toggle('dark', t === 'dark');
        document.documentElement.setAttribute('dir', get().lang === 'ar' ? 'rtl' : 'ltr');
    },
    setLang: (l) => {
        localStorage.setItem('lang', JSON.stringify(l));
        set({ lang: l });
        document.documentElement.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
    },

    createNote: () => {
        const id = nanoid();
        const now = new Date().toISOString();
        const n = { id, title: 'Untitled', content: '', tags: [], pinned: false, favorite: false, createdAt: now, updatedAt: now };
        const notes = [n, ...get().notes];
        localStorage.setItem('notes', JSON.stringify(notes));
        set({ notes, activeId: id });
        return id;
    },

    updateNote: (id, patch) => {
        const notes = get().notes.map(n => n.id === id ? { ...n, ...patch, updatedAt: new Date().toISOString() } : n);
        localStorage.setItem('notes', JSON.stringify(notes));
        set({ notes });
    },

    deleteNote: (id) => {
        const notes = get().notes.filter(n => n.id !== id);
        localStorage.setItem('notes', JSON.stringify(notes));
        set({ notes, activeId: null });
    },

    setActive: (id) => set({ activeId: id }),

    toggleTag: (id, tag) => {
        const { notes } = get();
        const next = notes.map(n => n.id === id ? { ...n, tags: n.tags.includes(tag) ? n.tags.filter(t => t !== tag) : [...n.tags, tag] } : n);
        localStorage.setItem('notes', JSON.stringify(next));
        set({ notes: next });
    }
}));
