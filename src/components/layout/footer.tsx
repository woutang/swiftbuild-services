import { Link } from '@/i18n/navigation';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

export function Footer({ dictionary }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Swift<span className="text-primary">Build</span>
            </Link>
            <p className="mt-4 max-w-md text-muted-foreground">
              {dictionary.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {dictionary.footer.menu_label}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/uslugi"
                className="text-foreground transition-colors hover:text-primary"
              >
                {dictionary.nav.services}
              </Link>
              <Link
                href="/realizacje"
                className="text-foreground transition-colors hover:text-primary"
              >
                {dictionary.nav.portfolio}
              </Link>
              <Link
                href="/o-nas"
                className="text-foreground transition-colors hover:text-primary"
              >
                {dictionary.nav.about}
              </Link>
              <Link
                href="/kontakt"
                className="text-foreground transition-colors hover:text-primary"
              >
                {dictionary.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {dictionary.nav.contact}
            </h3>
            <div className="flex flex-col gap-2 text-foreground">
              <a
                href="mailto:karol@swiftbuild.services"
                className="transition-colors hover:text-primary"
              >
                karol@swiftbuild.services
              </a>
              <a
                href="https://linkedin.com/company/swiftbuild"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SwiftBuild. {dictionary.footer.rights}.
          </p>
          <Link
            href="/polityka-prywatnosci"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {dictionary.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
