import "./bus.css";

export const metadata = {
   title: "My Heo",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
