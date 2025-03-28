export default function Hero() {
  return (
    <div className="relative h-[45vh] w-full pt-12">
      {/* Overlay gradients for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-500/10 to-brown-900/55 dark:from-brown-300/15 dark:to-brown-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />

      {/* Main content container */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-amber-900 dark:from-amber-500 dark:to-amber-700 bg-clip-text text-transparent">
            Master the Art of Chocolate Making
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn the secrets of artisanal chocolate crafting from master
            chocolatiers. From bean to bar, discover the techniques to create
            exquisite chocolate confections in your own kitchen.
          </p>
        </div>
      </div>
    </div>
  );
}
