"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-gray-100 shadow-md">
        <h1 className="text-lg font-bold">Clerk Auth</h1>
        <div>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-semibold mb-4">Welcome to Clerk Auth</h1>
       
      </main>

      
      <footer className="flex items-center justify-center py-4 bg-gray-100">
        <p className="text-sm text-gray-500">© Hameed</p>
      </footer>
    </div>
  );
}
