import '@/app/ui/global.css';
import { inter ,amiri} from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      <h2 style={{fontSize:"20px"}} className={amiri.className}>مرحباً باللغة العربية</h2>
        {children}
        </body>
    </html>
  );
}
