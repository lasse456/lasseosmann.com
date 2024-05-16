import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";

export default function Index() {
  return (
    <Layout page={PAGES.HOME}>
      <p className="text-3xl">hey</p>
    </Layout>
  );
}
