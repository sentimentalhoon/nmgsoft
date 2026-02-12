import ImageLogoShowcase from "@/components/ImageLogoShowcase";
import ModernLogo from "@/components/ModernLogo";
import VideoShowcase from "@/components/VideoShowcase";
import HeroVideo from "@/components/HeroVideo";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', padding: '0', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <HeroVideo />
      <div style={{ padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <ImageLogoShowcase />
        <hr style={{ border: 'none', borderTop: '1px solid #eee', width: '100%' }} />
        <ModernLogo />
        <hr style={{ border: 'none', borderTop: '1px solid #eee', width: '100%' }} />
        <VideoShowcase />
        <hr style={{ border: 'none', borderTop: '1px solid #eee', width: '100%' }} />
      </div>
    </main>
  );
}
