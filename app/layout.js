import "./globals.css";
import CallButtons from '@/components/elements/CallButtons';

export const metadata = {
  title: "Sampoorn Arogya",
  description: "Your trusted partner in natural digestive health solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CallButtons />
      </body>
    </html>
  );
}
