import PageHeader from "@/components/PageHeader";

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader />
      {children}
    </>
  );
}
