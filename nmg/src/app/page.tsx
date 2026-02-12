import LogoShowcase from "@/components/LogoShowcase";
import ImageLogoShowcase from "@/components/ImageLogoShowcase";
import SvgLogoShowcase from "@/components/SvgLogoShowcase";
import AdvancedSvgLogoShowcase from "@/components/AdvancedSvgLogoShowcase";
import HeroVideo from "@/components/HeroVideo";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', padding: '0', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <HeroVideo />
      <div style={{ padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <ImageLogoShowcase />
        <hr style={{ border: 'none', borderTop: '1px solid #eee', width: '100%' }} />
        <SvgLogoShowcase />
        <hr style={{ border: 'none', borderTop: '1px solid #eee', width: '100%' }} />
        <AdvancedSvgLogoShowcase />
        <hr style={{ border: 'none', borderTop: '1px solid #eee', width: '100%' }} />
        <LogoShowcase />
      </div>
    </main>
  );
}
