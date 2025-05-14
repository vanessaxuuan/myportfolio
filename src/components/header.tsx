import Link from 'next/link';
import { Tangerine } from 'next/font/google';

const tangerine = Tangerine({
  weight: '700',
  subsets: ['latin'],
});

export default function Header() {
  return (
    <header className="w-full px-4 py-4 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className={`${tangerine.className} text-4xl text-gray-800 hover:text-gray-600 transition-colors`}
        >
          My Portfolio
        </Link>
        
        {/* <div className="flex items-center gap-6">
          <Link 
            href="/about" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
        </div> */}
      </nav>
    </header>
  );
}
