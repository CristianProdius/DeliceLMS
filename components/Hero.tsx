export default function Hero() {
  return (
    <div className="relative min-h-[85vh] w-full overflow-hidden pt-10">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/40 z-10">
        <img
          src="https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
          alt="Dark chocolate background"
          className="w-full h-full object-cover mix-blend-multiply opacity-90"
        />
      </div>

      {/* Overlay gradients for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-brown-950/80 via-brown-900/70 to-brown-800/60 z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent z-20" />

      {/* Main content container */}
      <div className="relative container mx-auto px-4 py-20 min-h-[85vh] flex items-center z-30">
        <div className="max-w-3xl space-y-8">
          {/* Premium badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30">
            <span className="text-amber-300 text-sm font-medium">
              Premium Chocolate Masterclass
            </span>
          </div>

          {/* Enhanced heading with improved typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 dark:from-amber-200 dark:via-amber-400 dark:to-amber-600 bg-clip-text text-transparent">
            Master the Art of <br className="hidden md:block" />
            <span className="italic">Chocolate Making</span>
          </h1>

          {/* Refined description */}
          <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-100 leading-relaxed max-w-2xl">
            Learn the secrets of artisanal chocolate crafting from master
            chocolatiers. From bean to bar, discover the techniques to create
            exquisite chocolate confections in your own kitchen.
          </p>

          {/* Value proposition stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-2">
            <div className="space-y-1">
              <p className="text-3xl font-bold text-amber-400">50+</p>
              <p className="text-gray-400 text-sm">Premium Recipes</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-amber-400">12</p>
              <p className="text-gray-400 text-sm">Master Classes</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-amber-400">24/7</p>
              <p className="text-gray-400 text-sm">Expert Support</p>
            </div>
          </div>

          {/* Enhanced call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-amber-600/30 hover:-translate-y-1 focus:ring-2 focus:ring-amber-500/50 focus:outline-none">
              <span>Enroll Now</span>
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-amber-500/50 text-white hover:text-amber-300 rounded-lg font-medium text-lg transition-all duration-300 focus:ring-2 focus:ring-amber-500/30 focus:outline-none flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
              </svg>
              <span>Watch Preview</span>
            </button>
          </div>

          {/* Social proof section */}
          <div className="pt-10 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-4">
              Trusted by world-class chocolatiers
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img
                    className="h-10 w-10 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                  />
                  <img
                    className="h-10 w-10 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                  />
                  <img
                    className="h-10 w-10 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                  />
                </div>
                <p className="ml-4 text-sm text-gray-300">
                  <span className="text-amber-400 font-medium">4.9/5</span> from
                  over 3,000 reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative image element */}
        <div className="hidden lg:block absolute right-10 top-1/3 w-80 h-80">
          <div className="relative w-full h-full">
            <div className="absolute w-64 h-64 rounded-2xl overflow-hidden shadow-2xl rotate-6 opacity-90">
              <img
                src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                alt="Chocolate making process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30"></div>
    </div>
  );
}
