'use client';

import { useState, useEffect } from "react";

export default function Dashboard() {
const [authorized, setAuthorized] = useState(false);
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [lang, setLang] = useState<'en' | 'ar'>('en');
const [articles, setArticles] = useState<any[]>([]);

/* ================= AUTH CHECK ================= */
const login = async () => {
try {
const res = await fetch(
/.netlify/functions/articles?lang=en,
{
method: "GET",
headers: {
"x-dashboard-pass": password,
},
}
);

if (!res.ok) {  
    throw new Error("Unauthorized");  
  }  

  setAuthorized(true);  
  setError("");  
} catch {  
  setAuthorized(false);  
  setError("Wrong password");  
}

};

/* ================= LOAD ARTICLES ================= */
const loadArticles = async () => {
const res = await fetch(
/.netlify/functions/articles?lang=${lang},
{
method: "GET",
headers: {
"x-dashboard-pass": password,
},
}
);

const data = await res.json();  
setArticles(Array.isArray(data) ? data : []);

};

useEffect(() => {
if (authorized) {
loadArticles();
}
}, [authorized, lang]);

/* ================= LOGIN SCREEN ================= */
if (!authorized) {
return (
<main className="min-h-screen flex items-center justify-center">
<div className="border p-6 rounded-lg w-80">
<h2 className="text-lg font-bold mb-4 text-center">
Dashboard Login
</h2>

<input  
        type="password"  
        placeholder="Dashboard Password"  
        className="border p-2 w-full mb-3"  
        value={password}  
        onChange={(e) => setPassword(e.target.value)}  
      />  

      {error && (  
        <p className="text-red-600 text-sm mb-2 text-center">  
          {error}  
        </p>  
      )}  

      <button  
        className="bg-black text-white w-full py-2 rounded"  
        onClick={login}  
      >  
        Login  
      </button>  
    </div>  
  </main>  
);

}

/* ================= DASHBOARD ================= */
return (
<main
className="p-10 max-w-5xl mx-auto"
dir={lang === 'ar' ? 'rtl' : 'ltr'}
>
<h1 className="text-2xl font-bold mb-6">
Dashboard
</h1>

{/* Language Switch */}  
  <div className="mb-8">  
    <label className="mr-3 font-medium">Language:</label>  
    <select  
      className="border p-2"  
      value={lang}  
      onChange={(e) => setLang(e.target.value as 'en' | 'ar')}  
    >  
      <option value="en">English</option>  
      <option value="ar">Arabic</option>  
    </select>  
  </div>  

  {/* Articles List */}  
  {articles.length === 0 && (  
    <p className="text-gray-500">  
      No articles found.  
    </p>  
  )}  

  {articles.map((a) => (  
    <div  
      key={a.id}  
      className="border p-4 mb-4 rounded-lg"  
    >  
      <h3 className="font-bold text-lg">  
        {a.title}  
      </h3>  

      <p className="text-sm text-gray-600 mt-1">  
        Views: {a.views ?? 0} | Leads: {a.leads ?? 0}  
      </p>  
    </div>  
  ))}  
</main>

);
}