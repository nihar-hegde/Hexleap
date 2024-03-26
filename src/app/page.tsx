import { Header } from "@/components/Header";
import { TicketContainer } from "@/components/TicketContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8 bg-dark-primary px-0  lg:px-44 py-14">
      <Header />
      <TicketContainer />
    </main>
  );
}
