import React, { useState } from 'react';

const ICONS = {
  share: 'M12 3v12M8 7l4-4 4 4M5 15v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8M22 21v-2a4 4 0 0 0-3-3.87',
  zap: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z'
};

const Icon = ({ name }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={ICONS[name]} />
  </svg>
);

export default function App() {
  const [openFaq, setOpenFaq] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Dashboard', badge: '' }, { label: 'Inbox', badge: '' }, { label: 'Cotizaciones', badge: '' },
    { label: 'Proyectos', badge: '3' }, { label: 'Agencias', badge: '' }, { label: 'Buzón', badge: '' }, { label: 'Configuración', badge: '' }
  ];

  const reqs = [
    { name: 'Desarrollo Web', state: 'Activo', color: '#0f7a4a', bg: '#e4f6ec' },
    { name: 'Desarrollo Backend para E-commerce', state: 'Subasta', color: '#b04a17', bg: '#fdeee5' },
    { name: 'Integración API', state: 'Activo', color: '#0f7a4a', bg: '#e4f6ec' },
    { name: 'App móvil en QA', state: 'Subasta', color: '#b04a17', bg: '#fdeee5' }
  ];

  const agencies = [
    { name: 'PixelFlow Studios', meta: 'Perú · 40 proyectos' },
    { name: 'DataTech Solutions', meta: 'Chile · 31 proyectos' },
    { name: 'Rumbo Digital', meta: 'Perú · 28 proyectos' },
    { name: 'Kodea Labs', meta: 'Colombia · 22 proyectos' }
  ];

  const stats = [
    { value: '70', suffix: '', label: 'Proyectos adjudicados con MVP' },
    { value: '120', suffix: '', label: 'Agencias proveedoras registradas' },
    { value: 'S/3.5', suffix: 'M', label: 'Contratos cerrados' }
  ];

  const benefits = [
    { icon: 'share', title: 'Menos riesgo', body: 'Agencias verificadas y especializadas para que no pierdas tiempo ni dinero.' },
    { icon: 'users', title: 'Mejores propuestas', body: 'Recibe varias ofertas y compara precio, calidad y enfoque.' },
    { icon: 'zap', title: 'Proceso transparente', body: 'Acompañamiento claro desde el requerimiento hasta la selección final.' }
  ];

  const steps = [
    { n: '1', title: 'Paso 1: Publica tu requerimiento', body: 'Cuéntanos qué necesitas y define tu proyecto con claridad.' },
    { n: '2', title: 'Paso 2: Recibe propuestas verificadas', body: 'Agencias especializadas compiten para darte la mejor oferta.' },
    { n: '3', title: 'Paso 3: Elige tu aliado ideal', body: 'Selecciona la mejor propuesta según precio, experiencia y valor.' }
  ];

  const quotes = [
    { text: 'La búsqueda de proveedores para nuestro sistema web fue clave después de obtener el fondo Mipymes Digitales; además hicieron el diagnóstico digital inicial.', name: 'Liliana Ato', role: 'CEO Externa Asesores' },
    { text: 'Buscamos la asesoría de INCAhub para postular al fondo de Startup Perú. Entendieron rápidamente nuestros objetivos de crecimiento en Latam y fue una gran experiencia.', name: 'Giancarlo Ricovi', role: 'Founder Doctor CV' },
    { text: 'Gracias al equipo de consultores se pudo moldear la propuesta de innovación considerando variables que sumaron al proyecto y al diagnóstico empresarial. Hubo acompañamiento y una selección de proveedores web expertos.', name: 'Miguel Solano', role: 'CEO Aula Mype' }
  ];

  const faqs = [
    { q: '¿Qué es INCAhub?', a: 'INCAhub es una plataforma que conecta empresas con agencias tecnológicas verificadas mediante un proceso competitivo y transparente.' },
    { q: '¿Cuánto cuesta publicar un requerimiento?', a: 'Publicar tu requerimiento es gratuito. Solo cobramos una comisión cuando adjudicas el proyecto a una agencia.' },
    { q: '¿Cómo se asegura la calidad de las agencias?', a: 'Validamos experiencia, portafolio y referencias de cada agencia antes de habilitarla para ofertar.' },
    { q: '¿Cuánto tarda en llegar una propuesta?', a: 'Las primeras propuestas suelen llegar dentro de las primeras 72 horas tras publicar el requerimiento.' },
    { q: '¿Puedo registrar mi agencia?', a: 'Sí. Completa el registro de agencia y nuestro equipo revisará tu perfil para habilitarte en la plataforma.' }
  ];

  return (
    <div style={{ width: '100%', overflowX: 'hidden', color: '#1b1b1b' }}>
      {/* NAV */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fdf4ea', borderBottom: '1px solid rgba(27,27,27,.07)' }}>
        <div className="header-container">
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/logo.png" alt="INCAhub" style={{ height: 64, width: 'auto' }} />
          </a>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
          <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#nosotros" style={{ color: 'inherit' }} onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
            <a href="#beneficios" style={{ color: 'inherit' }} onClick={() => setIsMobileMenuOpen(false)}>Beneficios</a>
            <a href="#como-funciona" style={{ color: 'inherit' }} onClick={() => setIsMobileMenuOpen(false)}>Como funciona</a>
            <a href="#testimonios" style={{ color: 'inherit' }} onClick={() => setIsMobileMenuOpen(false)}>Testimonios</a>
            <a href="#faq" style={{ color: 'inherit' }} onClick={() => setIsMobileMenuOpen(false)}>Preguntas frecuentes</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" style={{ position: 'relative', background: '#fdf4ea', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(232,98,44,.28) 1px, transparent 1px)', backgroundSize: '18px 18px', WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,.9), transparent 45%)', maskImage: 'linear-gradient(to left, rgba(0,0,0,.9), transparent 45%)' }}></div>
        <div style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '96px 28px 104px' }}>
          <h1 style={{ margin: 0, fontSize: 'clamp(40px,6.4vw,74px)', lineHeight: 1.06, fontWeight: 700, letterSpacing: '-.035em', maxWidth: '13ch' }}>Acelerando la transformación digital en Latam.</h1>
          <p style={{ margin: '26px 0 0', fontSize: 18, lineHeight: 1.6, color: '#6b6a67', maxWidth: '38ch' }}>Revolucionando la conexión entre empresas y agencias tecnológicas.</p>
          <div className="hero-buttons">
            <a href="https://app.incahub.tech/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 26px', borderRadius: 999, background: '#1b1b1b', color: '#fff', fontSize: 15, fontWeight: 600, border: '1px solid #1b1b1b' }}>Publicar Requerimiento</a>
            <a href="https://app.incahub.tech/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 26px', borderRadius: 999, background: '#fff', color: '#1b1b1b', fontSize: 15, fontWeight: 600, border: '1px solid rgba(27,27,27,.12)' }}>Registro Agencia</a>
          </div>
        </div>
      </section>

      {/* DASHBOARD MOCK */}
      <section style={{ position: 'relative', background: '#fdf4ea', padding: '0 28px 90px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(232,98,44,.18) 1px, transparent 1px)', backgroundSize: '18px 18px' }}></div>
        <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', borderRadius: 28, padding: 16, background: 'rgba(255,255,255,.55)', border: '1px solid rgba(232,98,44,.35)', boxShadow: '0 30px 70px -40px rgba(27,27,27,.35)' }}>
          <div className="dashboard-grid">
            {/* sidebar */}
            <aside className="dashboard-sidebar" style={{ background: '#fafafa', borderRight: '1px solid rgba(27,27,27,.07)', padding: '18px 14px', display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 6px 14px' }}>
                <img src="/logo.png" alt="INCAhub" style={{ height: 40, width: 'auto' }} />
              </div>
              {navItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '8px 10px', borderRadius: 8, fontSize: 13, color: '#5c5a57' }}>
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                  <span style={{ fontSize: 11, color: '#e8622c', fontWeight: 700 }}>{item.badge}</span>
                </div>
              ))}
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, paddingTop: 16, fontSize: 13, color: '#5c5a57' }}>
                <span style={{ width: 22, height: 22, borderRadius: 999, background: '#e5e2dd', display: 'inline-block' }}></span> Alan E.
              </div>
            </aside>
            {/* main */}
            <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
              <div style={{ border: '1px solid rgba(27,27,27,.08)', borderRadius: 12, padding: '14px 16px', fontSize: 15, fontWeight: 600 }}>Dashboard — Proyecto “Lanzamiento App Móvil”</div>
              <div style={{ border: '1px solid rgba(27,27,27,.08)', borderRadius: 12, padding: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Resumen del Proyecto</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 12, fontSize: 12, color: '#6b6a67' }}>
                  <div>Presupuesto asignado<div style={{ color: '#1b1b1b', fontWeight: 600, marginTop: 4 }}>S/ 50,000</div></div>
                  <div>Fecha límite<div style={{ color: '#1b1b1b', fontWeight: 600, marginTop: 4 }}>30 Nov 2026</div></div>
                  <div>Estado<div style={{ color: '#1b1b1b', fontWeight: 600, marginTop: 4 }}>En ejecución</div></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(27,27,27,.07)' }}>
                  <span style={{ fontSize: 12, color: '#6b6a67', background: '#f5f4f2', padding: '6px 10px', borderRadius: 8 }}>Contrato en ejecución</span>
                  <span style={{ width: 44, height: 24, borderRadius: 999, background: '#22b573', position: 'relative', display: 'inline-block' }}><span style={{ position: 'absolute', right: 3, top: 3, width: 18, height: 18, borderRadius: 999, background: '#fff' }}></span></span>
                </div>
              </div>
              <div style={{ border: '1px solid rgba(27,27,27,.08)', borderRadius: 12, padding: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Requerimientos abiertos</div>
                {reqs.map((r, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '9px 0', borderTop: '1px solid rgba(27,27,27,.06)', fontSize: 13, color: '#3c3a38' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}><span style={{ width: 22, height: 22, borderRadius: 999, background: '#efece7', display: 'inline-block', flex: 'none' }}></span><span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</span></span>
                    <span style={{ flex: 'none', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 999, color: r.color, background: r.bg }}>{r.state}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* right */}
            <aside className="dashboard-sidebar" style={{ borderLeft: '1px solid rgba(27,27,27,.07)', padding: '18px 14px', display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Agencias sugeridas</div>
              {agencies.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 10, border: '1px solid rgba(27,27,27,.07)', borderRadius: 10, minWidth: 0 }}>
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: '#efece7', flex: 'none', display: 'inline-block' }}></span>
                  <span style={{ minWidth: 0 }}>
                    <span style={{ display: 'block', fontSize: 12.5, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</span>
                    <span style={{ display: 'block', fontSize: 11, color: '#8c8a86' }}>{a.meta}</span>
                  </span>
                </div>
              ))}
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: 10, border: '1px solid rgba(27,27,27,.07)', borderRadius: 10, fontSize: 12.5, color: '#5c5a57' }}>
                Chat de soporte
                <span style={{ width: 26, height: 26, borderRadius: 999, background: '#5b4bc4', display: 'inline-block' }}></span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" style={{ background: '#fafafa', borderTop: '1px solid rgba(27,27,27,.07)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '88px 28px 0', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', padding: '8px 18px', borderRadius: 999, background: '#fff', border: '1px solid rgba(27,27,27,.08)', fontSize: 13, fontWeight: 500, color: '#3c3a38' }}>Nosotros</span>
          <h2 style={{ margin: '26px auto 0', fontSize: 'clamp(32px,4.6vw,54px)', lineHeight: 1.12, fontWeight: 700, letterSpacing: '-.03em', maxWidth: '20ch' }}>Tu socio para impulsar innovación con proveedores confiables</h2>
          <p style={{ margin: '22px auto 0', maxWidth: '60ch', fontSize: 17, lineHeight: 1.65, color: '#7a7975' }}><strong style={{ color: '#3c3a38' }}>INCAhub</strong> conecta empresas y startups con agencias tecnológicas especializadas mediante un proceso <strong style={{ color: '#3c3a38' }}>transparente y competitivo</strong>, asegurando calidad, precio y cumplimiento.</p>
        </div>
        <div style={{ maxWidth: 1240, margin: '72px auto 0', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', borderTop: '1px solid rgba(27,27,27,.09)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ padding: '56px 24px', textAlign: 'center', borderRight: '1px solid rgba(27,27,27,.09)' }}>
                <div style={{ fontSize: 56, fontWeight: 600, letterSpacing: '-.03em', fontFeatureSettings: "'tnum'" }}>{s.value}<span style={{ fontSize: 28, color: '#e8622c' }}>{s.suffix}</span></div>
                <div style={{ marginTop: 10, fontSize: 15, color: '#7a7975' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" style={{ background: '#fafafa', borderTop: '1px solid rgba(27,27,27,.09)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '88px 28px 0', textAlign: 'center', position: 'relative' }}>
          <span style={{ display: 'inline-block', padding: '8px 18px', borderRadius: 999, background: '#fff', border: '1px solid rgba(27,27,27,.08)', fontSize: 13, fontWeight: 500, color: '#3c3a38' }}>Beneficios</span>
          <h2 style={{ margin: '26px auto 0', fontSize: 'clamp(32px,4.6vw,54px)', lineHeight: 1.12, fontWeight: 700, letterSpacing: '-.03em', maxWidth: '18ch' }}>Haz que tu proyecto avance rápido, seguro y sin sorpresas</h2>
          <p style={{ margin: '22px auto 60px', maxWidth: '56ch', fontSize: 17, lineHeight: 1.65, color: '#7a7975' }}>Reduce el riesgo de contratar mal, acelera tu ejecución y consigue el proveedor ideal para tu necesidad tecnológica.</p>
        </div>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', borderTop: '1px solid rgba(27,27,27,.09)' }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ padding: '56px 32px 64px', textAlign: 'center', borderRight: '1px solid rgba(27,27,27,.09)' }}>
                <div style={{ width: 56, height: 56, margin: '0 auto 24px', borderRadius: 14, background: '#fff', border: '1px solid rgba(27,27,27,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e8622c' }}><Icon name={b.icon} /></div>
                <div style={{ fontSize: 17, fontWeight: 700 }}>{b.title}</div>
                <p style={{ margin: '10px auto 0', maxWidth: '34ch', fontSize: 15, lineHeight: 1.6, color: '#7a7975' }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" style={{ background: '#fafafa', padding: '40px 28px 80px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', background: '#1b1b1b', borderRadius: 20, padding: '88px 28px 96px', color: '#fff', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', padding: '8px 18px', borderRadius: 999, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.16)', fontSize: 13, fontWeight: 500, color: '#e9e7e4' }}>Cómo funciona</span>
          <h2 style={{ margin: '26px auto 52px', fontSize: 'clamp(32px,4.6vw,54px)', lineHeight: 1.12, fontWeight: 700, letterSpacing: '-.03em', maxWidth: '18ch', color: '#fff' }}>Acelera tu transformación digital en 3 pasos.</h2>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 22, textAlign: 'left' }}>
            {steps.map((st, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 22, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 14, padding: '28px 30px' }}>
                <span style={{ flex: 'none', width: 44, height: 44, borderRadius: 999, background: '#e8622c', color: '#fff', fontWeight: 700, fontSize: 19, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{st.n}</span>
                <span>
                  <span style={{ display: 'block', fontSize: 17, fontWeight: 600 }}>{st.title}</span>
                  <span style={{ display: 'block', marginTop: 6, fontSize: 15, lineHeight: 1.6, color: '#a8a6a2' }}>{st.body}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" style={{ background: '#fafafa', padding: '40px 28px 96px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', padding: '8px 18px', borderRadius: 999, background: '#fff', border: '1px solid rgba(27,27,27,.08)', fontSize: 13, fontWeight: 500, color: '#3c3a38' }}>Testimonios</span>
          <h2 style={{ margin: '26px auto 52px', fontSize: 'clamp(32px,4.6vw,54px)', lineHeight: 1.12, fontWeight: 700, letterSpacing: '-.03em', maxWidth: '14ch' }}>Lo dicen nuestros usuarios</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 26, textAlign: 'left' }}>
            {quotes.map((q, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid rgba(27,27,27,.08)', borderRadius: 16, padding: 30, display: 'flex', flexDirection: 'column', gap: 26 }}>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: '#3c3a38', textWrap: 'pretty' }}>{q.text}</p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 38, height: 38, borderRadius: 999, background: '#efece7', flex: 'none', display: 'inline-block' }}></span>
                  <span>
                    <span style={{ display: 'block', fontSize: 14.5, fontWeight: 700 }}>{q.name}</span>
                    <span style={{ display: 'block', fontSize: 13.5, color: '#8c8a86' }}>{q.role}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', borderTop: '1px solid rgba(27,27,27,.07)', padding: '96px 28px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 56, alignItems: 'start' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 'clamp(34px,4.4vw,52px)', lineHeight: 1.1, fontWeight: 700, letterSpacing: '-.03em', maxWidth: '10ch' }}>Preguntas frecuentes</h2>
            <p style={{ margin: '22px 0 30px', fontSize: 16, color: '#7a7975' }}>¿Tienes alguna pregunta? ¡No dudes en contactarnos!</p>
            <button onClick={() => setIsModalOpen(true)} style={{ display: 'inline-flex', padding: '14px 26px', borderRadius: 10, border: '1px solid rgba(27,27,27,.14)', fontSize: 15, fontWeight: 600, background: 'transparent', cursor: 'pointer' }}>Contáctanos</button>
          </div>
          <div style={{ background: '#fafafa', borderRadius: 18, padding: 16 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid rgba(27,27,27,.07)', borderRadius: 12, padding: '20px 22px', marginBottom: 12, cursor: 'pointer' }} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18 }}>
                  <span style={{ fontSize: 15.5, fontWeight: 600 }}>{f.q}</span>
                  <span style={{ flex: 'none', width: 30, height: 30, borderRadius: 999, border: '1px solid rgba(27,27,27,.14)', color: '#5c5a57', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
                    {openFaq === i ? '–' : '+'}
                  </span>
                </div>
                {openFaq === i && (
                  <p style={{ margin: '12px 0 0', fontSize: 15, lineHeight: 1.65, color: '#7a7975', maxWidth: '52ch' }}>{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#fff', padding: '0 28px 28px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', background: '#232323', borderRadius: 20, padding: '64px 48px 44px', color: '#e9e7e4' }}>
          <div className="footer-container">
            <img src="/logo.png" alt="INCAhub" style={{ height: 64, width: 'auto', filter: 'brightness(0) invert(1)' }} />
          </div>
          <div className="footer-content">
            <span>hola@incahub.tech</span>
            <span>936 282 838</span>
            <span>Lima — Perú</span>
          </div>
          <div style={{ marginTop: 44, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,.1)', fontSize: 13.5, color: '#8c8a86' }}>© 2026 INCAhub — Todos los derechos reservados</div>
        </div>
      </footer>

      {/* FLOATING */}
      <a href="https://wa.me/51936282838" target="_blank" rel="noreferrer" style={{ position: 'fixed', left: 22, bottom: 22, zIndex: 60, width: 52, height: 52, borderRadius: 999, background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 24px -10px rgba(0,0,0,.5)' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.42 1.31-1.95 1.35-.52.05-1 .24-3.37-.7-2.85-1.12-4.65-4.03-4.79-4.22-.14-.19-1.14-1.52-1.14-2.9s.72-2.06.98-2.34c.26-.28.56-.35.75-.35h.54c.17 0 .41-.07.64.49.24.57.8 1.96.87 2.1.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.3.36-.42.48-.14.14-.29.29-.12.57.16.28.73 1.2 1.56 1.95 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.19-.28.37-.23.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.11.07.66-.17 1.34Z"/></svg>
      </a>
      <a href="#top" style={{ position: 'fixed', right: 22, bottom: 22, zIndex: 60, width: 44, height: 44, borderRadius: 999, background: '#fff', border: '1px solid rgba(27,27,27,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3c3a38' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>
      </a>

      {/* CONTACT MODAL */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)' }} onClick={() => setIsModalOpen(false)}></div>
          <div style={{ position: 'relative', background: '#fff', borderRadius: 20, padding: 32, width: '100%', maxWidth: 440, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Contáctanos</h3>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', border: 'none', fontSize: 24, cursor: 'pointer', lineHeight: 1, padding: 0 }}>&times;</button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.'); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Nombre y Apellido</label>
                <input required type="text" placeholder="Ej. Juan Pérez" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #ddd', fontSize: 15, outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Correo electrónico</label>
                <input required type="email" placeholder="tu@correo.com" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #ddd', fontSize: 15, outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Mensaje</label>
                <textarea required rows="4" placeholder="¿En qué te podemos ayudar?" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #ddd', fontSize: 15, resize: 'vertical', outline: 'none' }}></textarea>
              </div>
              <button type="submit" style={{ marginTop: 8, padding: '14px', borderRadius: 10, background: '#1b1b1b', color: '#fff', fontSize: 15, fontWeight: 600, border: 'none', cursor: 'pointer' }}>Enviar Mensaje</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
