// Navigation Component
import { Plus, Star } from 'lucide-react';

const Navigation = ({ t, onNewNote, showFavorites, onToggleFavorites, currentTheme }) => {
    return (
        <div style={{ marginBottom: '30px' }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '18px', fontWeight: 'bold' }}>
                {t.navigation}
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                <li style={{ marginBottom: '8px' }}>
                    <button
                        onClick={onNewNote}
                        style={{
                            color: currentTheme.primary,
                            textDecoration: 'none',
                            fontSize: '16px',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                        }}
                        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >
                        <Plus size={16} />
                        {t.newNote}
                    </button>
                </li>
                <li style={{ marginBottom: '8px' }}>
                    <button
                        onClick={onToggleFavorites}
                        style={{
                            color: showFavorites ? currentTheme.text : currentTheme.primary,
                            textDecoration: 'none',
                            fontSize: '16px',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            fontWeight: showFavorites ? 'bold' : 'normal',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                        }}
                        onMouseEnter={(e) => !showFavorites && (e.target.style.textDecoration = 'underline')}
                        onMouseLeave={(e) => !showFavorites && (e.target.style.textDecoration = 'none')}
                    >
                        <Star size={16} />
                        {showFavorites ? t.allNotes : t.onlyFavorites}
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;