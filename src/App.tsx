import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin } from 'lucide-react';
import { LINKS, PROFILE_COPY, type Locale } from './data/profile';

export function App() {
  const [locale, setLocale] = useState<Locale>('pt');
  const [activeStepId, setActiveStepId] = useState<string>('people');
  const [copied, setCopied] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const copy = PROFILE_COPY[locale];
  const activeStep =
    copy.journey.steps.find((step) => step.id === activeStepId) ??
    copy.journey.steps[0];

  useEffect(() => {
    document.title = copy.metaTitle;
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', copy.hero.subtitle);
    }
  }, [copy.hero.subtitle, copy.metaTitle, locale]);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(LINKS.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${LINKS.email}`;
    }
  }

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const steps = copy.journey.steps;
    let nextIndex = index;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      nextIndex = (index + 1) % steps.length;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + steps.length) % steps.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = steps.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextStep = steps[nextIndex];
    if (nextStep) {
      setActiveStepId(nextStep.id);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  const marqueeTopics =
    locale === 'pt'
      ? [
          'People Strategy',
          'Target Setting and Cascading',
          'Employee Experience',
          'Cultura Organizacional',
          'Logística Tática & KPIs',
          'Direito & Conciliação',
          'People Analytics',
        ]
      : [
          'People Strategy',
          'Target Setting and Cascading',
          'Employee Experience',
          'Organizational Culture',
          'Tactical Logistics & KPIs',
          'Law & Conciliation',
          'People Analytics',
        ];

  return (
    <>
      <a href="#top" className="skip-link">
        {locale === 'pt' ? 'Ir para o conteúdo' : 'Skip to content'}
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="wordmark">
            Danielle Martins
          </a>

          <div className="header-right">
            <nav
              aria-label={
                locale === 'pt' ? 'Navegação principal' : 'Primary navigation'
              }
            >
              <ul className="nav-links">
                <li>
                  <a href="#historia">{copy.nav.story}</a>
                </li>
                <li>
                  <a href="#experiencia">{copy.nav.experience}</a>
                </li>
                <li>
                  <a href="#formacao">{copy.nav.education}</a>
                </li>
                <li>
                  <a href="#contato">{copy.nav.contact}</a>
                </li>
              </ul>
            </nav>

            <div className="lang-toggle" role="group" aria-label="Language selector">
              <button
                type="button"
                className="lang-btn"
                aria-pressed={locale === 'pt'}
                onClick={() => setLocale('pt')}
              >
                PT
              </button>
              <button
                type="button"
                className="lang-btn"
                aria-pressed={locale === 'en'}
                onClick={() => setLocale('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-band">
          <div className="container hero-grid">
            <div>
              <div className="hero-location">
                <MapPin size={15} strokeWidth={2} aria-hidden="true" />
                <span>{copy.hero.greeting}</span>
              </div>

              <h1 className="hero-headline">{copy.hero.headline}</h1>
              <p className="hero-subtitle">{copy.hero.subtitle}</p>

              <div className="hero-actions">
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>{copy.hero.linkedinCta}</span>
                  <ArrowUpRight size={17} strokeWidth={1.75} aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${LINKS.email}`}
                  className="btn btn-secondary"
                >
                  <Mail size={16} strokeWidth={1.75} aria-hidden="true" />
                  <span>{copy.hero.emailCta}</span>
                </a>
              </div>
            </div>

            <div className="hero-photo-wrap">
              <figure className="hero-photo-card">
                <img
                  src="/danielle.jpg"
                  alt={copy.hero.photoAlt}
                  width={480}
                  height={640}
                  className="hero-photo-img"
                  loading="eager"
                />
                <figcaption className="hero-photo-note">
                  <span className="hero-handwriting">
                    {locale === 'pt'
                      ? 'Sempre a partir das pessoas'
                      : 'Always starting with people'}
                  </span>
                  <span className="hero-photo-badge">{copy.hero.photoBadge}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <div className="marquee-band" aria-hidden="true">
          <div className="marquee-track">
            {marqueeTopics.map((topic) => (
              <span key={topic} className="marquee-item">
                <span>{topic}</span>
                <span className="marquee-dot" />
              </span>
            ))}
            {marqueeTopics.map((topic) => (
              <span
                key={`dup-${topic}`}
                className="marquee-item marquee-item--duplicate"
              >
                <span>{topic}</span>
                <span className="marquee-dot" />
              </span>
            ))}
          </div>
        </div>

        <section
          id="historia"
          className="chapters-band"
          aria-labelledby="journey-heading"
        >
          <div className="container">
            <h2 id="journey-heading" className="section-heading">
              {copy.journey.heading}
            </h2>
            <p className="section-lead">{copy.journey.lead}</p>

            <div className="chapters-shell">
              <div
                className="chapter-tabs"
                role="tablist"
                aria-orientation="vertical"
                aria-label={copy.journey.heading}
              >
                {copy.journey.steps.map((step, index) => {
                  const isSelected = step.id === activeStep.id;
                  return (
                    <button
                      key={step.id}
                      ref={(el) => {
                        tabRefs.current[index] = el;
                      }}
                      id={`tab-${step.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      aria-controls={`panel-${step.id}`}
                      tabIndex={isSelected ? 0 : -1}
                      className="chapter-tab"
                      onClick={() => setActiveStepId(step.id)}
                      onKeyDown={(e) => handleTabKeyDown(e, index)}
                    >
                      <span className="chapter-tab-period tabular-nums">
                        {step.period}
                      </span>
                      <span className="chapter-tab-title">{step.title}</span>
                    </button>
                  );
                })}
              </div>

              <div
                id={`panel-${activeStep.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeStep.id}`}
                className="chapter-panel"
              >
                <span className="chapter-panel-place">{activeStep.place}</span>
                <h3 className="chapter-panel-title">{activeStep.title}</h3>
                <p className="chapter-panel-story">{activeStep.story}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sky-band">
          <div className="container about-layout">
            <div>
              <h2 className="section-heading">{copy.about.heading}</h2>
              <div className="about-body">
                {copy.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="about-quote-card">
              <blockquote className="about-quote">{copy.about.quote}</blockquote>
              <p className="about-signature">— Danielle Martins</p>
            </div>
          </div>
        </section>

        <section
          id="experiencia"
          className="paper-band"
          aria-labelledby="experience-heading"
        >
          <div className="container">
            <div className="experience-header">
              <h2 id="experience-heading" className="section-heading">
                {copy.experience.heading}
              </h2>
              <p className="company-meta tabular-nums">
                {copy.experience.company} · {copy.experience.totalTenure}
              </p>
            </div>

            <ol className="experience-list">
              {copy.experience.items.map((item) => (
                <li key={item.role} className="experience-row">
                  <div>
                    <h3 className="role-title">{item.role}</h3>
                    <p className="role-meta tabular-nums">
                      {item.period} · {item.duration}
                    </p>
                    <p className="role-meta">{item.location}</p>
                  </div>
                  <ul className="role-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="formacao" className="sky-band">
          <div className="container credentials-grid">
            <div>
              <h2 className="section-heading">
                {copy.credentials.educationHeading}
              </h2>
              <ul className="edu-list">
                {copy.credentials.education.map((edu) => (
                  <li key={edu.institution} className="edu-item">
                    <h3 className="edu-school">{edu.institution}</h3>
                    <p className="edu-degree">{edu.degree}</p>
                    <p className="edu-period tabular-nums">{edu.period}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="credentials-side">
              <div>
                <h2 className="sub-heading">
                  {copy.credentials.competenciesHeading}
                </h2>
                <ul className="pill-list">
                  {copy.credentials.competencies.map((item) => (
                    <li key={item} className="pill">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="sub-heading">
                  {copy.credentials.languagesHeading}
                </h2>
                <ul className="detail-list">
                  {copy.credentials.languages.map((lang) => (
                    <li key={lang.name} className="detail-row">
                      <span>{lang.name}</span>
                      <span className="detail-muted">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="sub-heading">
                  {copy.credentials.honorsHeading}
                </h2>
                <ul className="detail-list">
                  {copy.credentials.honors.map((honor) => (
                    <li key={honor} className="detail-row">
                      <span>{honor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="contact-band">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="contact-heading">{copy.contact.heading}</h2>
              <p className="contact-lead">{copy.contact.lead}</p>
            </div>

            <div className="contact-actions">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-on-blue"
              >
                <span>{copy.contact.linkedinCta}</span>
                <ArrowUpRight size={17} strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${LINKS.email}`}
                className="btn btn-outline-blue"
              >
                <Mail size={16} strokeWidth={1.75} aria-hidden="true" />
                <span>{copy.contact.emailCta}</span>
              </a>
              <button
                type="button"
                className="btn btn-outline-blue"
                onClick={handleCopyEmail}
              >
                {copied ? (
                  <Check size={16} strokeWidth={1.75} aria-hidden="true" />
                ) : (
                  <Copy size={16} strokeWidth={1.75} aria-hidden="true" />
                )}
                <span>
                  {copied ? copy.contact.copiedEmail : copy.contact.copyEmail}
                </span>
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? copy.contact.copiedEmail : ''}
              </span>
            </div>
          </div>

          <div className="site-footer">
            <span>Danielle Martins</span>
            <span>{copy.contact.footerNote}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
