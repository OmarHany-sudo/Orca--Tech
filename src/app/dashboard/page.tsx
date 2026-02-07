'use client';

import { useState, useEffect } from "react";

export default function Dashboard() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [articles, setArticles] = useState<any[]>([]);
  const [form, setForm] = useState<any>({
    title: '',
    slug: '',
    description: '',
    content: '',
    align: 'left',
  });

  /* ===== LOAD ===== */
  const load = async () => {
    const res = await fetch(`/netlify/functions/articles?lang=${lang}`, {
      headers: { "x-dashboard-pass": password },
    });
    setArticles(await res.json());
  };

  /* ===== LOGIN ===== */
  if (!auth) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="border p-6 rounded">
          <input
            type="password"
            placeholder="Dashboard Password"
            className="border p-2 mb-3 w-full"
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="bg-black text-white w-full py-2"
            onClick={() => setAuth(true)}
          >
            Login
          </button>
        </div>
      </main>
    );
  }

  useEffect(() => { load(); }, [lang]);

  return (
    <main
      className={`p-10 max-w-5xl mx-auto`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <select onChange={e => setLang(e.target.value as any)}>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>

      <textarea
        className="border w-full h-40 my-4"
        placeholder="Markdown content"
        onChange={e => setForm({ ...form, content: e.target.value })}
      />

      <button
        className="bg-orca-blue text-white px-6 py-2"
        onClick={async () => {
          await fetch('/netlify/functions/articles', {
            method: 'POST',
            headers: { "x-dashboard-pass": password },
            body: JSON.stringify({ ...form, language: lang }),
          });
          load();
        }}
      >
        Publish
      </button>

      <hr className="my-10"/>

      {articles.map(a => (
        <div key={a.id} className="border p-4 mb-4">
          <b>{a.title}</b>
          <p>Views: {a.views} | Leads: {a.leads}</p>
          <button
            className="text-red-600"
            onClick={async () => {
              await fetch(`/netlify/functions/articles`, {
                method: 'DELETE',
                headers: { "x-dashboard-pass": password },
                body: JSON.stringify({ id: a.id, language: lang }),
              });
              load();
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </main>
  );
}