function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-16 w-16 relative">
        <div className="absolute inset-0">
          <div className="h-full w-full animate-spin border-4 border-muted-foreground border-t-primary rounded-full" />
        </div>
        <img
          src="/Logo_dark.svg"
          alt="Loading"
          className="w-6 h-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default Loading;
