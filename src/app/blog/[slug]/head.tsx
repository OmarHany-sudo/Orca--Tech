export default function Head({ params }: any) {
  return (
    <>
      <title>{params.slug.replace(/-/g, ' ')} | OrcaTech Blog</title>
      <meta name="description" content="Technical blog post by OrcaTech about cybersecurity and web development." />
      <meta name="robots" content="index, follow" />
    </>
  );
}