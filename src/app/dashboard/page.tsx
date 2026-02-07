'use client';

import { useState } from 'react';

const PASSWORD = "orcatech123"; // غيّرها فورًا

export default function Dashboard() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [form, setForm] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
  });

  if (!auth) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="p-6 border rounded-lg">
          <h2 className="mb-4 font-bold">Dashboard Login</h2>
          <input
            type="password"
            className="border p-2 mb-2 w-full"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-black text-white px-4 py-2 w-full"
            onClick={() => password === PASSWORD && setAuth(true)}
          >
            Login
          </button>
        </div>
      </main>
    );
  }

  const submit = async () => {
    await fetch('/api/articles', {
      method: 'POST',
      body: JSON.stringify({
        ...form,
        publishedAt: new Date().toISOString(),
        author: 'OrcaTech',
        keywords: [],
      }),
    });
    alert('Article Added');
  };

  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Article</h1>

      <input
        placeholder="Title"
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="Slug"
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, slug: e.target.value })}
      />

      <textarea
        placeholder="HTML Content"
        className="border p-2 w-full mb-2 h-40"
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <button
        className="bg-orca-blue text-white px-6 py-2"
        onClick={submit}
      >
        Publish
      </button>
    </main>
  );
}