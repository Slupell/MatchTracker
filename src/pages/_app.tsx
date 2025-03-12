import { MatchTracker } from "@/components/MatchTracker";
import "@/styles/globals.css";
import Layout from "./layout";

export default function App() {
  return (
    <div>
      <Layout>
        <MatchTracker />
      </Layout>
    </div>
  );
}
