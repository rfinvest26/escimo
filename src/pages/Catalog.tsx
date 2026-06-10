import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Catalog() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = code.trim();
    if (trimmed) {
      navigate(`/model/${trimmed}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '1.5rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>OneNight</h1>
        <p style={{ color: 'var(--accent-color)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Лучший сервис заказа услуг</p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '320px', margin: '0 auto', lineHeight: '1.6' }}>
          Конфиденциально. Безопасно. Только проверенные анкеты с реальными фото.
        </p>
      </div>
      <div style={{ width: '100%', maxWidth: '400px', height: '1px', background: 'var(--border-color)', opacity: 0.5 }} />
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>Введите код модели для просмотра анкеты</p>
      </div>

      <form onSubmit={handleSearch} style={{ width: '100%', maxWidth: '400px', display: 'flex', gap: '0.75rem' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} size={18} />
          <input
            type="text"
            className="input"
            placeholder="Введите код..."
            style={{ paddingLeft: '2.5rem', width: '100%', borderRadius: '16px', border: '1px solid var(--border-color)', backgroundColor: 'var(--card-bg)' }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            inputMode="text"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="search"
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="btn"
          disabled={!code.trim()}
          style={{ padding: '0 1.5rem', borderRadius: '16px', flexShrink: 0 }}
        >
          Найти
        </button>
      </form>
    </div>
  );
}
