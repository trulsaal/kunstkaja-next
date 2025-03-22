import "../globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div></div>

          {children}
        </Providers>
      </body>
    </html>
  );
}
