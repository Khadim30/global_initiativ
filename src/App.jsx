
import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Leaf,
} from "lucide-react";

// ==========================================
// INFORMATIONS DE L'ENTREPRISE
// ==========================================

const WHATSAPP_NUMBER = "221767684967";

const categories = [
  {
    title: "Poussins",
    description:
      "Des poussins pour démarrer et développer votre activité d'élevage.",
    image: "/images/poussins.jpg",
  },
  {
    title: "Aliments pour volailles",
    description:
      "Des aliments adaptés aux différentes phases de croissance de vos volailles.",
    image: "/images/aliments.jpg",
  },
  {
    title: "Poulets",
    description:
      "Découvrez notre offre de poulets pour vos différents besoins.",
    image: "/images/poulets.jpg",
  },
  {
    title: "Matériel avicole",
    description:
      "Mangeoires, abreuvoirs et équipements nécessaires à votre élevage.",
    image: "/images/materiel.jpg",
  },
];

// ==========================================
// LIEN WHATSAPP
// ==========================================

const getWhatsAppLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
};

// ==========================================
// COMPOSANT PRINCIPAL
// ==========================================

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* ================= HEADER ================= */}

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          {/* LOGO */}
          <a
            href="#accueil"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-700 text-yellow-300">
              <Leaf size={27} />
            </div>

            <div>
              <h1 className="text-lg font-extrabold leading-tight text-green-800">
                Global Initiativ Action
              </h1>

              <p className="text-xs font-medium text-gray-500">
                Votre partenaire avicole
              </p>
            </div>
          </a>

          {/* NAVIGATION DESKTOP */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#accueil"
              className="font-semibold text-green-800"
            >
              Accueil
            </a>

            <a
              href="#produits"
              className="font-medium transition hover:text-green-700"
            >
              Nos produits
            </a>

            <a
              href="#apropos"
              className="font-medium transition hover:text-green-700"
            >
              À propos
            </a>

            <a
              href="#contact"
              className="font-medium transition hover:text-green-700"
            >
              Contact
            </a>
          </nav>

          {/* BOUTON CONTACT DESKTOP */}
          <a
            href="#contact"
            className="hidden rounded-full bg-yellow-400 px-5 py-3 font-bold text-green-950 transition hover:bg-yellow-300 md:inline-flex"
          >
            Nous contacter
          </a>

          {/* MENU MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-green-800 md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* NAVIGATION MOBILE */}
        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-gray-100 bg-white px-6 py-5 md:hidden">
            <a onClick={closeMenu} href="#accueil">
              Accueil
            </a>

            <a onClick={closeMenu} href="#produits">
              Nos produits
            </a>

            <a onClick={closeMenu} href="#apropos">
              À propos
            </a>

            <a onClick={closeMenu} href="#contact">
              Contact
            </a>
          </nav>
        )}
      </header>

      <main>

        {/* ================= HERO ================= */}

        <section
          id="accueil"
          className="overflow-hidden bg-green-900"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">

            {/* TEXTE HERO */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-600 bg-green-800 px-4 py-2 text-sm font-medium text-green-100">
                <Leaf size={16} className="text-yellow-300" />

                Bienvenue chez Global Initiativ Action
              </div>

              <h2 className="max-w-2xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Tout pour réussir votre{" "}
                <span className="text-yellow-400">
                  élevage avicole.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-green-100">
                Poussins, aliments pour volailles et matériel avicole :
                découvrez nos produits et équipez votre élevage en toute
                simplicité.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#produits"
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-4 font-bold text-green-950 transition hover:bg-yellow-300"
                >
                  Découvrir nos produits
                  <ArrowRight size={19} />
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Nous contacter
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-5 text-sm text-green-100">
                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-yellow-400"
                  />
                  Produits avicoles
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-yellow-400"
                  />
                  Service de proximité
                </span>
              </div>
            </div>

            {/* IMAGE HERO */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full bg-yellow-400/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                <img
                  src="/images/elevage.jpg"
                  alt="Élevage de volailles"
                  className="h-[350px] w-full object-cover md:h-[450px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-sm font-bold uppercase tracking-widest text-yellow-300">
                    Global Initiativ Action
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-white">
                    Le partenaire de votre élevage
                  </h3>

                  <p className="mt-2 text-sm text-green-100">
                    Poussins • Aliments • Matériel
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= PRODUITS ================= */}

        <section
          id="produits"
          className="bg-gray-50 px-5 py-20"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="font-bold uppercase tracking-widest text-green-700">
                Notre catalogue
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Découvrez nos produits
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Retrouvez les principales catégories de produits proposés
                par Global Initiativ Action.
              </p>
            </div>

            {/* CARTES PRODUITS */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {categories.map((category) => (
                <article
                  key={category.title}
                  className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  {/* IMAGE */}
                  <div className="h-52 overflow-hidden bg-gray-100">
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* INFORMATIONS */}
                  <div className="p-6">

                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>

                    <p className="mt-3 min-h-20 leading-7 text-gray-600">
                      {category.description}
                    </p>

                    <a
                      href={getWhatsAppLink(
                        `Bonjour Global Initiativ Action, je souhaite avoir des informations sur : ${category.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 font-bold text-green-700 transition hover:gap-3"
                    >
                      Demander le prix
                      <ArrowRight size={17} />
                    </a>

                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>

        {/* ================= A PROPOS ================= */}

        <section
          id="apropos"
          className="px-5 py-20"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[2rem] bg-green-50">
              <img
                src="/images/elevage.jpg"
                alt="Activité avicole"
                loading="lazy"
                className="h-[350px] w-full object-cover md:h-[430px]"
              />
            </div>

            {/* TEXTE */}
            <div>
              <p className="font-bold uppercase tracking-widest text-green-700">
                Qui sommes-nous ?
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Votre partenaire pour vos besoins avicoles
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Global Initiativ Action propose une gamme de produits
                destinés aux personnes qui souhaitent démarrer ou développer
                une activité d'élevage de volailles.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Notre objectif est de faciliter l'accès aux poussins,
                aux aliments et aux équipements nécessaires à votre élevage.
              </p>

              <a
                href={getWhatsAppLink(
                  "Bonjour Global Initiativ Action, je souhaite en savoir plus sur votre entreprise."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-800 px-7 py-4 font-bold text-white transition hover:bg-green-700"
              >
                Parlons de votre projet
                <ArrowRight size={18} />
              </a>
            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="bg-green-900 px-5 py-20"
        >
          <div className="mx-auto max-w-5xl text-center">

            <p className="font-bold uppercase tracking-widest text-yellow-400">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-5xl">
              Besoin de produits avicoles ?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-100">
              Contactez Global Initiativ Action pour obtenir des informations
              sur les produits disponibles et les conditions de commande.
            </p>

            {/* COORDONNEES */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <a
                href="tel:+221767684967"
                className="flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 text-white transition hover:bg-white/20"
              >
                <Phone className="text-yellow-400" />
                <span>+221 76 768 49 67</span>
              </a>

              <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 text-white">
                <MapPin className="text-yellow-400" />
                <span>Tivaouane/Keur Cheikh</span>
              </div>

            </div>

            {/* BOUTON WHATSAPP */}
            <a
              href={getWhatsAppLink(
                "Bonjour Global Initiativ Action, je souhaite avoir des informations sur vos produits."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-extrabold text-green-950 transition hover:bg-yellow-300"
            >
              <MessageCircle size={21} />
              Commander sur WhatsApp
            </a>

            <p className="mt-3 text-xs text-green-200">
              Nous sommes disponibles pour répondre à vos demandes.
            </p>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="bg-green-950 px-5 py-8 text-center text-green-100">

        <p className="font-bold text-white">
          Global Initiativ Action
        </p>

        <p className="mt-2 text-sm">
          Votre partenaire avicole.
        </p>

        <div className="mt-4 flex justify-center">
          <a
            href={getWhatsAppLink(
              "Bonjour Global Initiativ Action."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-yellow-300 hover:text-yellow-200"
          >
            <MessageCircle size={17} />
            Contactez-nous sur WhatsApp
          </a>
        </div>

        <p className="mt-5 text-xs text-green-300">
          © {new Date().getFullYear()} Global Initiativ Action.
          Tous droits réservés.
        </p>

      </footer>

      {/* ================= WHATSAPP FLOTTANT ================= */}

      <a
        href={getWhatsAppLink(
          "Bonjour Global Initiativ Action, je souhaite avoir des informations sur vos produits."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Global Initiativ Action sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
      >
        <MessageCircle size={30} />
      </a>

    </div>
  );
}

export default App;
