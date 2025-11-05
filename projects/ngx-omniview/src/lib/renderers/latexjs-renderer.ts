function injectKatexCss() {
  const href = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css';
  if (!document.querySelector(`link[href="${href}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
    console.info('[ngx-omniview] KaTeX CSS injected');
  }
}

let latexJsInitPromise: Promise<void> | null = null;

export function registerLatexJsComponent(): Promise<void> {
  if (latexJsInitPromise) return latexJsInitPromise;
  latexJsInitPromise = (async () => {
    if (!customElements.get('latex-js')) {
      // @ts-ignore: dynamic CDN import, no types
      const module = await import('https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs');
      customElements.define('latex-js', module.LaTeXJSComponent);
      console.info('[ngx-omniview] latex-js registered');
    }
    injectKatexCss();
  })();
  return latexJsInitPromise;
}

