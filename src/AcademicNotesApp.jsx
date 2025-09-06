import { useState, useEffect, useMemo } from 'react';

import { STORAGE_KEYS, loadFromStorage, saveToStorage } from './components/localStorage';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

// Translation object
const translations = {
  ar: {
    title: 'تطبيق كتابة الملاحظات',
    subtitle: 'أداة بسيطة لحفظ وإدارة ملاحظاتك الشخصية',
    navigation: 'التنقل',
    newNote: 'ملاحظة جديدة',
    onlyFavorites: 'المفضلة فقط',
    allNotes: 'جميع الملاحظات',
    search: 'البحث',
    searchPlaceholder: 'ابحث في الملاحظات...',
    notesCount: 'الملاحظات',
    noResults: 'لا توجد نتائج للبحث',
    noFavorites: 'لا توجد ملاحظات مفضلة',
    noNotes: 'لا توجد ملاحظات بعد',
    createNewNote: 'إنشاء ملاحظة جديدة',
    noteTitle: 'العنوان:',
    noteContent: 'المحتوى:',
    titlePlaceholder: 'أدخل عنوان الملاحظة',
    contentPlaceholder: 'اكتب محتوى الملاحظة هنا...',
    saveNote: 'حفظ الملاحظة',
    cancel: 'إلغاء',
    edit: 'تحرير',
    save: 'حفظ',
    delete: 'حذف',
    addToFavorites: 'إضافة للمفضلة',
    removeFromFavorites: 'إزالة من المفضلة',
    confirmDelete: 'هل أنت متأكد من حذف هذه الملاحظة؟',
    pleaseEnterTitle: 'يرجى إدخال عنوان للملاحظة',
    welcome: 'مرحباً بك في تطبيق الملاحظات',
    welcomeMessage: 'ابدأ بإنشاء ملاحظة جديدة أو اختر ملاحظة من القائمة الجانبية لعرضها.',
    createFirstNote: 'إنشاء أول ملاحظة',
    createdAt: 'تم الإنشاء:',
    lastUpdated: 'آخر تحديث:',
    noContent: 'لا يوجد محتوى في هذه الملاحظة',
    footerText: 'تطبيق كتابة الملاحظات - أداة بسيطة وفعالة لتنظيم أفكارك',
    loading: 'جاري التحميل...',
    sampleWelcome: {
      title: 'مرحباً بك في تطبيق الملاحظات',
      content: 'هذا تطبيق بسيط لحفظ وإدارة ملاحظاتك الشخصية.\n\nالميزات المتاحة:\n• إنشاء ملاحظات جديدة\n• البحث في المحتوى\n• إضافة ملاحظات للمفضلة\n• تحرير وحذف الملاحظات\n• دعم اللغة العربية والإنجليزية\n• الوضع الليلي والنهاري\n• حفظ تلقائي لجميع البيانات\n\nابدأ بالنقر على "ملاحظة جديدة" لإنشاء أول ملاحظة لك.'
    },
    sampleTasks: {
      title: 'قائمة المهام اليومية',
      content: '☐ مراجعة الإيميلات\n☐ إنهاء التقرير المطلوب\n☐ اجتماع الفريق في الساعة 3\n☐ شراء مستلزمات البيت\n☐ قراءة فصل من الكتاب'
    },
    sampleProject: {
      title: 'أفكار مشروع جديد',
      content: 'أفكار للمشروع القادم:\n\n1. تطوير تطبيق لإدارة الوقت\n2. موقع ويب للتعلم الإلكتروني\n3. نظام إدارة المكتبة\n4. تطبيق للتسوق الذكي\n\nنقاط مهمة:\n- دراسة السوق المستهدف\n- تحديد الميزانية المطلوبة\n- اختيار التقنيات المناسبة'
    }
  },
  en: {
    title: 'Notes Writing App',
    subtitle: 'A simple tool to save and manage your personal notes',
    navigation: 'Navigation',
    newNote: 'New Note',
    onlyFavorites: 'Favorites Only',
    allNotes: 'All Notes',
    search: 'Search',
    searchPlaceholder: 'Search notes...',
    notesCount: 'Notes',
    noResults: 'No search results found',
    noFavorites: 'No favorite notes',
    noNotes: 'No notes yet',
    createNewNote: 'Create New Note',
    noteTitle: 'Title:',
    noteContent: 'Content:',
    titlePlaceholder: 'Enter note title',
    contentPlaceholder: 'Write your note content here...',
    saveNote: 'Save Note',
    cancel: 'Cancel',
    edit: 'Edit',
    save: 'Save',
    delete: 'Delete',
    addToFavorites: 'Add to Favorites',
    removeFromFavorites: 'Remove from Favorites',
    confirmDelete: 'Are you sure you want to delete this note?',
    pleaseEnterTitle: 'Please enter a title for the note',
    welcome: 'Welcome to Notes App',
    welcomeMessage: 'Start by creating a new note or select a note from the sidebar to view it.',
    createFirstNote: 'Create First Note',
    createdAt: 'Created:',
    lastUpdated: 'Last Updated:',
    noContent: 'No content in this note',
    footerText: 'Notes Writing App - A simple and effective tool to organize your thoughts',
    loading: 'Loading...',
    sampleWelcome: {
      title: 'Welcome to Notes App',
      content: 'This is a simple app to save and manage your personal notes.\n\nAvailable Features:\n• Create new notes\n• Search content\n• Add notes to favorites\n• Edit and delete notes\n• Arabic and English language support\n• Dark and light mode\n• Auto-save for all data\n\nStart by clicking "New Note" to create your first note.'
    },
    sampleTasks: {
      title: 'Daily Task List',
      content: '☐ Check emails\n☐ Finish required report\n☐ Team meeting at 3 PM\n☐ Buy household supplies\n☐ Read a chapter from book'
    },
    sampleProject: {
      title: 'New Project Ideas',
      content: 'Ideas for next project:\n\n1. Develop time management app\n2. E-learning website\n3. Library management system\n4. Smart shopping app\n\nImportant points:\n- Study target market\n- Determine required budget\n- Choose appropriate technologies'
    }
  }
};

// Theme colors
const themes = {
  light: {
    background: '#fff',
    surface: '#f9f9f9',
    surfaceHover: '#f0f8ff',
    border: '#ccc',
    borderLight: '#ddd',
    text: '#000',
    textSecondary: '#666',
    textMuted: '#999',
    primary: '#0066cc',
    success: '#28a745',
    warning: '#ffb400',
    danger: '#dc3545',
    noteBackground: '#fafafa',
    shadowColor: 'rgba(0,0,0,0.1)'
  },
  dark: {
    background: '#1a1a1a',
    surface: '#2d2d2d',
    surfaceHover: '#3d4f66',
    border: '#404040',
    borderLight: '#505050',
    text: '#ffffff',
    textSecondary: '#cccccc',
    textMuted: '#888888',
    primary: '#4da6ff',
    success: '#28a745',
    warning: '#ffb400',
    danger: '#dc3545',
    noteBackground: '#333333',
    shadowColor: 'rgba(255,255,255,0.1)'
  }
};

// ===== Custom Hook =====
const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return isMobile;
};

// ===== Main Component =====
const AcademicNotesApp = () => {
  // ======== State Hooks ========
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [language, setLanguage] = useState('ar');
  const [theme, setTheme] = useState('light');
  const [isInitialized, setIsInitialized] = useState(false);

  // ===== Responsive =====
  const isMobile = useResponsive();

  // ===== Translation & Theme =====
  const t = translations[language];
  const isRTL = language === 'ar';
  const currentTheme = themes[theme];

  // ===== Initialize app from localStorage =====
  useEffect(() => {
    const savedLanguage = loadFromStorage(STORAGE_KEYS.LANGUAGE, 'ar');
    const savedTheme = loadFromStorage(STORAGE_KEYS.THEME, 'light');
    const savedSearchTerm = loadFromStorage(STORAGE_KEYS.SEARCH_TERM, '');
    const savedShowFavorites = loadFromStorage(STORAGE_KEYS.SHOW_FAVORITES, false);

    setLanguage(savedLanguage);
    setTheme(savedTheme);
    setSearchTerm(savedSearchTerm);
    setShowFavorites(savedShowFavorites);
    setIsInitialized(true);
  }, []);

  // ===== Initialize notes after language is loaded =====
  useEffect(() => {
    if (!isInitialized) return;

    const savedNotes = loadFromStorage(STORAGE_KEYS.NOTES, null);
    const savedSelectedNoteId = loadFromStorage(STORAGE_KEYS.SELECTED_NOTE_ID, null);

    if (savedNotes && savedNotes.length > 0) {
      setNotes(savedNotes);
      if (savedSelectedNoteId) {
        const foundNote = savedNotes.find(note => note.id === savedSelectedNoteId);
        if (foundNote) setSelectedNote(foundNote);
      }
    } else {
      const sampleNotes = [
        {
          id: 1,
          title: t.sampleWelcome.title,
          content: t.sampleWelcome.content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          isFavorite: true
        },
        {
          id: 2,
          title: t.sampleTasks.title,
          content: t.sampleTasks.content,
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          updatedAt: new Date(Date.now() - 86400000).toISOString(),
          isFavorite: false
        },
        {
          id: 3,
          title: t.sampleProject.title,
          content: t.sampleProject.content,
          createdAt: new Date(Date.now() - 172800000).toISOString(),
          updatedAt: new Date(Date.now() - 172800000).toISOString(),
          isFavorite: true
        }
      ];
      setNotes(sampleNotes);
      saveToStorage(STORAGE_KEYS.NOTES, sampleNotes);
    }
  }, [isInitialized, language]);

  // ===== Save changes =====
  useEffect(() => { if (isInitialized) saveToStorage(STORAGE_KEYS.NOTES, notes); }, [notes, isInitialized]);
  useEffect(() => { if (isInitialized) saveToStorage(STORAGE_KEYS.LANGUAGE, language); }, [language, isInitialized]);
  useEffect(() => { if (isInitialized) saveToStorage(STORAGE_KEYS.THEME, theme); }, [theme, isInitialized]);
  useEffect(() => { if (isInitialized) saveToStorage(STORAGE_KEYS.SEARCH_TERM, searchTerm); }, [searchTerm, isInitialized]);
  useEffect(() => { if (isInitialized) saveToStorage(STORAGE_KEYS.SHOW_FAVORITES, showFavorites); }, [showFavorites, isInitialized]);
  useEffect(() => { if (isInitialized) saveToStorage(STORAGE_KEYS.SELECTED_NOTE_ID, selectedNote?.id || null); }, [selectedNote, isInitialized]);

  // ===== Filtered notes =====
  const filteredNotes = useMemo(() => {
    if (!isInitialized) return [];
    let filtered = notes.filter(note => {
      const matchesSearch = searchTerm === '' ||
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFavorites = !showFavorites || note.isFavorite;
      return matchesSearch && matchesFavorites;
    });
    return filtered.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }, [notes, searchTerm, showFavorites, isInitialized]);

  // ===== Handlers =====
  const createNote = () => {
    if (!newNote.title.trim()) { alert(t.pleaseEnterTitle); return; }
    const note = { id: Date.now(), title: newNote.title, content: newNote.content, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), isFavorite: false };
    setNotes([note, ...notes]);
    setNewNote({ title: '', content: '' });
    setIsCreating(false);
    setSelectedNote(note);
  };
  const updateNote = (id, updates) => {
    const updatedNotes = notes.map(note => note.id === id ? { ...note, ...updates, updatedAt: new Date().toISOString() } : note);
    setNotes(updatedNotes);
    if (selectedNote?.id === id) setSelectedNote({ ...selectedNote, ...updates });
  };
  const deleteNote = (id) => {
    if (!window.confirm(t.confirmDelete)) return;
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    if (selectedNote?.id === id) { setSelectedNote(null); setIsEditing(false); }
  };
  const toggleFavorite = (id) => { const note = notes.find(n => n.id === id); updateNote(id, { isFavorite: !note.isFavorite }); };
  const startCreating = () => { setIsCreating(true); setSelectedNote(null); setIsEditing(false); };
  const cancelCreating = () => { setIsCreating(false); setNewNote({ title: '', content: '' }); };
  const selectNote = (note) => { setSelectedNote(note); setIsCreating(false); setIsEditing(false); };
  const toggleLanguage = () => { setLanguage(language === 'ar' ? 'en' : 'ar'); };
  const toggleTheme = () => { setTheme(theme === 'light' ? 'dark' : 'light'); };
  const handleSearchChange = (newSearchTerm) => { setSearchTerm(newSearchTerm); };

  // ===== Loading Screen =====
  if (!isInitialized) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: currentTheme.background, color: currentTheme.text, fontFamily: 'Times, "Times New Roman", serif' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', border: `4px solid ${currentTheme.borderLight}`, borderTop: `4px solid ${currentTheme.primary}`, borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px' }}></div>
          <p style={{ fontSize: '18px' }}>{t.loading}</p>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  // ===== Main Render =====
  return (
    <div style={{
      fontFamily: 'Times, "Times New Roman", serif',
      lineHeight: '1.6',
      color: currentTheme.text,
      backgroundColor: currentTheme.background,
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      direction: isRTL ? 'rtl' : 'ltr'
    }}>
      <Header
        language={language}
        theme={theme}
        onLanguageToggle={toggleLanguage}
        onThemeToggle={toggleTheme}
        t={t}
        currentTheme={currentTheme}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div style={{
          display: 'flex',
          gap: isMobile ? '15px' : '20px',
          alignItems: 'flex-start',
          flexDirection: isMobile ? 'column' : (isRTL ? 'row-reverse' : 'row')
        }}>
          <Sidebar
            notes={filteredNotes}
            selectedNote={selectedNote}
            onNoteSelect={selectNote}
            searchTerm={searchTerm}
            onChange={handleSearchChange}
            showFavorites={showFavorites}
            onToggleFavorites={() => setShowFavorites(!showFavorites)}
            onNewNote={startCreating}
            language={language}
            isRTL={isRTL}
            t={t}
            currentTheme={currentTheme}
          />

          <MainContent
            isCreating={isCreating}
            selectedNote={selectedNote}
            isEditing={isEditing}
            newNote={newNote}
            onNewNoteChange={setNewNote}
            onCreateNote={createNote}
            onCancelCreate={cancelCreating}
            onNoteUpdate={updateNote}
            onEditingChange={setIsEditing}
            onDeleteNote={deleteNote}
            onToggleFavorite={toggleFavorite}
            onStartCreate={startCreating}
            language={language}
            isRTL={isRTL}
            t={t}
            currentTheme={currentTheme}
          />
        </div>
      </div>

      <Footer t={t} currentTheme={currentTheme} />
    </div>
  );
};

export default AcademicNotesApp;
