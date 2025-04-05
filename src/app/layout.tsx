import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Helix - Automatic brand assets generation',
  description: 'Automatic brand assets generation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>
          {`@import url("https://fonts.googleapis.com/css?family=DM+Sans:var(--title-small-font-weight),var(--description-x-small-font-weight),var(--paragraph-small-font-weight),var(--description-2x-small-font-weight)")`}
        </style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 