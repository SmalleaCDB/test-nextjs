'use client';
import NewButton from "@SmalleaCDB/component-library-test";
import '@SmalleaCDB/component-library-test/dist/index.css';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <NewButton label="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
  );
}
