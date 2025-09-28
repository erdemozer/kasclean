import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const navLinks = [
  { href: '#features', label: 'Özellikler' },
  { href: '#how-it-works', label: 'Nasıl Çalı��ır' },
  { href: '#technology', label: 'Teknoloji' },
  { href: '#contact', label: 'İletişim' },
];
export function KascleanHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <span className="font-display text-2xl font-bold text-white">KASCLEAN</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-brand-green transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden',
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-foreground/80 hover:text-brand-green transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}