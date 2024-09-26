import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";

export const metadata = {
  title: "Mood Meter · Dashboard",
};

export default function DashboardPage() {
  return (
    <Main>
      <Dashboard />
    </Main>
  );
}
