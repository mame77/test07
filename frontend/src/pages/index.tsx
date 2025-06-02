// project-root/frontend/src/pages/index.tsx
export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to Next.js!</h1>
      <p className="mt-4">これは Next.js のホームページです。</p>
      <a href="/about" className="mt-6 inline-block text-blue-600 hover:underline">
        → About ページへ
      </a>
    </div>
  )
}
