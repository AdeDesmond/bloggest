import { Toaster } from "sonner";
import { Header } from "./_components/header";
import { MobileHeader } from "./_components/mobile-header";
import { QueryClientProviders } from "@/lib/provider/query-client-provider";
import { Footer } from "./_components/footer";

export default function BloggestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen">
      <QueryClientProviders>
        <Header />
        <MobileHeader />
        <Toaster />
        {children} <Footer />
      </QueryClientProviders>
    </div>
  );
}
