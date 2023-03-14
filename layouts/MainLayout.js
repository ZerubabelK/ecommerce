import NavigationBar from "@/components/common/NavigationBar";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
