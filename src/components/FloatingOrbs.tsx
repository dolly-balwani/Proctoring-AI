const FloatingOrbs = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating" />
    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl floating-slow" />
    <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-primary/3 rounded-full blur-3xl floating" style={{ animationDelay: "2s" }} />
  </div>
);

export default FloatingOrbs;
