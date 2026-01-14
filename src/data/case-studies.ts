import type { CaseStudy, Locale } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'celtic',
    title: {
      pl: 'Celtic Self Storage',
      en: 'Celtic Self Storage',
    },
    description: {
      pl: 'Strona internetowa i kampania Google Ads dla firmy oferującej magazyny self-storage',
      en: 'Website and Google Ads campaign for a self-storage company',
    },
    tags: ['Website', 'Google Ads', 'SEO'],
    client: 'Celtic Self Storage',
    url: 'https://celticstorage.pl',
    featured: true,
    order: 1,
    images: {
      cover: '/images/cases/celtic/cover.jpg',
      gallery: [
        '/images/cases/celtic/gallery-1.jpg',
        '/images/cases/celtic/gallery-2.jpg',
        '/images/cases/celtic/gallery-3.jpg',
      ],
    },
    content: {
      about: {
        pl: 'Celtic Self Storage to nowoczesna firma oferująca wynajem magazynów samoobsługowych w Warszawie. Klienci mogą wynająć boksy o różnych rozmiarach do przechowywania mebli, dokumentów firmowych czy sezonowego sprzętu.',
        en: 'Celtic Self Storage is a modern company offering self-storage unit rentals in Warsaw. Customers can rent boxes of various sizes to store furniture, business documents or seasonal equipment.',
      },
      challenge: {
        pl: 'Firma potrzebowała profesjonalnej strony internetowej, która jasno komunikuje ofertę i ułatwia klientom wybór odpowiedniego rozmiaru magazynu. Dodatkowo chcieli przyciągnąć nowych klientów przez reklamy Google.',
        en: 'The company needed a professional website that clearly communicates the offer and helps customers choose the right storage size. Additionally, they wanted to attract new customers through Google advertising.',
      },
      solution: {
        pl: 'Zaprojektowaliśmy przejrzystą stronę z kalkulatorem cen i systemem rezerwacji online. Uruchomiliśmy kampanię Google Ads targetującą osoby szukające magazynów w Warszawie, co przyniosło stały napływ zapytań.',
        en: 'We designed a clear website with a price calculator and online booking system. We launched a Google Ads campaign targeting people looking for storage in Warsaw, which brought a steady flow of inquiries.',
      },
      tasks: [
        {
          pl: 'Projekt i budowa responsywnej strony internetowej',
          en: 'Design and development of responsive website',
        },
        {
          pl: 'Kalkulator cen z interaktywnym wyborem rozmiaru',
          en: 'Price calculator with interactive size selection',
        },
        {
          pl: 'Integracja z systemem rezerwacji',
          en: 'Integration with booking system',
        },
        {
          pl: 'Kampania Google Ads z remarketingiem',
          en: 'Google Ads campaign with remarketing',
        },
        {
          pl: 'Optymalizacja SEO lokalna',
          en: 'Local SEO optimization',
        },
      ],
    },
  },
  {
    slug: 'deluxdeco',
    title: {
      pl: 'DeluxDeco',
      en: 'DeluxDeco',
    },
    description: {
      pl: 'Strona e-commerce dla sklepu z luksusowymi dekoracjami wnętrz',
      en: 'E-commerce website for a luxury home decor store',
    },
    tags: ['Website', 'E-commerce', 'SEO'],
    client: 'DeluxDeco',
    url: 'https://deluxdeco.pl',
    featured: true,
    order: 2,
    images: {
      cover: '/images/cases/deluxdeco/cover.jpg',
      gallery: [
        '/images/cases/deluxdeco/gallery-1.jpg',
        '/images/cases/deluxdeco/gallery-2.jpg',
        '/images/cases/deluxdeco/gallery-3.jpg',
      ],
    },
    content: {
      about: {
        pl: 'DeluxDeco to butikowy sklep internetowy oferujący ekskluzywne dekoracje wnętrz — od designerskich świeczników po luksusowe tekstylia. Marka kieruje swoją ofertę do klientów ceniących jakość i wyjątkowy design.',
        en: 'DeluxDeco is a boutique online store offering exclusive home decorations — from designer candleholders to luxury textiles. The brand targets customers who value quality and unique design.',
      },
      challenge: {
        pl: 'Poprzednia strona sklepu była przestarzała i nie oddawała premium charakteru marki. Klienci mieli problemy z nawigacją, a proces zakupowy był zbyt skomplikowany. Ruch organiczny był minimalny.',
        en: 'The previous store website was outdated and did not reflect the premium nature of the brand. Customers had navigation problems, and the purchasing process was too complicated. Organic traffic was minimal.',
      },
      solution: {
        pl: 'Stworzyliśmy elegancką platformę e-commerce z intuicyjną nawigacją i szybkim procesem zakupowym. Wdrożyliśmy strategię SEO skupioną na frazach związanych z luksusowymi dekoracjami, co znacząco zwiększyło ruch.',
        en: 'We created an elegant e-commerce platform with intuitive navigation and a fast checkout process. We implemented an SEO strategy focused on phrases related to luxury decorations, which significantly increased traffic.',
      },
      tasks: [
        {
          pl: 'Projekt UX/UI platformy e-commerce',
          en: 'UX/UI design of e-commerce platform',
        },
        {
          pl: 'Budowa sklepu na nowoczesnym stacku',
          en: 'Building store on modern tech stack',
        },
        {
          pl: 'Integracja z systemem płatności i dostawy',
          en: 'Integration with payment and delivery systems',
        },
        {
          pl: 'Optymalizacja szybkości ładowania',
          en: 'Page speed optimization',
        },
        {
          pl: 'Strategia i wdrożenie SEO',
          en: 'SEO strategy and implementation',
        },
      ],
    },
  },
  {
    slug: 'palac-zolwin',
    title: {
      pl: 'Pałac Żółwin',
      en: 'Zolwin Palace',
    },
    description: {
      pl: 'Strona internetowa dla zabytkowego pałacu oferującego przestrzenie eventowe',
      en: 'Website for a historic palace offering event spaces',
    },
    tags: ['Website', 'SEO'],
    client: 'Pałac Żółwin',
    url: 'https://palaczolwin.pl',
    featured: false,
    order: 3,
    images: {
      cover: '/images/cases/palac-zolwin/cover.jpg',
      gallery: [
        '/images/cases/palac-zolwin/gallery-1.jpg',
        '/images/cases/palac-zolwin/gallery-2.jpg',
        '/images/cases/palac-zolwin/gallery-3.jpg',
      ],
    },
    content: {
      about: {
        pl: 'Pałac Żółwin to zabytkowa rezydencja z XIX wieku, która oferuje wynajem przestrzeni na wesela, konferencje i eventy firmowe. Położony w malowniczej okolicy pod Warszawą, przyciąga pary szukające wyjątkowego miejsca na ślub.',
        en: 'Zolwin Palace is a historic 19th-century residence that offers space rental for weddings, conferences and corporate events. Located in a picturesque area near Warsaw, it attracts couples looking for a unique wedding venue.',
      },
      challenge: {
        pl: 'Pałac miał przestarzałą stronę internetową, która nie pokazywała pełnego piękna obiektu. Zdjęcia były niskiej jakości, a formularz kontaktowy często nie działał. Potencjalni klienci wybierali konkurencję.',
        en: 'The palace had an outdated website that did not show the full beauty of the venue. Photos were low quality, and the contact form often did not work. Potential customers were choosing competitors.',
      },
      solution: {
        pl: 'Zaprojektowaliśmy elegancką stronę z wielkoformatowymi zdjęciami i wirtualnym spacerem po pałacu. Dodaliśmy kalendarz dostępności i prosty formularz zapytań, co znacznie ułatwiło proces rezerwacji.',
        en: 'We designed an elegant website with large-format photos and a virtual tour of the palace. We added an availability calendar and simple inquiry form, which greatly simplified the booking process.',
      },
      tasks: [
        {
          pl: 'Sesja zdjęciowa profesjonalna obiektu',
          en: 'Professional photo session of the venue',
        },
        {
          pl: 'Projekt i budowa strony prezentacyjnej',
          en: 'Design and development of presentation website',
        },
        {
          pl: 'Wirtualny spacer 360°',
          en: '360° virtual tour',
        },
        {
          pl: 'Kalendarz dostępności i system zapytań',
          en: 'Availability calendar and inquiry system',
        },
        {
          pl: 'Pozycjonowanie na frazy ślubne',
          en: 'SEO for wedding-related keywords',
        },
      ],
    },
  },
  {
    slug: 'common-thread',
    title: {
      pl: 'Common Thread',
      en: 'Common Thread',
    },
    description: {
      pl: 'Strona internetowa dla producenta ekskluzywnych dywanów na zamówienie',
      en: 'Website for a manufacturer of exclusive custom carpets',
    },
    tags: ['Website', 'SEO'],
    client: 'Common Thread',
    url: 'https://commonthread.pl',
    featured: false,
    order: 4,
    images: {
      cover: '/images/cases/common-thread/cover.jpg',
      gallery: [
        '/images/cases/common-thread/gallery-1.jpg',
        '/images/cases/common-thread/gallery-2.jpg',
        '/images/cases/common-thread/gallery-3.jpg',
      ],
    },
    content: {
      about: {
        pl: 'Common Thread to polska manufaktura specjalizująca się w produkcji luksusowych dywanów na zamówienie. Każdy dywan jest ręcznie wykonany z najwyższej jakości materiałów, a klienci mogą zaprojektować własny wzór.',
        en: 'Common Thread is a Polish manufacture specializing in the production of luxury custom carpets. Each carpet is handmade from the highest quality materials, and customers can design their own pattern.',
      },
      challenge: {
        pl: 'Firma potrzebowała strony, która pokaże rzemieślniczy charakter produkcji i pozwoli klientom zobaczyć proces tworzenia dywanu. Poprzednia strona była zbyt prosta i nie budowała zaufania potrzebnego przy produktach premium.',
        en: 'The company needed a website that would show the artisanal nature of production and allow customers to see the carpet creation process. The previous site was too simple and did not build the trust needed for premium products.',
      },
      solution: {
        pl: 'Stworzyliśmy wizualnie bogatą stronę z galerią realizacji, sekcją „jak powstaje dywan" i konfiguratorem pozwalającym klientom eksperymentować z wzorami. Wdrożyliśmy SEO targetujące architektów wnętrz.',
        en: 'We created a visually rich website with a project gallery, "how a carpet is made" section and a configurator allowing customers to experiment with patterns. We implemented SEO targeting interior designers.',
      },
      tasks: [
        {
          pl: 'Strona z galerią portfolio',
          en: 'Website with portfolio gallery',
        },
        {
          pl: 'Sekcja prezentująca proces produkcji',
          en: 'Section presenting the production process',
        },
        {
          pl: 'Prosty konfigurator wzorów',
          en: 'Simple pattern configurator',
        },
        {
          pl: 'Formularz zapytań B2B',
          en: 'B2B inquiry form',
        },
        {
          pl: 'SEO dla branży wnętrzarskiej',
          en: 'SEO for interior design industry',
        },
      ],
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured).sort((a, b) => a.order - b.order);
}

export function getAllCaseStudies(): CaseStudy[] {
  return [...caseStudies].sort((a, b) => a.order - b.order);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

export function getLocalizedCaseStudy(slug: string, locale: Locale) {
  const study = getCaseStudy(slug);
  if (!study) return undefined;

  return {
    ...study,
    title: study.title[locale],
    description: study.description[locale],
    content: {
      about: study.content.about[locale],
      challenge: study.content.challenge[locale],
      solution: study.content.solution[locale],
      tasks: study.content.tasks.map((task) => task[locale]),
    },
  };
}

export function getLocalizedFeaturedCaseStudies(locale: Locale) {
  return getFeaturedCaseStudies().map((study) => ({
    ...study,
    title: study.title[locale],
    description: study.description[locale],
  }));
}

export function getLocalizedAllCaseStudies(locale: Locale) {
  return getAllCaseStudies().map((study) => ({
    ...study,
    title: study.title[locale],
    description: study.description[locale],
  }));
}
