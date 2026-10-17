import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tahir Hussain | Backend Developer',
  description:
    'Bengaluru-based backend developer. Building fast APIs, reliable systems, and connected experiences at Justdial.',
  openGraph: {
    title: 'Tahir Hussain | Backend Developer',
    description: 'Thoughtful engineering. Real-world impact.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
