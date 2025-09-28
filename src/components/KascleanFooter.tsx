import { Twitter, Instagram, Facebook } from 'lucide-react';
export function KascleanFooter() {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <span className="font-display text-2xl font-bold text-white">KASCLEAN</span>
          <div className="flex space-x-6 mt-6">
            <a href="#" className="text-muted-foreground hover:text-brand-green transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand-green transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-brand-green transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-center text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} KASCLEAN. Tüm hakları sakl��dır.
          </p>
          <p className="mt-2 text-sm text-muted-foreground/50">
            Built with ���️ at Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
}