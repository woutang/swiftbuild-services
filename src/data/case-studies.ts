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
    results: {
      metrics: [
        { value: '3x', label: { pl: 'więcej zapytań', en: 'more inquiries' } },
        { value: '14', label: { pl: 'dni do uruchomienia', en: 'days to launch' } },
        { value: '#1', label: { pl: 'w Google na "self storage Warszawa"', en: 'on Google for "self storage Warsaw"' } },
      ],
      testimonial: {
        quote: {
          pl: 'Strona przynosi nam stały napływ klientów. Kalkulator cen to strzał w dziesiątkę.',
          en: 'The website brings us a steady flow of customers. The price calculator was a bulls-eye.',
        },
        author: 'Właściciel Celtic Self Storage',
      },
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
    results: {
      metrics: [
        { value: '+180%', label: { pl: 'wzrost ruchu organicznego', en: 'increase in organic traffic' } },
        { value: '2.1s', label: { pl: 'czas ładowania strony', en: 'page load time' } },
        { value: '+45%', label: { pl: 'wzrost konwersji', en: 'increase in conversions' } },
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
    featured: true,
    order: 3,
    images: {
      cover: '/images/cases/palac-zolwin/cover.jpg',
      gallery: [
        '/images/cases/palac-zolwin/gallery-1.jpg',
        '/images/cases/palac-zolwin/gallery-2.jpg',
        '/images/cases/palac-zolwin/gallery-3.jpg',
      ],
    },
    results: {
      metrics: [
        { value: '5x', label: { pl: 'więcej zapytań weselnych', en: 'more wedding inquiries' } },
        { value: 'Top 3', label: { pl: 'na "sale weselne mazowieckie"', en: 'for "wedding venues mazovia"' } },
        { value: '10k+', label: { pl: 'wyświetleń wirtualnego spaceru', en: 'virtual tour views' } },
      ],
      testimonial: {
        quote: {
          pl: 'Wirtualny spacer zmienił wszystko. Pary rezerwują terminy bez wcześniejszych odwiedzin.',
          en: 'The virtual tour changed everything. Couples book dates without prior visits.',
        },
        author: 'Manager Pałacu Żółwin',
      },
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
    results: {
      metrics: [
        { value: '60%', label: { pl: 'zapytań od architektów', en: 'inquiries from architects' } },
        { value: '3x', label: { pl: 'więcej użytkowników konfiguratora', en: 'more configurator users' } },
        { value: '21', label: { pl: 'dni do uruchomienia', en: 'days to launch' } },
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
  {
    slug: 'ganda-blooms',
    title: {
      pl: 'Ganda Blooms',
      en: 'Ganda Blooms',
    },
    description: {
      pl: 'Strona internetowa dla kwiaciarni premium z dostawą w Warszawie',
      en: 'Website for a premium florist with delivery in Warsaw',
    },
    tags: ['Website', 'E-commerce', 'SEO'],
    client: 'Ganda Blooms',
    url: 'https://gandablooms.pl',
    featured: true,
    order: 5,
    images: {
      cover: '/images/cases/ganda-blooms/cover.jpg',
      gallery: [
        '/images/cases/ganda-blooms/gallery-1.jpg',
        '/images/cases/ganda-blooms/gallery-2.jpg',
        '/images/cases/ganda-blooms/gallery-3.jpg',
      ],
    },
    results: {
      metrics: [
        { value: '+320%', label: { pl: 'wzrost zamówień online', en: 'increase in online orders' } },
        { value: '18', label: { pl: 'dni do uruchomienia', en: 'days to launch' } },
        { value: '4.9★', label: { pl: 'średnia ocena klientów', en: 'average customer rating' } },
      ],
      testimonial: {
        quote: {
          pl: 'Nowa strona oddaje charakter naszej marki. Klienci mówią, że zamawianie to czysta przyjemność.',
          en: 'The new website captures our brand essence. Customers say ordering is pure pleasure.',
        },
        author: 'Właścicielka Ganda Blooms',
      },
    },
    content: {
      about: {
        pl: 'Ganda Blooms to warszawska kwiaciarnia specjalizująca się w autorskich kompozycjach kwiatowych i dostawie tego samego dnia. Marka stawia na świeżość, jakość i niepowtarzalny design każdego bukietu.',
        en: 'Ganda Blooms is a Warsaw-based florist specializing in custom floral arrangements and same-day delivery. The brand focuses on freshness, quality, and unique design in every bouquet.',
      },
      challenge: {
        pl: 'Kwiaciarnia działała głównie przez Instagram i telefon, co ograniczało sprzedaż. Brakowało profesjonalnej strony z możliwością zamówienia online i wyboru terminu dostawy.',
        en: 'The florist operated mainly through Instagram and phone, limiting sales. A professional website with online ordering and delivery scheduling was missing.',
      },
      solution: {
        pl: 'Stworzyliśmy elegancki sklep online z piękną prezentacją produktów, prostym procesem zamawiania i integracją z kalendarzem dostaw. Strona oddaje premium charakter marki i ułatwia zakup na każdym urządzeniu.',
        en: 'We created an elegant online store with beautiful product presentation, simple ordering process, and delivery calendar integration. The site reflects the premium brand character and makes purchasing easy on any device.',
      },
      tasks: [
        {
          pl: 'Projekt i budowa sklepu online',
          en: 'Design and development of online store',
        },
        {
          pl: 'System wyboru daty i godziny dostawy',
          en: 'Delivery date and time selection system',
        },
        {
          pl: 'Integracja z płatnościami online',
          en: 'Online payment integration',
        },
        {
          pl: 'Optymalizacja SEO lokalna',
          en: 'Local SEO optimization',
        },
        {
          pl: 'Szkolenie z zarządzania zamówieniami',
          en: 'Order management training',
        },
      ],
    },
  },
  {
    slug: 'letra',
    title: {
      pl: 'Letra.pl',
      en: 'Letra.pl',
    },
    description: {
      pl: 'Strona internetowa dla biura tłumaczeń specjalizującego się w dokumentach prawnych',
      en: 'Website for a translation agency specializing in legal documents',
    },
    tags: ['Website', 'SEO'],
    client: 'Letra.pl',
    url: 'https://letra.pl',
    featured: false,
    order: 6,
    images: {
      cover: '/images/cases/letra/cover.jpg',
      gallery: [
        '/images/cases/letra/gallery-1.jpg',
        '/images/cases/letra/gallery-2.jpg',
        '/images/cases/letra/gallery-3.jpg',
      ],
    },
    results: {
      metrics: [
        { value: 'Top 5', label: { pl: 'na "tłumaczenia prawnicze Warszawa"', en: 'for "legal translations Warsaw"' } },
        { value: '+85%', label: { pl: 'więcej zapytań z formularza', en: 'more form inquiries' } },
        { value: '2.4s', label: { pl: 'czas ładowania', en: 'load time' } },
      ],
    },
    content: {
      about: {
        pl: 'Letra.pl to biuro tłumaczeń przysięgłych specjalizujące się w dokumentach prawnych i biznesowych. Obsługuje kancelarie prawne, firmy i osoby prywatne potrzebujące certyfikowanych tłumaczeń.',
        en: 'Letra.pl is a certified translation agency specializing in legal and business documents. It serves law firms, companies, and individuals needing certified translations.',
      },
      challenge: {
        pl: 'Stara strona nie wzbudzała zaufania potrzebnego w branży tłumaczeń prawniczych. Brak było jasnej prezentacji usług i certyfikacji, a konkurencja dominowała w wynikach Google.',
        en: 'The old website did not inspire the trust needed in legal translation. Clear service presentation and certifications were missing, and competitors dominated Google results.',
      },
      solution: {
        pl: 'Zaprojektowaliśmy profesjonalną stronę z wyraźną prezentacją specjalizacji, certyfikatów i procesu współpracy. Wdrożyliśmy SEO targetujące frazy związane z tłumaczeniami prawniczymi.',
        en: 'We designed a professional website with clear presentation of specializations, certifications, and collaboration process. We implemented SEO targeting legal translation keywords.',
      },
      tasks: [
        {
          pl: 'Projekt strony budującej zaufanie',
          en: 'Trust-building website design',
        },
        {
          pl: 'Prezentacja certyfikatów i specjalizacji',
          en: 'Certifications and specializations showcase',
        },
        {
          pl: 'Formularz wyceny z uploadem dokumentów',
          en: 'Quote form with document upload',
        },
        {
          pl: 'SEO dla branży tłumaczeniowej',
          en: 'SEO for translation industry',
        },
        {
          pl: 'Integracja z Google Business Profile',
          en: 'Google Business Profile integration',
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
    results: study.results
      ? {
          metrics: study.results.metrics.map((m) => ({
            value: m.value,
            label: m.label[locale],
          })),
          testimonial: study.results.testimonial
            ? {
                quote: study.results.testimonial.quote[locale],
                author: study.results.testimonial.author,
              }
            : undefined,
        }
      : undefined,
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
