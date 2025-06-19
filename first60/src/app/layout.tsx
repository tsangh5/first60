import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-mint-50 via-coral-50 to-purple-50">
        {children}
      </body>
    </html>
  );
}