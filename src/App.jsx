import React from 'react';
import Generator from './components/Generator';

function App() {
  const [lang, setLang] = React.useState('en');

  return (
    <div className="min-h-screen bg-[#1e1e1e] py-8 text-gray-300 font-sans p-4" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <Generator lang={lang} setLang={setLang} />
    </div>
  );
}

export default App;
