import '../styles/globals.css';
import { Nav } from '../ui/Nav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body className="overflow-y-scroll bg-gray-100">
        <div className="rounded-lg p-10">{children}</div>
      </body>
    </html>
  );
}
