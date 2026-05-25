import React, { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30">
        <div className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
          <div className="text-headline-sm font-headline-sm font-bold tracking-tight text-primary dark:text-primary-fixed">
            StratisGlobal
          </div>
          <div className="hidden md:flex gap-stack-md">
            <a className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 cursor-pointer active:scale-95 font-body-md text-body-md" href="#">Solutions</a>
            <a className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 cursor-pointer active:scale-95 font-body-md text-body-md" href="#">Insights</a>
            <a className="text-primary dark:text-primary-fixed font-semibold border-b-2 border-primary dark:border-primary-fixed pb-1 cursor-pointer active:scale-95 font-body-md text-body-md" href="#">About</a>
            <a className="text-on-surface-variant dark:text-on-secondary-fixed-variant hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 cursor-pointer active:scale-95 font-body-md text-body-md" href="#">Careers</a>
          </div>
          <button className="bg-primary-container text-on-primary font-button text-button px-stack-md py-stack-sm rounded-full hover:bg-primary transition-colors duration-200 cursor-pointer active:scale-95 hidden md:block">
            Get Started
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-on-surface p-2"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant/30 px-margin-mobile py-stack-md flex flex-col gap-stack-md">
            <a className="text-on-surface-variant hover:text-primary font-body-md text-body-md" href="#">Solutions</a>
            <a className="text-on-surface-variant hover:text-primary font-body-md text-body-md" href="#">Insights</a>
            <a className="text-primary font-semibold font-body-md text-body-md" href="#">About</a>
            <a className="text-on-surface-variant hover:text-primary font-body-md text-body-md" href="#">Careers</a>
            <button className="bg-primary-container text-on-primary font-button text-button px-stack-md py-stack-sm rounded-full hover:bg-primary transition-colors mt-4 w-full">
              Get Started
            </button>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-[100px] md:pt-[140px] pb-section-gap bg-surface flex flex-col items-center overflow-hidden">
          <div className="text-center px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto z-10 flex flex-col items-center">
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:text-display-xl md:font-display-lg text-on-surface mb-stack-md leading-tight text-balance">
              Mendefinisikan Ulang Keunggulan dalam <br/><span className="text-primary-container">Bisnis Global</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-lg">
              StratisGlobal adalah mitra strategis Anda dalam menavigasi kompleksitas pasar modern. Kami menggabungkan wawasan mendalam dengan eksekusi presisi untuk mendorong pertumbuhan berkelanjutan dan inovasi.
            </p>
            <div className="flex gap-4 mb-stack-lg">
              <a className="bg-primary-container text-on-primary font-button text-button px-8 py-4 rounded-full text-center hover:bg-primary transition-colors shadow-sm inline-flex items-center justify-center gap-2" href="#services">
                Pelajari Lebih Lanjut
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Curved/Layered Gallery */}
          <div className="w-full relative flex justify-center items-center gap-4 py-8 mb-16 overflow-hidden min-w-[1200px]">
            <div className="w-48 h-[300px] rounded-3xl overflow-hidden translate-y-16 shrink-0 shadow-lg">
              <img alt="Corporate Office" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeKeC0zV49bFyTy-XhTcmcLi7nqomFhThWKwZwJQAHo03lLDB-s-w5xv1qyOcaQ3JjAFMTaKvkJ4ecU65ldFHUem_932MPsRq8nLiUR5sHPGaVLYM7zJXH4ap2A-9NJ3tveE0OVF1Zzq-O3bm82iwQvPszHguQABIq6L7RujO8uLwR-fn5nHdkhpcijiLNNThXMfwD5tRBTHK5E4WE51ZFk_8KqFWZq670yB1u3g_nrbQYfJwG5wTkm5JXC1vJKG-yXDn4PuO8m6o" />
            </div>
            <div className="w-56 h-[340px] rounded-3xl overflow-hidden translate-y-6 shrink-0 shadow-lg">
              <img alt="Team Meeting" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgjwatNpIj-pXjBWWOWUy2x1BQcloaMQH1omEIwkDWnmTBsE5s1OfUUuMatQm4u1_Q4FaFoO2HlsYK5618H3rKuYd_fDfKIiQuAxTTY6YwxyEwMcm0k8neDgCeEHcWm8jK4b3TzsbsTeKGswa1dLc7krfTv2RYKZRV1P9TqfUG81usUJFhwxpli6f3kQLRiYlRuy5xXp2ueu300-YuOGRl7Jo1JA_DS-6JuCiQ_1uaWj-QQDFs_iefVq4t8pzPJk98dnGVUPDvCA4" />
            </div>
            <div className="w-64 h-[380px] rounded-3xl overflow-hidden -translate-y-2 shrink-0 z-10 shadow-xl border-4 border-surface">
              <img alt="Business Execs" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmfP83AcrD9yAtDVF21AqCDxBZccQiJQw67Ku8-YdhSDdD6-ccmMLCPGTXxqniznNu2v5YFNcz-sLdSM55p1KA6BSsjgRktk2tpbsWdGCsywLs230myCGDfKHpa6oP6wWI7iE1rrqTbOiwtKSkOWY8j0LD8UXKRZ1GZM_Fpqpd4AQKEC-zC_9PVVmzXBSfNDAeibDUb9AoBYQ5g6kdSq76N7PlqIiY4oaLSthRINe-aOkVVC8KfMZ0Y1qHx-3LAuc91u6P6JNmsTM" />
            </div>
            <div className="w-56 h-[340px] rounded-3xl overflow-hidden translate-y-6 shrink-0 shadow-lg">
              <img alt="Strategy Planning" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRlawb4imCOfZe_DZe1qSKUY1h_NofIC9xWcy9gcn0CHT1DjWOoWgPNJWgUMUjdEQJYJ0_cbE-JQ8b2vAh36uK3y48yfVyo86lk6Ex6gLzVop-MdxvDPUceF1FCyyYPHBs7u11cC25R9hlG5Iqs5loaOAB8pSsViVBy6R20O1uFNYKyP8hEd_aQePlL_BtZOtl7u_dSosBnjkMKTDGVqKZb0pyD4f0kpqAnBp8Pm1lwT_JojooPNsbXsA5y4Pq8epJnkgsT6EFoyY" />
            </div>
            <div className="w-48 h-[300px] rounded-3xl overflow-hidden translate-y-16 shrink-0 shadow-lg">
              <img alt="Data Analysis" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Ve27fCPW8WmZ8ArOcrZK7xP48msZl1CVQIyg6eUE9oB9jWE3JRuvsOv6-Ba0JOFTnek5cqY7d0ufLC191BtrWoEYcjKKLG6-2p6JAUcHHS_WBgZnbawpMsQDmgDg6EU7Xz0xo9BjORZkN-oCyNHW-9ZkfB6-TLQv9E_GPkJJB5Ovv3SiiG9l2JaIzvpB7u_Ir237kzLNTWUU2B_J97NKtT6m7_JkQ0ml0blbC37FddJq2egOVeDwVJ0zSG61N0kArOgSSCbop3k" />
            </div>
          </div>

          {/* Features Array */}
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full pt-12 border-t border-outline-variant/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
              <div className="flex flex-col items-center gap-stack-sm p-4">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Desain Strategis</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mx-auto">Setiap inisiatif dirancang dengan presisi arsitektural untuk skalabilitas.</p>
              </div>
              <div className="flex flex-col items-center gap-stack-sm p-4 md:border-l md:border-r border-outline-variant/20">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Wawasan Data</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mx-auto">Mengubah metrik yang kompleks menjadi narasi yang memberdayakan.</p>
              </div>
              <div className="flex flex-col items-center gap-stack-sm p-4">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Perspektif Global</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mx-auto">Pemahaman mendalam tentang dinamika pasar internasional.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (Masonry Grid) */}
        <section className="py-section-gap bg-surface" id="services">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-stack-lg max-w-3xl mx-auto">
              <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-stack-sm">Solusi Inti untuk Pertumbuhan Modern</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Layanan komprehensif yang dirancang untuk menjaga organisasi Anda tetap efisien, terorganisir, dan bergerak maju di pasar yang dinamis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Card 1 */}
              <div className="md:col-span-2 rounded-[2rem] overflow-hidden relative h-[420px] group bg-surface-container-low border border-outline-variant/30">
                <img alt="Corporate Transformation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ6MKrAP67UW3gT96D2qzmcspEiIjqs2Dy_8Z_bxusb8rla3X_GLFd0odUJdklCEYTPLzlhnTLOM8koosqVy9nWc-1TbRQRSUBCIkzx8hllT0Wwf85YBpmQbugpQeFBbEh60LqFJgNufpC0fK8Utm9590ybJUXuOnuT0SZdfpHntu_NCAtoUvuy0-rgXLl_xG94lSt1SURE6XBbkqjLWBtTTUUav59WMaGnrlGRTtEvXsdx05d_shz_HYJrccyYjusCwQ9mq70tMI" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-stack-lg z-10 w-full">
                  <h3 className="font-headline-md text-headline-md text-white mb-stack-sm">Transformasi Korporasi</h3>
                  <p className="font-body-md text-body-md text-white/90 max-w-md">
                    Merestrukturisasi operasi inti untuk meningkatkan efisiensi, kelincahan, dan kesiapan masa depan di pasar yang bergejolak.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="md:col-span-1 rounded-[2rem] bg-surface-container-high p-stack-lg flex flex-col justify-end h-[420px] relative overflow-hidden border border-outline-variant/30">
                <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined icon-fill text-[32px]">account_balance</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-stack-sm">Nasihat Keuangan</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Strategi alokasi modal tingkat lanjut, manajemen risiko, dan panduan investasi yang disesuaikan untuk entitas skala besar.
                </p>
              </div>

              {/* Card 3 */}
              <div className="md:col-span-1 rounded-[2rem] bg-[#b7c8e1]/40 p-stack-lg flex flex-col justify-end h-[420px] relative overflow-hidden border border-outline-variant/30">
                <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
                  <span className="material-symbols-outlined icon-fill text-[32px]">public</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-stack-sm">Keahlian Global</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Memperluas jangkauan Anda dengan wawasan dan strategi pasar internasional yang akurat.
                </p>
              </div>

              {/* Card 4 */}
              <div className="md:col-span-2 rounded-[2rem] overflow-hidden relative h-[420px] group bg-surface-container-low border border-outline-variant/30">
                <div className="absolute inset-0 bg-primary-container/95 z-0"></div>
                <img alt="Tech Integration" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa10A6_ojMv_JBJYhUV2QuVfBOKw5M61pkHs50FvNw2HUVzpNTvE6v9M75Kt2aJUVIWh9j_eG_rzSHPTz5ukhFXNl2p77joftOfoKZMCCcnLmTY0IitBU931zXBFw3Cie-N8Of78Q5ApWhy57RagCm4L2UIJ_TkxihUUOeC5rT-vdUn8c53LwJP29dFxl1CPvXiBfVbB0ZZ_TxzetZ6FaP8ny6sIrdonhlgNOStsdjWP-oXKW11Tg8-a122jJmja-fzB-_ISrsUm8" />
                <div className="absolute bottom-0 left-0 p-stack-lg z-10 w-full">
                  <h3 className="font-headline-md text-headline-md text-white mb-stack-sm">Integrasi Teknologi</h3>
                  <p className="font-body-md text-body-md text-white/90 max-w-md">
                    Menjembatani sistem lama dengan solusi digital inovatif, memastikan infrastruktur teknologi yang lancar, aman, dan dapat diskalakan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-section-gap bg-surface-container-lowest">
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-stack-sm">Hasil Terbukti, Dampak Nyata</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-section-gap">
              Lihat bagaimana tim di seluruh dunia bekerja lebih efisien dengan keahlian manajemen komprehensif kami.
            </p>

            <div className="bg-surface-container-low rounded-[2.5rem] p-margin-mobile md:p-margin-desktop border border-outline-variant/30 relative overflow-hidden">
              <span className="material-symbols-outlined absolute top-8 left-8 text-primary/10 text-[120px] -z-0">format_quote</span>
              <blockquote className="font-headline-md text-headline-md md:text-[40px] md:leading-[48px] text-on-surface mb-stack-lg leading-tight relative z-10">
                "Kemitraan kami dengan StratisGlobal telah mendefinisikan ulang lintasan pertumbuhan kami. Ketajaman strategis mereka tidak tertandingi."
              </blockquote>
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-4 border-surface">
                  <img alt="Budi Santoso" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDLKIBb_MqLSMPKuekmEk-ybmf5AW7W6j56WZ9Xj_QpJWu8i9FdqKRWpm6xr5GmFa6LoICD2L_LzJPFzp6RcJNwhPZfFRUj5yshQDjItUSq5ti5DKlB3nn9QGMdoo4txJyRuLBJR4MD_HidClAWmf-H2nG-OJuPlBJrc2ke6AUlvZsmh1lEOT1C_Sv0zenkD56PmcIvVqW7d3rdY_ZhQjqrBG_cnJW7axWeskrNfKbq9tRATntNL3KyjlYywTZE6EcSjbjr_KzaUM" />
                </div>
                <p className="font-button text-button text-on-surface text-lg">Budi Santoso</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">CEO, Nusantara Holdings</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-gutter mt-stack-lg max-w-2xl mx-auto">
              <div className="bg-surface-container-high p-stack-md rounded-[2rem] flex flex-col justify-center items-center text-center">
                <span className="font-display-lg text-display-lg text-primary-container mb-unit">50+</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Klien Global</span>
              </div>
              <div className="bg-surface-container-high p-stack-md rounded-[2rem] flex flex-col justify-center items-center text-center">
                <span className="font-display-lg text-display-lg text-primary-container mb-unit">15</span>
                <span className="font-body-md text-body-md text-on-surface-variant">Tahun Pengalaman</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-gap bg-tertiary-container text-on-tertiary relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center max-w-3xl">
            <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg mb-stack-md text-white">
              Siap Mengubah Masa Depan Anda?
            </h2>
            <p className="font-body-lg text-body-lg text-tertiary-fixed-dim mb-stack-lg">
              Jadwalkan konsultasi eksekutif hari ini untuk mendiskusikan bagaimana StratisGlobal dapat menyelaraskan dengan visi strategis Anda.
            </p>
            <a className="bg-primary-fixed text-on-primary-fixed font-button text-button px-8 py-4 rounded-full text-center hover:bg-primary-fixed-dim transition-colors shadow-sm inline-flex items-center justify-center gap-2" href="#">
              Mulai Percakapan
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface dark:bg-inverse-surface w-full py-stack-lg border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md">
          <div className="flex flex-col items-center md:items-start gap-stack-sm">
            <div className="text-headline-sm font-headline-sm text-primary dark:text-primary-fixed font-bold">
              StratisGlobal
            </div>
            <div className="font-body-sm text-body-sm text-on-surface dark:text-inverse-on-surface">
              © 2024 StratisGlobal. All rights reserved.
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-stack-md">
            <a className="font-body-sm text-body-sm text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Privacy Policy</a>
            <a className="font-body-sm text-body-sm text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Terms of Service</a>
            <a className="font-body-sm text-body-sm text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Cookie Policy</a>
            <a className="font-body-sm text-body-sm text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Global Offices</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
