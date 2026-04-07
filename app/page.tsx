"use client";
import { useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --gold: #D4AF37;
    --gold-light: #F3D86E;
    --gold-dim: rgba(212,175,55,0.15);
    --gold-border: rgba(212,175,55,0.22);
    --navy: #0A1628;
    --navy-mid: #0F1B2E;
    --navy-card: #13233A;
    --text: #F0EEE8;
    --text-muted: #8A96AA;
    --text-dim: #556070;
    --border: rgba(255,255,255,0.08);
    --border-mid: rgba(255,255,255,0.13);
    --surface: rgba(255,255,255,0.04);
    --surface-mid: rgba(255,255,255,0.07);
    --font-head: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;
    --radius: 1.25rem;
    --radius-lg: 2rem;
  }

  html { scroll-behavior: smooth; }

  .securix-root {
    background: var(--navy);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.7;
    overflow-x: hidden;
    position: relative;
  }

  .securix-root::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.028'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: .6;
  }

  .securix-root * { position: relative; z-index: 1; }

  .wrap { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

  /* HEADER */
  .sx-header {
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid var(--border);
    background: rgba(10,22,40,0.88);
    backdrop-filter: blur(18px);
  }
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    gap: 1.5rem;
  }
  .logo-wrap { display: flex; align-items: center; gap: .9rem; text-decoration: none; }
  .logo-mark {
    width: 44px; height: 44px;
    border: 1.5px solid var(--gold-border);
    border-radius: .75rem;
    background: var(--gold-dim);
    display: flex; align-items: center; justify-content: center;
  }
  .logo-name { font-family: var(--font-head); font-size: 1.2rem; font-weight: 700; letter-spacing: .12em; color: var(--gold); }
  .logo-sub { font-size: .68rem; color: var(--text-muted); letter-spacing: .1em; text-transform: uppercase; }

  nav { display: flex; align-items: center; gap: 2rem; }
  nav a { font-size: .875rem; color: var(--text-muted); text-decoration: none; transition: color .2s; letter-spacing: .02em; }
  nav a:hover { color: var(--gold); }

  .nav-group { position: relative; }
  .nav-group > a { display: flex; align-items: center; gap: .3rem; cursor: pointer; }
  .nav-group > a::after { content: '▾'; font-size: .6rem; opacity: .5; }
  .dropdown {
    display: none;
    position: absolute;
    top: calc(100% + .75rem);
    left: 50%;
    transform: translateX(-50%);
    background: var(--navy-card);
    border: 1px solid var(--border-mid);
    border-radius: var(--radius);
    padding: .75rem;
    min-width: 180px;
    white-space: nowrap;
  }
  .nav-group:hover .dropdown { display: block; }
  .dropdown a { display: block; padding: .5rem .75rem; border-radius: .5rem; font-size: .82rem; color: var(--text-muted); }
  .dropdown a:hover { background: var(--surface-mid); color: var(--gold); }

  .btn-play {
    display: inline-flex; align-items: center; gap: .6rem;
    background: var(--navy-card);
    border: 1px solid var(--border-mid);
    border-radius: .875rem;
    padding: .55rem 1rem;
    color: var(--text);
    text-decoration: none;
    font-size: .82rem;
    transition: border-color .2s;
  }
  .btn-play:hover { border-color: var(--gold-border); }
  .play-icon { width: 26px; height: 26px; }

  /* HERO */
  .hero {
    padding: 6rem 2rem 4rem;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    gap: 4rem;
    align-items: center;
  }
  @media (max-width: 900px) { .hero { grid-template-columns: 1fr; } }

  .hero-badge {
    display: inline-flex; align-items: center; gap: .5rem;
    border: 1px solid var(--gold-border);
    background: var(--gold-dim);
    padding: .35rem 1rem;
    border-radius: 999px;
    font-size: .72rem;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.75rem;
  }
  .hero-badge::before {
    content: '';
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--gold);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: .3; } }

  .hero h1 {
    font-family: var(--font-head);
    font-size: clamp(2.2rem, 4.5vw, 3.6rem);
    font-weight: 800;
    line-height: 1.12;
    letter-spacing: -.02em;
    color: #fff;
    margin-bottom: 1.5rem;
  }
  .hero h1 em { font-style: normal; color: var(--gold); }

  .hero-desc { font-size: 1.05rem; color: var(--text-muted); line-height: 1.8; max-width: 520px; margin-bottom: 2rem; }
  .hero-ctas { display: flex; flex-wrap: wrap; gap: .875rem; align-items: center; }

  .btn-primary {
    display: inline-flex; align-items: center; gap: .5rem;
    background: var(--gold);
    color: #0A1628;
    font-family: var(--font-head);
    font-weight: 700;
    font-size: .9rem;
    letter-spacing: .05em;
    padding: .75rem 1.5rem;
    border-radius: .875rem;
    text-decoration: none;
    transition: opacity .2s;
    cursor: pointer;
    border: none;
  }
  .btn-primary:hover { opacity: .88; }

  .btn-outline {
    display: inline-flex; align-items: center; gap: .5rem;
    border: 1px solid var(--border-mid);
    color: var(--text);
    font-size: .9rem;
    padding: .75rem 1.5rem;
    border-radius: .875rem;
    text-decoration: none;
    transition: border-color .2s, color .2s;
  }
  .btn-outline:hover { border-color: var(--gold-border); color: var(--gold); }

  .btn-ghost {
    display: inline-flex; align-items: center; gap: .5rem;
    border: 1px solid var(--gold-border);
    color: var(--gold);
    font-size: .9rem;
    padding: .75rem 1.5rem;
    border-radius: .875rem;
    text-decoration: none;
    transition: background .2s;
  }
  .btn-ghost:hover { background: var(--gold-dim); }

  /* PROOF CARD */
  .proof-card {
    border: 1px solid var(--gold-border);
    background: var(--surface);
    border-radius: var(--radius-lg);
    padding: 1.25rem;
  }
  .proof-card-inner {
    background: var(--navy-card);
    border-radius: 1.5rem;
    border: 1px solid var(--border);
    padding: 1.25rem;
  }
  .proof-card-head {
    display: flex; justify-content: space-between; align-items: flex-start;
    padding-bottom: 1rem; border-bottom: 1px solid var(--border);
    gap: 1rem;
  }
  .proof-id-label { font-size: .65rem; letter-spacing: .2em; text-transform: uppercase; color: var(--text-muted); }
  .proof-id { font-family: var(--font-head); font-size: 1rem; font-weight: 600; color: #fff; margin-top: .4rem; }
  .badge-ok {
    flex-shrink: 0;
    border: 1px solid rgba(74,222,128,.3);
    background: rgba(74,222,128,.08);
    color: #86efac;
    font-size: .78rem;
    font-weight: 500;
    padding: .25rem .75rem;
    border-radius: 999px;
  }
  .proof-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .75rem; margin-top: 1rem; }
  .proof-cell {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: .875rem;
    padding: .875rem;
  }
  .proof-cell-label { font-size: .62rem; letter-spacing: .18em; text-transform: uppercase; color: var(--text-muted); }
  .proof-cell-val { font-size: .85rem; color: #fff; margin-top: .35rem; }
  .proof-cell-val.gold { color: var(--gold); }
  .hash-box {
    background: rgba(10,22,40,.7);
    border: 1px solid var(--border);
    border-radius: .875rem;
    padding: .875rem;
    margin-top: .75rem;
  }
  .hash-label { font-size: .62rem; letter-spacing: .18em; text-transform: uppercase; color: var(--text-muted); }
  .hash-val { font-family: monospace; font-size: .72rem; color: #8fa8c0; line-height: 1.7; word-break: break-all; margin-top: .35rem; }
  .status-row { display: grid; grid-template-columns: repeat(3,1fr); gap: .5rem; margin-top: .75rem; }
  .status-chip {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: .625rem;
    padding: .5rem;
    text-align: center;
  }
  .status-chip .code { font-size: .78rem; font-weight: 600; color: #86efac; }
  .status-chip .lbl { font-size: .65rem; color: var(--text-muted); margin-top: .2rem; }
  .proof-note {
    background: rgba(59,130,246,.08);
    border: 1px solid rgba(59,130,246,.18);
    border-radius: .875rem;
    padding: .875rem 1rem;
    font-size: .82rem;
    color: #bfdbfe;
    margin-top: .75rem;
    line-height: 1.6;
  }

  /* SECTION TITLES */
  .sec { padding: 5rem 0; }
  .sec-tag {
    display: inline-flex; align-items: center;
    border: 1px solid var(--gold-border);
    background: var(--gold-dim);
    padding: .3rem .9rem;
    border-radius: 999px;
    font-size: .7rem; letter-spacing: .18em; text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.25rem;
  }
  .sec-h2 {
    font-family: var(--font-head);
    font-size: clamp(1.7rem, 3.5vw, 2.6rem);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02em;
    color: #fff;
    margin-bottom: 1.25rem;
  }
  .sec-desc { font-size: 1.05rem; color: var(--text-muted); max-width: 580px; line-height: 1.8; }

  /* PILLARS */
  .pillars { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; margin-top: 3rem; }
  @media (max-width: 768px) { .pillars { grid-template-columns: 1fr; } }
  .pillar {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.75rem;
  }
  .pillar-icon {
    width: 40px; height: 40px;
    border: 1px solid var(--gold-border);
    background: var(--gold-dim);
    border-radius: .75rem;
    margin-bottom: 1.25rem;
  }
  .pillar h3 { font-family: var(--font-head); font-size: 1.05rem; font-weight: 600; color: #fff; margin-bottom: .625rem; }
  .pillar p { font-size: .9rem; color: var(--text-muted); line-height: 1.75; }

  /* PROBLEM BAND */
  .problem-band {
    background: linear-gradient(135deg, var(--navy-card) 0%, var(--navy) 100%);
    border: 1px solid var(--gold-border);
    border-radius: var(--radius-lg);
    padding: 2.5rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  @media (max-width: 768px) { .problem-band { grid-template-columns: 1fr; padding: 2rem; gap: 2rem; } }
  .problem-label { font-size: .72rem; letter-spacing: .2em; text-transform: uppercase; color: var(--text-muted); margin-bottom: .75rem; }
  .problem-text { font-family: var(--font-head); font-size: 1.15rem; font-weight: 600; color: #fff; line-height: 1.6; }
  .divider-v { width: 1px; background: var(--border-mid); align-self: stretch; }
  @media (max-width: 768px) { .divider-v { display: none; } }

  /* WORKFLOW */
  .workflow-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; margin-top: 3rem; }
  @media (max-width: 900px) { .workflow-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 500px) { .workflow-grid { grid-template-columns: 1fr; } }
  .wf-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
  }
  .wf-step { font-family: var(--font-head); font-size: 1.5rem; font-weight: 800; color: var(--gold); opacity: .7; margin-bottom: .75rem; }
  .wf-card h3 { font-family: var(--font-head); font-size: .95rem; font-weight: 600; color: #fff; margin-bottom: .5rem; }
  .wf-card p { font-size: .85rem; color: var(--text-muted); line-height: 1.75; }

  /* PIPELINE */
  .pipeline-shell {
    background: linear-gradient(135deg, var(--navy-card) 0%, var(--navy) 100%);
    border: 1px solid var(--gold-border);
    border-radius: var(--radius-lg);
    padding: 2.5rem 3rem;
    margin-top: 1.5rem;
  }
  .pipeline-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 2.5rem; }
  .pipeline-title { font-size: .75rem; font-weight: 600; letter-spacing: .18em; text-transform: uppercase; color: var(--gold); }
  .pipeline-sub { font-size: .8rem; color: var(--text-muted); margin-top: .35rem; }
  .pipeline-time {
    border: 1px solid var(--gold-border);
    background: var(--gold-dim);
    font-family: monospace;
    font-size: .85rem;
    color: var(--gold);
    padding: .35rem .875rem;
    border-radius: .625rem;
    white-space: nowrap;
  }
  .pipeline-nodes { position: relative; padding-bottom: 3.5rem; }
  .pipeline-line {
    position: absolute;
    top: 9px; left: 0; right: 0;
    height: 1px;
    background: var(--border);
  }
  .pipeline-pulse {
    position: absolute;
    top: 3px; left: -20%; right: auto;
    width: 20%; height: 13px;
    animation: pulseLine 4.8s linear infinite;
  }
  .pipeline-pulse::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 999px;
    background: linear-gradient(90deg,rgba(212,175,55,0),rgba(212,175,55,.15),rgba(212,175,55,.72),rgba(255,246,200,.95),rgba(212,175,55,.72),rgba(212,175,55,.15),rgba(212,175,55,0));
    filter: blur(1px);
  }
  @keyframes pulseLine {
    0% { left: -20%; opacity: 0; }
    6% { opacity: 1; }
    88% { opacity: 1; }
    100% { left: 102%; opacity: 0; }
  }
  .pipeline-steps { display: grid; grid-template-columns: repeat(6,1fr); gap: .875rem; }
  @media (max-width: 768px) { .pipeline-steps { grid-template-columns: repeat(3,1fr); } }
  .pnode { text-align: center; }
  .pnode-dot {
    width: 18px; height: 18px;
    border-radius: 50%;
    background: var(--navy);
    border: 1.5px solid rgba(212,175,55,.4);
    margin: 0 auto;
    display: flex; align-items: center; justify-content: center;
    animation: nodePass 4.8s linear infinite;
  }
  .pnode-core {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--gold);
    animation: nodeCorePass 4.8s linear infinite;
  }
  .pnode-card {
    margin-top: 1rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: .875rem;
    padding: .875rem .625rem;
    opacity: .6;
    animation: cardPass 4.8s linear infinite;
  }
  .pnode-t { font-family: monospace; font-size: .62rem; letter-spacing: .15em; color: var(--gold); }
  .pnode-label { font-size: .82rem; font-weight: 500; color: #fff; margin-top: .3rem; }

  @keyframes nodePass {
    0%,100% { border-color: rgba(212,175,55,.35); transform: scale(1); background: var(--navy); }
    10%,22% { border-color: rgba(255,240,170,.9); transform: scale(1.15); background: rgba(28,43,66,.96); box-shadow: 0 0 18px rgba(212,175,55,.45); }
  }
  @keyframes nodeCorePass {
    0%,100% { background: rgba(212,175,55,.8); }
    10%,22% { background: #fff1a8; box-shadow: 0 0 10px rgba(255,241,168,.95), 0 0 22px rgba(212,175,55,.75); }
  }
  @keyframes cardPass {
    0%,100% { opacity: .6; transform: translateY(0); border-color: var(--border); background: var(--surface); }
    10%,22% { opacity: 1; transform: translateY(-3px); border-color: rgba(212,175,55,.42); background: rgba(212,175,55,.07); }
  }

  .pipeline-branches { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; margin-top: 1rem; }
  @media (max-width: 768px) { .pipeline-branches { grid-template-columns: 1fr; } }
  .branch-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.25rem;
    opacity: .6;
    transform: translateY(8px);
    animation: branchPass 4.8s linear infinite;
  }
  .branch-head { display: flex; align-items: center; gap: .6rem; margin-bottom: 1rem; }
  .branch-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); animation: branchDotPass 4.8s linear infinite; }
  .branch-title { font-size: .82rem; font-weight: 500; color: #fff; }
  .branch-tags { display: flex; flex-wrap: wrap; gap: .4rem; }
  .branch-tag {
    font-size: .72rem;
    border: 1px solid rgba(212,175,55,.15);
    background: rgba(212,175,55,.08);
    color: #d1c08a;
    padding: .35rem .6rem;
    border-radius: .5rem;
  }
  @keyframes branchPass {
    0%,100% { opacity: .6; transform: translateY(8px); border-color: var(--border); }
    12%,28% { opacity: 1; transform: translateY(0); border-color: rgba(212,175,55,.36); background: rgba(212,175,55,.05); }
  }
  @keyframes branchDotPass {
    0%,100% { box-shadow: none; }
    12%,28% { box-shadow: 0 0 10px rgba(255,241,168,.9), 0 0 20px rgba(212,175,55,.55); }
  }
  .pipeline-note {
    background: rgba(59,130,246,.07);
    border: 1px solid rgba(59,130,246,.18);
    border-radius: .875rem;
    padding: .875rem 1.25rem;
    font-size: .85rem;
    color: #93c5fd;
    margin-top: 1.5rem;
    line-height: 1.7;
  }

  /* PROOF ITEMS */
  .proof-items { display: grid; grid-template-columns: repeat(5,1fr); gap: .75rem; margin-top: 2.5rem; }
  @media (max-width: 900px) { .proof-items { grid-template-columns: repeat(2,1fr); } }
  .proof-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.125rem 1rem;
    font-size: .85rem;
    color: var(--text-muted);
    display: flex; align-items: center; gap: .5rem;
  }
  .proof-item::before {
    content: '';
    flex-shrink: 0;
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--gold);
    opacity: .6;
  }

  /* STATUS / OFFLINE */
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  @media (max-width: 768px) { .two-col { grid-template-columns: 1fr; } }
  .card-panel {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 2.25rem;
  }
  .card-panel.dark { background: var(--navy-card); }
  .card-panel-h2 { font-family: var(--font-head); font-size: 1.5rem; font-weight: 700; letter-spacing: -.02em; color: #fff; margin-bottom: 1rem; }
  .card-panel p { font-size: .95rem; color: var(--text-muted); line-height: 1.8; }
  .status-list { margin-top: 1.75rem; display: flex; flex-direction: column; gap: .75rem; }
  .status-item {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.125rem;
  }
  .status-item-head { display: flex; align-items: center; gap: .75rem; margin-bottom: .5rem; }
  .status-code {
    font-family: monospace; font-size: .82rem; font-weight: 700;
    border: 1px solid var(--gold-border);
    background: var(--gold-dim);
    color: var(--gold);
    padding: .2rem .6rem;
    border-radius: .4rem;
  }
  .status-title { font-size: .9rem; font-weight: 500; color: #fff; }
  .status-desc { font-size: .82rem; color: var(--text-muted); line-height: 1.7; }

  /* FRAMEWORK */
  .framework-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; margin-top: 2.5rem; }
  @media (max-width: 768px) { .framework-grid { grid-template-columns: 1fr; } }
  .fw-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.625rem;
  }
  .fw-card h3 { font-family: var(--font-head); font-size: 1rem; font-weight: 600; color: #fff; margin-bottom: .75rem; }
  .fw-card p { font-size: .85rem; color: var(--text-muted); line-height: 1.75; }
  .fw-disclaimer {
    border: 1px solid rgba(212,175,55,.2);
    background: rgba(212,175,55,.07);
    border-radius: var(--radius);
    padding: 1.125rem 1.5rem;
    font-size: .85rem;
    color: #c9b86a;
    line-height: 1.7;
    margin-top: 1.5rem;
  }

  /* SHARE / VERIFY */
  .share-list { list-style: none; margin-top: 1.5rem; display: flex; flex-direction: column; gap: .6rem; }
  .share-list li { font-size: .9rem; color: var(--text-muted); display: flex; align-items: center; gap: .6rem; }
  .share-list li::before { content: '✓'; color: #86efac; font-weight: 600; }
  .verify-box { margin-top: 2rem; }
  .verify-id {
    background: rgba(10,22,40,.7);
    font-family: monospace;
    font-size: .9rem;
    color: var(--gold);
    padding: .875rem 1rem;
    border-radius: .625rem;
    margin-top: .5rem;
    margin-bottom: 1rem;
  }
  .verify-meta { display: flex; flex-direction: column; gap: .625rem; }
  .verify-row {
    background: rgba(0,0,0,.2);
    border: 1px solid var(--border);
    border-radius: .75rem;
    padding: .875rem 1rem;
  }
  .verify-row-label { font-size: .62rem; letter-spacing: .16em; text-transform: uppercase; color: var(--text-dim); }
  .verify-row-val { font-size: .82rem; color: var(--text-muted); margin-top: .3rem; word-break: break-all; }

  /* USE CASES */
  .usecases-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; margin-top: 2.5rem; }
  @media (max-width: 900px) { .usecases-grid { grid-template-columns: repeat(2,1fr); } }
  .uc-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    transition: border-color .2s;
  }
  .uc-card:hover { border-color: var(--gold-border); }
  .uc-icon {
    width: 40px; height: 40px;
    border-radius: .75rem;
    background: var(--gold-dim);
    border: 1px solid var(--gold-border);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  .uc-card h3 { font-family: var(--font-head); font-size: .95rem; font-weight: 600; color: #fff; margin-bottom: .5rem; }
  .uc-card p { font-size: .82rem; color: var(--text-muted); line-height: 1.7; }

  /* ANTI-DEEPFAKE */
  .deepfake-band {
    background: linear-gradient(135deg, var(--navy-card) 0%, var(--navy) 100%);
    border: 1px solid var(--gold-border);
    border-radius: var(--radius-lg);
    padding: 3rem;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 3rem;
    align-items: center;
  }
  @media (max-width: 768px) { .deepfake-band { grid-template-columns: 1fr; gap: 2rem; padding: 2rem; } }
  .deepfake-band p { font-size: .95rem; color: var(--text-muted); line-height: 1.8; margin-bottom: 1rem; }
  .deepfake-signals { display: flex; flex-direction: column; gap: .75rem; }
  .df-sig {
    display: flex; align-items: center; gap: 1rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1rem 1.25rem;
  }
  .df-sig-icon {
    width: 36px; height: 36px; flex-shrink: 0;
    border-radius: .625rem;
    background: var(--gold-dim);
    border: 1px solid var(--gold-border);
    display: flex; align-items: center; justify-content: center;
    font-size: 1rem;
  }
  .df-sig h4 { font-size: .88rem; font-weight: 500; color: #fff; }
  .df-sig p { font-size: .78rem; color: var(--text-muted); margin-bottom: 0; }

  /* NUMBERS */
  .numbers-grid {
    display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
    background: var(--border); border: 1px solid var(--border);
    border-radius: var(--radius-lg); overflow: hidden; margin-top: 3rem;
  }
  @media (max-width: 768px) { .numbers-grid { grid-template-columns: repeat(2,1fr); } }
  .num-cell { background: var(--navy-card); padding: 2rem 1.5rem; }
  .num-val { font-family: var(--font-head); font-size: 2rem; font-weight: 800; color: var(--gold); }
  .num-label { font-size: .82rem; color: var(--text-muted); margin-top: .35rem; }

  /* CTA FINAL */
  .cta-final {
    text-align: center;
    padding: 5rem 2rem;
    max-width: 700px;
    margin: 0 auto;
  }
  .cta-final p { font-size: 1.05rem; color: var(--text-muted); margin-bottom: 2.5rem; line-height: 1.8; }
  .cta-final .hero-ctas { justify-content: center; }

  /* FOOTER */
  footer { border-top: 1px solid var(--border); padding: 4rem 0 2rem; }
  .footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
    gap: 2.5rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--border);
  }
  @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
  .footer-brand { grid-column: 1; }
  @media (max-width: 900px) { .footer-brand { grid-column: 1 / -1; } }
  .footer-brand p { font-size: .85rem; color: var(--text-muted); line-height: 1.8; max-width: 280px; margin: 1rem 0 1.5rem; }
  .footer-col h4 { font-family: var(--font-head); font-size: .75rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--text-dim); margin-bottom: 1rem; }
  .footer-col a { display: block; font-size: .85rem; color: var(--text-muted); text-decoration: none; margin-bottom: .5rem; transition: color .2s; }
  .footer-col a:hover { color: var(--gold); }
  .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 2rem; flex-wrap: wrap; gap: 1rem; }
  .footer-bottom p { font-size: .78rem; color: var(--text-dim); }
  .footer-bottom a { font-size: .78rem; color: var(--text-dim); text-decoration: none; }
  .footer-bottom a:hover { color: var(--gold); }

  [id] { scroll-margin-top: 5rem; }
`;

// ── SVG ICONS ──────────────────────────────────────────────────────
const ShieldIcon = () => (
  <svg viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 22, height: 22 }}>
    <path d="M12 1L22 4.5V14.5C22 20 17 24.5 12 27C7 24.5 2 20 2 14.5V4.5L12 1Z" stroke="#D4AF37" strokeWidth="1.5" fill="rgba(212,175,55,0.08)" />
    <path d="M8 14l3 3 5-5" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlayStoreIcon = ({ size = 26 }) => (
  <svg style={{ width: size, height: size }} viewBox="0 0 24 24" fill="none">
    <path d="M3 2L14.5 12L3 22V2Z" fill="#00D26A" />
    <path d="M14.5 12L18.2 8.4L21 10C22.2 10.7 22.2 13.3 21 14L18.2 15.6L14.5 12Z" fill="#FFD24A" />
    <path d="M3 2L11.4 10.4L14.5 12L18.2 8.4L3 2Z" fill="#4AA3FF" />
    <path d="M3 22L11.4 13.6L14.5 12L18.2 15.6L3 22Z" fill="#FF5252" />
  </svg>
);

// ── SUB-COMPONENTS ──────────────────────────────────────────────────

const Header = () => (
  <header className="sx-header">
    <div className="header-inner">
      <a href="#top" className="logo-wrap">
        <div className="logo-mark"><ShieldIcon /></div>
        <div>
          <div className="logo-name">SÉCURIX</div>
          <div className="logo-sub">preuve vidéo certifiée</div>
        </div>
      </a>

      <nav>
        <div className="nav-group">
          <a href="#fonctionnement">Produit</a>
          <div className="dropdown">
            <a href="#fonctionnement">Vue d'ensemble</a>
            <a href="#pipeline">Pipeline probatoire</a>
            <a href="#verification">Vérification</a>
            <a href="#dossier">Dossier de preuve</a>
            <a href="#offline">Hors ligne</a>
          </div>
        </div>
        <div className="nav-group">
          <a href="#usecases">Cas d'usage</a>
          <div className="dropdown">
            <a href="#usecases">Journalisme</a>
            <a href="#usecases">Sécurité</a>
            <a href="#usecases">Assurance</a>
            <a href="#usecases">Chantier / BTP</a>
            <a href="#usecases">Immobilier</a>
            <a href="#usecases">Protection personnelle</a>
          </div>
        </div>
        <div className="nav-group">
          <a href="#cadre-probatoire">Ressources</a>
          <div className="dropdown">
            <a href="#cadre-probatoire">Cadre probatoire</a>
            <a href="#">Documentation</a>
            <a href="#">FAQ</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
        <a href="#about">À propos</a>
      </nav>

      <a href="https://play.google.com/store/apps/details?id=com.example.fideo" target="_blank" rel="noreferrer" className="btn-play">
        <PlayStoreIcon size={26} />
        <span style={{ fontSize: ".82rem", color: "#fff" }}>Google Play</span>
      </a>
    </div>
  </header>
);

const ProofCard = () => (
  <div className="proof-card">
    <div className="proof-card-inner">
      <div className="proof-card-head">
        <div>
          <div className="proof-id-label">Dossier de preuve</div>
          <div className="proof-id">SECURIX-OiO-20260404-722UBU</div>
        </div>
        <div className="badge-ok">Confirmée ✓</div>
      </div>

      <div className="proof-grid">
        <div className="proof-cell">
          <div className="proof-cell-label">Fichier scellé</div>
          <div className="proof-cell-val" style={{ fontSize: ".76rem" }}>SECURIX-…-722UBU_sealed.mp4</div>
        </div>
        <div className="proof-cell">
          <div className="proof-cell-label">Blockchain</div>
          <div className="proof-cell-val gold">OpenTimestamps / BTC</div>
        </div>
        <div className="proof-cell">
          <div className="proof-cell-label">GPS</div>
          <div className="proof-cell-val">48.792389, 2.608312</div>
        </div>
        <div className="proof-cell">
          <div className="proof-cell-label">Horodatage</div>
          <div className="proof-cell-val">04/04/2026 01:58:41</div>
        </div>
      </div>

      <div className="hash-box">
        <div className="hash-label">SHA-256 vidéo scellée</div>
        <div className="hash-val">c3394cb9221aa563c7599416dab6a20886551923eb53bd2d6dbcff3f470b96df</div>
      </div>

      <div className="status-row">
        <div className="status-chip"><div className="code">LCL ✓</div><div className="lbl">Local</div></div>
        <div className="status-chip"><div className="code">CLD ✓</div><div className="lbl">Cloud</div></div>
        <div className="status-chip"><div className="code">BTC ✓</div><div className="lbl">Bitcoin</div></div>
      </div>

      <div className="proof-note">Chaque élément est lié : vidéo originale, vidéo scellée, identifiant, hashes, métadonnées, preuve JSON, certificat PDF et ancrage blockchain.</div>
    </div>
  </div>
);

const Hero = () => (
  <section className="hero" id="top">
    <div>
      <div className="hero-badge">Structure probatoire mobile</div>
      <h1>Une preuve vidéo <em>structurée</em>,<br />conçue pour durer.</h1>
      <p className="hero-desc">
        Sécurix ne se limite pas à enregistrer une vidéo. L'application génère un dossier de preuve cohérent associant capture, horodatage, géolocalisation, empreintes cryptographiques, identifiant unique, certificat PDF et ancrage blockchain.
      </p>
      <div className="hero-ctas">
        <a href="https://play.google.com/store/apps/details?id=com.example.fideo" target="_blank" rel="noreferrer" className="btn-primary">
          <PlayStoreIcon size={18} />
          Télécharger
        </a>
        <a href="#fonctionnement" className="btn-outline">Voir le fonctionnement</a>
        <a href="/verify" className="btn-ghost">Vérifier une preuve</a>
      </div>
      <p style={{ marginTop: "1.25rem", fontSize: ".8rem", color: "var(--text-dim)" }}>Disponible gratuitement sur Google Play · Android</p>
    </div>
    <ProofCard />
  </section>
);

const Pillars = () => (
  <div className="wrap">
    <div className="pillars">
      {[
        { title: "Rigueur probatoire", desc: "Chaque preuve repose sur une structure documentaire cohérente, lisible et exploitable." },
        { title: "Intégrité technique", desc: "Double empreinte SHA-256, cohérence entre les supports et détection immédiate de toute altération." },
        { title: "Horodatage indépendant", desc: "Ancrage OpenTimestamps sur Bitcoin pour attester l'existence d'une donnée à une date donnée." },
      ].map((p) => (
        <div className="pillar" key={p.title}>
          <div className="pillar-icon" />
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const ProblemBand = ({ problem, answer }) => (
  <div className="problem-band">
    <div>
      <div className="problem-label">Le problème</div>
      <div className="problem-text">{problem}</div>
    </div>
    <div className="divider-v" />
    <div>
      <div className="problem-label">La réponse Sécurix</div>
      <div className="problem-text">{answer}</div>
    </div>
  </div>
);

const Fonctionnement = () => (
  <div className="wrap sec" id="fonctionnement">
    <div className="sec-tag">Fonctionnement</div>
    <h2 className="sec-h2">De la captation à la preuve</h2>
    <p className="sec-desc">Chaque enregistrement suit une chaîne structurée visant à préserver l'intégrité du contenu, documenter son contexte et faciliter une vérification ultérieure.</p>
    <div className="workflow-grid">
      {[
        { step: "01", title: "Capture sécurisée", desc: "Enregistrement vidéo avec horodatage, GPS et contexte de preuve visible dès la captation." },
        { step: "02", title: "Scellement", desc: "Création d'une vidéo scellée, génération des empreintes cryptographiques et attribution d'un identifiant unique." },
        { step: "03", title: "Structuration du dossier", desc: "Constitution d'un ensemble cohérent incluant vidéo, JSON, certificat PDF, métadonnées et statuts." },
        { step: "04", title: "Synchronisation et ancrage", desc: "Sauvegarde locale immédiate, synchronisation cloud et ancrage blockchain dès que la connectivité le permet." },
      ].map((w) => (
        <div className="wf-card" key={w.step}>
          <div className="wf-step">{w.step}</div>
          <h3>{w.title}</h3>
          <p>{w.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const pipelineNodes = [
  { t: "t = 0", label: "Capture", delay: "0s" },
  { t: "t + ε", label: "Hash", delay: ".64s" },
  { t: "t + ε", label: "Scellement", delay: "1.28s" },
  { t: "t + ε", label: "Métadonnées", delay: "1.92s" },
  { t: "t + ε", label: "Identifiant", delay: "2.56s" },
  { t: "t + ε", label: "Dossier", delay: "3.2s" },
];

const pipelineBranches = [
  { delay: "2.8s", title: "À partir du scellement", tags: ["SHA-256 original", "SHA-256 scellé"] },
  { delay: "3.12s", title: "À partir des métadonnées", tags: ["GPS", "Horodatage", "Empreinte appareil"] },
  { delay: "3.44s", title: "À partir du dossier", tags: ["JSON", "PDF", ".OTS", "LCL / CLD / BTC"] },
];

const Pipeline = () => (
  <div className="wrap" id="pipeline" style={{ paddingBottom: "5rem" }}>
    <div className="sec-tag">Flux continu de traitement</div>
    <h2 className="sec-h2">Chaîne de traitement en flux continu</h2>
    <p className="sec-desc">Les opérations critiques s'enchaînent dans un flux unique quasi instantané. La preuve se structure pendant la captation, pas après.</p>

    <div className="pipeline-shell">
      <div className="pipeline-header">
        <div>
          <div className="pipeline-title">Pipeline probatoire</div>
          <div className="pipeline-sub">Exécution quasi instantanée en flux continu</div>
        </div>
        <div className="pipeline-time">t → t + ε</div>
      </div>

      <div className="pipeline-nodes">
        <div className="pipeline-line" />
        <div className="pipeline-pulse" />

        <div className="pipeline-steps">
          {pipelineNodes.map((n) => (
            <div className="pnode" key={n.label}>
              <div className="pnode-dot" style={{ animationDelay: n.delay }}>
                <div className="pnode-core" style={{ animationDelay: n.delay }} />
              </div>
              <div className="pnode-card" style={{ animationDelay: n.delay }}>
                <div className="pnode-t">{n.t}</div>
                <div className="pnode-label">{n.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pipeline-branches" style={{ marginTop: "1.5rem" }}>
          {pipelineBranches.map((b) => (
            <div className="branch-card" key={b.title} style={{ animationDelay: b.delay }}>
              <div className="branch-head">
                <div className="branch-dot" style={{ animationDelay: b.delay }} />
                <div className="branch-title">{b.title}</div>
              </div>
              <div className="branch-tags">
                {b.tags.map((t) => <span className="branch-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pipeline-note">La preuve ne se constitue pas à posteriori. Capture, scellement, métadonnées, identifiant et structuration documentaire s'enchaînent dans un même mouvement logique.</div>
    </div>
  </div>
);

const Dossier = () => (
  <div className="wrap" id="dossier" style={{ paddingBottom: "5rem" }}>
    <div className="sec-tag">Contenu</div>
    <h2 className="sec-h2">Contenu d'un dossier de preuve</h2>
    <p className="sec-desc">Sécurix ne produit pas un seul support, mais un ensemble cohérent d'éléments techniques et documentaires destinés à être lus, partagés et vérifiés ensemble.</p>
    <div className="proof-items">
      {["Vidéo originale", "Vidéo scellée", "Identifiant unique de preuve", "Hash SHA-256 original", "Hash SHA-256 scellé", "Métadonnées GPS", "Horodatage", "Fichier JSON de preuve", "Certificat PDF", "Preuve OpenTimestamps (.ots)"].map((item) => (
        <div className="proof-item" key={item}>{item}</div>
      ))}
    </div>
  </div>
);

const Offline = () => (
  <div className="wrap" id="offline" style={{ paddingBottom: "5rem" }}>
    <div className="two-col">
      <div className="card-panel">
        <h2 className="card-panel-h2">Mode hors ligne et reprise</h2>
        <p>La preuve est d'abord sécurisée localement. La synchronisation cloud et l'ancrage blockchain peuvent ensuite reprendre automatiquement lorsque la connexion redevient disponible.</p>
        <p style={{ marginTop: "1rem" }}>Cette logique évite de dépendre d'un réseau au moment critique de la captation.</p>
      </div>
      <div className="card-panel dark">
        <h2 className="card-panel-h2">Statuts de confiance</h2>
        <div className="status-list">
          {[
            { code: "LCL", title: "Preuve sauvegardée localement", desc: "La preuve est immédiatement conservée sur l'appareil, même hors connexion." },
            { code: "CLD", title: "Synchronisation cloud", desc: "Les données de preuve sont ensuite synchronisées vers l'espace cloud de l'utilisateur." },
            { code: "BTC", title: "Ancrage blockchain", desc: "Le hash de la vidéo scellée est ancré via OpenTimestamps sur Bitcoin." },
          ].map((s) => (
            <div className="status-item" key={s.code}>
              <div className="status-item-head">
                <span className="status-code">{s.code}</span>
                <span className="status-title">{s.title}</span>
              </div>
              <p className="status-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const useCases = [
  { icon: "📰", title: "Journalisme", desc: "Documenter sur le terrain avec une preuve d'authenticité exploitable en rédaction ou en justice." },
  { icon: "🛡️", title: "Sécurité", desc: "Constater des faits avec une chaîne documentaire solide dès l'intervention." },
  { icon: "📋", title: "Assurance", desc: "Produire une preuve horodatée et géolocalisée pour appuyer un sinistre ou un état des lieux." },
  { icon: "🏗️", title: "BTP / Chantier", desc: "Documenter l'avancement, les malfaçons ou les incidents avec une preuve incontestable." },
  { icon: "🏠", title: "Immobilier", desc: "État des lieux, constat de dégradation ou documentation de bien avec preuve intégrée." },
  { icon: "👤", title: "Protection personnelle", desc: "Documenter un incident, une situation ou un fait avec une structure de preuve dès l'enregistrement." },
  { icon: "📁", title: "Documentation d'incident", desc: "Constituer immédiatement un dossier structuré pour tout événement à documenter." },
  { icon: "🔍", title: "Lutte contre la désinformation", desc: "Attester de l'authenticité d'une captation face aux deepfakes et aux manipulations numériques." },
];

const UseCases = () => (
  <div className="wrap" id="usecases" style={{ paddingBottom: "5rem" }}>
    <div className="sec-tag">Cas d'usage</div>
    <h2 className="sec-h2">Pensé pour le terrain</h2>
    <p className="sec-desc">Sécurix s'adresse à tous ceux qui ont besoin de documenter, préserver et défendre une réalité visuelle.</p>
    <div className="usecases-grid">
      {useCases.map((uc) => (
        <div className="uc-card" key={uc.title}>
          <div className="uc-icon">{uc.icon}</div>
          <h3>{uc.title}</h3>
          <p>{uc.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const deepfakeSignals = [
  { icon: "🔐", title: "Hash SHA-256 natif", desc: "Calculé au moment de la captation, avant tout traitement ultérieur." },
  { icon: "📱", title: "Empreinte appareil", desc: "Lie la preuve à l'appareil physique ayant réalisé la captation." },
  { icon: "⛓️", title: "Ancrage blockchain", desc: "Preuve d'existence indépendante de Sécurix sur la blockchain Bitcoin." },
  { icon: "📍", title: "GPS + horodatage", desc: "Contexte spatio-temporel non altérable lié à chaque preuve." },
];

const AntiDeepfake = () => (
  <div className="wrap" style={{ paddingBottom: "5rem" }}>
    <div className="deepfake-band">
      <div>
        <div className="sec-tag" style={{ marginBottom: "1.25rem" }}>Anti-falsification</div>
        <h2 className="sec-h2">Un rempart contre les deepfakes</h2>
        <p>À l'heure où n'importe quelle vidéo peut être générée ou altérée, Sécurix crée une chaîne de confiance ancrée dès la captation.</p>
        <p>L'identité cryptographique du fichier, l'empreinte de l'appareil et l'ancrage blockchain permettent de distinguer une vidéo native d'une vidéo manipulée ou générée.</p>
      </div>
      <div className="deepfake-signals">
        {deepfakeSignals.map((s) => (
          <div className="df-sig" key={s.title}>
            <div className="df-sig-icon">{s.icon}</div>
            <div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const frameworkItems = [
  { title: "Intégrité du contenu", desc: "Les empreintes SHA-256 permettent de vérifier que les fichiers n'ont pas été modifiés. Toute altération change immédiatement le résultat." },
  { title: "Horodatage indépendant", desc: "L'ancrage via OpenTimestamps permet d'attester l'existence d'une donnée à une date donnée, indépendamment de Sécurix, sur Bitcoin." },
  { title: "Cohérence documentaire", desc: "Vidéo, hashes, identifiant, JSON, certificat PDF, fichier .ots et métadonnées sont rattachés à une même chaîne documentaire." },
  { title: "Provenance", desc: "L'empreinte appareil et les métadonnées de captation documentent l'origine technique de la preuve." },
  { title: "Conservation", desc: "Sauvegarde locale immédiate, synchronisation cloud et archivage structuré garantissent la pérennité du dossier." },
  { title: "Vérification indépendante", desc: "Chaque preuve peut être contrôlée par un tiers à partir des hashes, de l'identifiant et du fichier .ots sans dépendre de Sécurix." },
];

const CadreProbatoire = () => (
  <div className="wrap sec" id="cadre-probatoire">
    <div className="sec-tag">Cadre probatoire</div>
    <h2 className="sec-h2">Une base technique sérieuse</h2>
    <p className="sec-desc">Sécurix fournit une base technique de conservation, de traçabilité et de vérification. L'application n'a pas vocation à se substituer à l'analyse juridique.</p>
    <div className="framework-grid">
      {frameworkItems.map((f) => (
        <div className="fw-card" key={f.title}>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
    <div className="fw-disclaimer">
      La valeur probatoire finale dépend toujours du contexte, des conditions de production, de la contradiction et de l'appréciation de l'autorité compétente. Sécurix renforce la base technique de cette appréciation, sans se substituer au droit.
    </div>
  </div>
);

const ShareVerify = () => (
  <div className="wrap" style={{ paddingBottom: "5rem" }}>
    <div className="two-col">
      <div className="card-panel">
        <h2 className="card-panel-h2">Partager un dossier exploitable</h2>
        <p>Sécurix permet de transmettre à un tiers un ensemble cohérent comprenant les principaux supports nécessaires à une lecture et une vérification indépendantes.</p>
        <ul className="share-list">
          {["Vidéo scellée", "Fichier JSON de preuve", "Certificat PDF", "Preuve OpenTimestamps (.ots)", "Hash SHA-256 et identifiant unique"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="card-panel dark" id="verification">
        <h2 className="card-panel-h2">Vérification indépendante</h2>
        <p>Une preuve peut être relue localement, confrontée à ses métadonnées, contrôlée par hash, et rapprochée de son ancrage blockchain et de ses documents associés.</p>
        <div className="verify-box">
          <p style={{ fontSize: ".8rem", color: "var(--text-dim)", marginBottom: ".4rem" }}>Exemple d'identifiant</p>
          <div className="verify-id">SECURIX-OiO-20260404-722UBU</div>
          <div className="verify-meta">
            <div className="verify-row">
              <div className="verify-row-label">Hash scellé</div>
              <div className="verify-row-val">c3394cb9221aa563c7599416dab6a20886551923eb53bd2d6dbcff3f470b96df</div>
            </div>
            <div className="verify-row">
              <div className="verify-row-label">Supports associés</div>
              <div className="verify-row-val">sealed.mp4 · JSON · PDF · .OTS</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <a href="/verify" className="btn-primary" style={{ display: "inline-flex" }}>Vérifier une preuve →</a>
        </div>
      </div>
    </div>
  </div>
);

const Numbers = () => (
  <div className="wrap" style={{ paddingBottom: "5rem" }}>
    <div className="numbers-grid">
      {[
        { val: "10+", label: "éléments par dossier de preuve" },
        { val: "3", label: "niveaux de statut de confiance" },
        { val: "BTC", label: "ancrage blockchain indépendant" },
        { val: "0", label: "connexion requise à la captation" },
      ].map((n) => (
        <div className="num-cell" key={n.val + n.label}>
          <div className="num-val">{n.val}</div>
          <div className="num-label">{n.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const About = () => (
  <div className="wrap" id="about" style={{ paddingBottom: "5rem" }}>
    <div className="problem-band">
      <div>
        <div className="sec-tag" style={{ marginBottom: "1.25rem" }}>Pourquoi Sécurix existe</div>
        <h2 className="sec-h2" style={{ fontSize: "1.8rem" }}>Redonner une base de confiance au réel numérique.</h2>
        <p style={{ fontSize: ".95rem", color: "var(--text-muted)", lineHeight: 1.8, marginTop: "1rem" }}>
          Les deepfakes, les fake news et la fragilité du réel numérique rendent de plus en plus difficile de distinguer ce qui est authentique de ce qui est fabriqué. Sécurix a été conçu pour redonner une base de confiance solide à ceux qui ont besoin de documenter, préserver et défendre une réalité.
        </p>
      </div>
      <div className="divider-v" />
      <div>
        <div className="problem-label">La vision</div>
        <div className="problem-text" style={{ fontWeight: 400, fontSize: "1rem", lineHeight: 1.8, color: "var(--text-muted)", marginTop: ".5rem" }}>
          Un monde où chaque personne — journaliste, citoyen, professionnel — peut créer une preuve numérique fiable, vérifiable indépendamment, sans dépendre d'une autorité centrale.
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <a href="#" className="btn-outline">Nous contacter</a>
        </div>
      </div>
    </div>
  </div>
);

const CtaFinal = () => (
  <div className="cta-final">
    <div className="sec-tag" style={{ display: "inline-flex", marginBottom: "1.5rem" }}>Commencer maintenant</div>
    <h2 className="sec-h2">Chaque preuve commence par une captation.</h2>
    <p>Téléchargez Sécurix sur Google Play et commencez à constituer des preuves vidéo structurées, certifiées et vérifiables.</p>
    <div className="hero-ctas">
      <a href="https://play.google.com/store/apps/details?id=com.example.fideo" target="_blank" rel="noreferrer" className="btn-primary">Télécharger sur Google Play</a>
      <a href="/verify" className="btn-ghost">Vérifier une preuve</a>
    </div>
  </div>
);

const Footer = () => (
  <footer>
    <div className="wrap">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#top" className="logo-wrap" style={{ textDecoration: "none" }}>
            <div className="logo-mark"><ShieldIcon /></div>
            <div>
              <div className="logo-name">SÉCURIX</div>
              <div className="logo-sub">preuve vidéo certifiée</div>
            </div>
          </a>
          <p>Structure probatoire mobile pour documenter, préserver et vérifier des preuves vidéo certifiées.</p>
          <a href="https://play.google.com/store/apps/details?id=com.example.fideo" target="_blank" rel="noreferrer" className="btn-play" style={{ width: "fit-content" }}>
            <PlayStoreIcon size={22} />
            <span style={{ fontSize: ".82rem" }}>Google Play</span>
          </a>
        </div>

        <div className="footer-col">
          <h4>Produit</h4>
          {[["#fonctionnement","Vue d'ensemble"],["#pipeline","Pipeline probatoire"],["#verification","Vérification"],["#dossier","Dossier de preuve"],["#offline","Hors ligne"]].map(([href, label]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </div>

        <div className="footer-col">
          <h4>Cas d'usage</h4>
          {["Journalisme","Assurance","Sécurité","Chantier","Immobilier","Protection personnelle"].map((label) => (
            <a href="#usecases" key={label}>{label}</a>
          ))}
        </div>

        <div className="footer-col">
          <h4>Ressources</h4>
          {[["#cadre-probatoire","Cadre probatoire"],["#","Documentation"],["#","FAQ"],["#","Glossaire"],["#","Politique de confidentialité"],["#","Conditions d'utilisation"]].map(([href, label]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </div>

        <div className="footer-col">
          <h4>Entreprise</h4>
          {[["#about","À propos"],["#about","Vision"],["#","Contact"],["#","Demander une démo"]].map(([href, label]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Sécurix. Tous droits réservés.</p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#">Confidentialité</a>
          <a href="#">Conditions</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

// ── MAIN COMPONENT ──────────────────────────────────────────────────
export default function Securix() {
  const styleRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById("securix-styles")) {
      const tag = document.createElement("style");
      tag.id = "securix-styles";
      tag.textContent = styles;
      document.head.appendChild(tag);
      styleRef.current = tag;
    }
    return () => {
      if (styleRef.current) {
        styleRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="securix-root">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <div className="wrap" style={{ paddingTop: "3rem", paddingBottom: "2rem" }}>
          <ProblemBand
            problem="Les images et vidéos peuvent être copiées, altérées, sorties de leur contexte ou générées artificiellement."
            answer="Créer dès la captation une structure documentaire cohérente, vérifiable et défendable."
          />
        </div>
        <Fonctionnement />
        <Pipeline />
        <Dossier />
        <Offline />
        <UseCases />
        <AntiDeepfake />
        <CadreProbatoire />
        <ShareVerify />
        <Numbers />
        <About />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}