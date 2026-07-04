export const injectStyles = () => {
  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Lato:wght@300;400;700&family=Oswald:wght@400;500;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; min-height: 100%; width: 100%; overflow-x: hidden; }
    body { font-family: 'Lato', sans-serif; color: #1a1a2e; background: #fff; min-height: 100vh; width: 100%; overflow-x: hidden; }
    #root { min-height: 100%; width: 100%; }
    a { text-decoration: none; color: inherit; }
    img { max-width: 100%; }

    /* Accessibility Styles */
    *:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }
    
    a:focus-visible, button:focus-visible, [role="button"]:focus-visible {
      outline: 3px solid var(--gold);
      outline-offset: 3px;
    }

    :root {
      --deep-blue: #0a1628;
      --deep-blue-2: #0d1b2a;
      --deep-blue-glass: rgba(10, 22, 40, 0.82);
      --navy: #1a4731;
      --navy-dark: #0d2e1e;
      --navy-mid: #22623f;
      --accent: #5dd39e;
      --accent-hover: #6ee0ab;
      --gold: #2e9e5b;
      --gold-light: #3ab36d;
      --black: #0a0a0a;
      --black-soft: #111;
      --white: #ffffff;
      --grey-light: #f5f5f5;
      --grey-mid: #e0e0e0;
      --text-dark: #0a0a0a;
      --text-mid: #444;
      --text-light: #666;
    }

    .nav-dropdown { display: none; position: absolute; top: 100%; left: 0; background: var(--deep-blue-glass); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); min-width: 240px; box-shadow: 0 12px 40px rgba(0,0,0,0.4); z-index: 1000; border-top: 1px solid rgba(255,255,255,0.12); }
    .nav-item:hover .nav-dropdown { display: block; }
    .nav-dropdown-item { display: block; padding: 10px 20px; color: rgba(255,255,255,0.85); font-size: 13px; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.06); transition: all 0.2s; }
    .nav-dropdown-item:hover { color: var(--accent); background: rgba(93,211,158,0.12); padding-left: 28px; }

    .counter-animate { animation: countUp 2s ease-out forwards; }
    @keyframes countUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

    .fade-in { animation: fadeIn 0.8s ease-out forwards; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }

    .hero-slide { animation: slideIn 0.6s ease-out forwards; }
    @keyframes slideIn { from { opacity: 0; } to { opacity: 1; } }

    @keyframes heroEntrance { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes pageReveal { from { opacity: 0; } to { opacity: 1; } }
    @keyframes staggerIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes heroShine { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }

    .page-load { animation: pageReveal 0.5s ease-out forwards; }
    .hero-entrance { animation: heroEntrance 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
    .section-reveal { opacity: 0; animation: staggerIn 0.7s ease-out forwards; }
    .section-reveal:nth-child(1) { animation-delay: 0.05s; }
    .section-reveal:nth-child(2) { animation-delay: 0.12s; }
    .section-reveal:nth-child(3) { animation-delay: 0.19s; }
    .section-reveal:nth-child(4) { animation-delay: 0.26s; }
    .section-reveal:nth-child(5) { animation-delay: 0.33s; }
    .section-reveal:nth-child(6) { animation-delay: 0.4s; }

    .home-section { opacity: 0; animation: staggerIn 0.7s ease-out forwards; }
    .home-section.delay-0 { animation-delay: 0s; }
    .home-section.delay-1 { animation-delay: 0.08s; }
    .home-section.delay-2 { animation-delay: 0.16s; }
    .home-section.delay-3 { animation-delay: 0.24s; }
    .home-section.delay-4 { animation-delay: 0.32s; }
    .home-section.delay-5 { animation-delay: 0.4s; }
    .home-section.delay-6 { animation-delay: 0.48s; }
    .home-section.delay-7 { animation-delay: 0.56s; }
    .home-section.delay-8 { animation-delay: 0.64s; }

    .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important; }

    .btn-primary { background: var(--accent); color: var(--black); border: none; padding: 12px 28px; font-family: 'Oswald', sans-serif; font-size: 14px; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: all 0.25s; display: inline-block; font-weight: 600; }
    .btn-primary:hover { background: var(--accent-hover); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(93,211,158,0.35); }

    .btn-outline { background: transparent; color: var(--white); border: 2px solid rgba(255,255,255,0.6); padding: 11px 28px; font-family: 'Oswald', sans-serif; font-size: 14px; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: all 0.25s; display: inline-block; }
    .btn-outline:hover { background: rgba(255,255,255,0.15); color: var(--white); border-color: var(--white); }

    .btn-navy { background: var(--deep-blue); color: var(--white); border: 2px solid var(--deep-blue); padding: 11px 28px; font-family: 'Oswald', sans-serif; font-size: 14px; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: all 0.25s; display: inline-block; }
    .btn-navy:hover { background: #0f2847; border-color: #0f2847; }

    .section-label { font-family: 'Oswald', sans-serif; font-size: 12px; letter-spacing: 4px; text-transform: uppercase; color: var(--gold); margin-bottom: 12px; }
    .section-label-accent { color: var(--accent) !important; }
    .section-heading { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 44px); font-weight: 700; color: var(--text-dark); line-height: 1.2; }
    .section-heading-white { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 44px); font-weight: 700; color: var(--white); line-height: 1.2; }
    .section-sub { font-size: 16px; color: var(--text-mid); line-height: 1.8; margin-top: 16px; }

    .divider-gold { width: 60px; height: 3px; background: var(--gold); margin: 16px 0 24px; }
    .divider-gold-center { width: 60px; height: 3px; background: var(--gold); margin: 16px auto 24px; }
    .divider-light { width: 60px; height: 3px; background: var(--accent); margin: 16px 0 24px; }
    .divider-light-center { width: 60px; height: 3px; background: var(--accent); margin: 16px auto 24px; }

    .gallery-img { width: 100%; height: 220px; object-fit: cover; display: block; background: linear-gradient(135deg, var(--deep-blue) 0%, #0f2847 100%); position: relative; overflow: hidden; }
    .gallery-overlay { position: absolute; inset: 0; background: rgba(10,22,40,0.88); display: flex; flex-direction: column; justify-content: flex-end; padding: 16px; opacity: 0; transition: opacity 0.3s; }
    .gallery-card:hover .gallery-overlay { opacity: 1; }
    .gallery-card { position: relative; overflow: hidden; cursor: pointer; }

    .partner-logo { width: 140px; height: 70px; display: flex; align-items: center; justify-content: center; background: #fff; border: 1px solid var(--grey-mid); filter: grayscale(1) opacity(0.6); transition: all 0.3s; cursor: pointer; padding: 12px; border-radius: 4px; }
    .partner-logo:hover { filter: grayscale(0) opacity(1); box-shadow: 0 4px 16px rgba(0,0,0,0.1); }

    .form-input { width: 100%; padding: 12px 16px; border: 1px solid var(--grey-mid); font-family: 'Lato', sans-serif; font-size: 14px; color: var(--text-dark); background: #fff; outline: none; transition: border-color 0.2s; border-radius: 2px; }
    .form-input:focus { border-color: var(--text-dark); }
    .form-label { font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: var(--text-dark); margin-bottom: 6px; display: block; }

    .prog-card { background: #fff; padding: 32px 24px; border-bottom: 3px solid transparent; transition: all 0.3s; cursor: pointer; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
    .prog-card:hover { border-bottom-color: var(--gold); transform: translateY(-4px); box-shadow: 0 12px 32px rgba(46,158,91,0.2); }
    .prog-icon { width: 56px; height: 56px; background: linear-gradient(135deg, var(--gold) 0%, var(--accent) 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; font-size: 24px; color: var(--white); }

    .stat-card { text-align: center; padding: 32px 20px; }
    .stat-num { font-family: 'Playfair Display', serif; font-size: clamp(36px, 5vw, 60px); font-weight: 900; color: var(--accent); line-height: 1; }
    .stat-label { font-family: 'Oswald', sans-serif; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.65); margin-top: 8px; }

    .pub-card { background: #fff; border: 1px solid var(--grey-mid); overflow: hidden; transition: all 0.3s; }
    .pub-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.1); transform: translateY(-3px); }
    .pub-thumb { height: 180px; background: linear-gradient(135deg, var(--deep-blue) 0%, #0f2847 100%); display: flex; align-items: center; justify-content: center; }
    .pub-tag { display: inline-block; background: var(--gold); color: var(--white); font-size: 10px; font-family: 'Oswald', sans-serif; letter-spacing: 1.5px; text-transform: uppercase; padding: 3px 10px; margin-bottom: 10px; }

    .breadcrumb { font-size: 12px; color: var(--text-light); padding: 12px 0; border-bottom: 1px solid var(--grey-mid); }
    .breadcrumb span { color: var(--text-dark); }

    .page-hero { position: relative; min-height: 360px; display: flex; align-items: center; background: linear-gradient(135deg, var(--deep-blue) 0%, var(--deep-blue-2) 60%, #0f2847 100%); overflow: hidden; }
    .page-hero::after { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }

    .value-card { background: #fff; padding: 28px 24px; border-left: 4px solid transparent; transition: all 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
    .value-card:hover { border-left-color: var(--gold); transform: translateX(6px); }

    .toc-step { display: flex; gap: 20px; padding: 24px 0; border-bottom: 1px solid var(--grey-mid); }
    .toc-step:last-child { border-bottom: none; }
    .toc-num { min-width: 48px; height: 48px; background: var(--deep-blue); color: var(--white); display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; flex-shrink: 0; }

    .team-card { background: #fff; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.06); transition: all 0.3s; }
    .team-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
    .team-photo { height: 220px; background: linear-gradient(135deg, var(--deep-blue), #0f2847); display: flex; align-items: center; justify-content: center; }

    .mobile-menu { display: none; }

    .section-pad-lg { padding: 96px 40px; }
    .section-pad-md { padding: 80px 40px; }
    .section-pad-sm { padding: 60px 40px; }
    .page-hero-pad { padding: 130px 40px 60px; }
    .hero-min-h { min-height: 600px; }
    .contact-form-grid { grid-template-columns: 1fr 1fr; }
    .contact-form-grid .form-row { grid-template-columns: 1fr 1fr; }

    @media (max-width: 768px) {
      .content-offset { padding-top: 72px !important; }
      .desktop-nav { display: none; }
      .mobile-menu { display: block; }
      .top-utility-bar { display: none !important; }
      .nav-inner, .hero-inner, .footer-inner { padding-left: 24px !important; padding-right: 24px !important; }
      .section-pad-lg { padding: 48px 24px !important; }
      .section-pad-md { padding: 48px 24px !important; }
      .section-pad-sm { padding: 40px 24px !important; }
      .page-hero-pad { padding: 100px 24px 48px !important; }
      .hero-min-h { min-height: min(100vh, 700px) !important; }
      .grid-3 { grid-template-columns: 1fr !important; }
      .grid-2 { grid-template-columns: 1fr !important; }
      .grid-4 { grid-template-columns: 1fr 1fr !important; }
      .grid-5 { grid-template-columns: 1fr 1fr !important; }
      .hero-text h1 { font-size: 28px !important; }
      .footer-grid { grid-template-columns: 1fr 1fr !important; }
      .footer-inner { padding: 40px 24px 32px !important; }
      .contact-form-grid { grid-template-columns: 1fr !important; }
      .contact-form-grid .form-row { grid-template-columns: 1fr !important; }
      .contact-form-inner { padding: 32px 24px !important; }
      .page-hero { min-height: 280px !important; }
      .about-img-box { height: 280px !important; }
      .partner-logo { width: 100%; max-width: 120px; height: 60px; }
      .stat-card { padding: 24px 12px !important; }
    }
    @media (max-width: 480px) {
      .content-offset { padding-top: 72px !important; }
      .logo-subtitle { display: none !important; }
      .nav-inner, .hero-inner, .footer-inner { padding-left: 16px !important; padding-right: 16px !important; }
      .section-pad-lg, .section-pad-md, .section-pad-sm { padding: 40px 16px !important; }
      .page-hero-pad { padding: 90px 16px 40px !important; }
      .grid-4 { grid-template-columns: 1fr !important; }
      .grid-5 { grid-template-columns: 1fr !important; }
      .footer-grid { grid-template-columns: 1fr !important; }
      .footer-inner { padding: 32px 16px 24px !important; }
      .page-hero { min-height: 240px !important; }
      .about-img-box { height: 220px !important; }
      .footer-bottom { flex-direction: column !important; align-items: flex-start !important; }
      .contact-form-inner { padding: 24px 16px !important; }
    }
  `;
  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
};
