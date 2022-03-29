const IntroPage = () => {
  return (
    <main>
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="flex flex-col items-center justify-center text-xl pt-12 h-screen border">
        <div className="text-4xl">Remix.run</div>
        <div className="mt-2">
          New SSR framework that's going back to the basics
        </div>
        <div className="text-blue-800 mt-2">#php-love-hate-relationship</div>
      </div>
    </main>
  );
};

export default IntroPage;
