import LogoShowcase from "@/components/LogoShowcase";
import ImageLogoShowcase from "@/components/ImageLogoShowcase";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <ImageLogoShowcase />
      <hr style={{ border: 'none', borderTop: '1px solid #eee', width: '100%' }} />
      <LogoShowcase />
    </main>
  );
}
