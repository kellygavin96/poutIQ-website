import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.png";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center gap-3">
        <img src={logo} alt="Girly" className="w-10 h-10" />
        <h1 className="text-2xl font-bold text-foreground">girly</h1>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-sm border border-border">
            <span className="text-3xl font-bold text-foreground">4.9</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-xl">★</span>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">50,000+ users</span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl space-y-4">
            <h2 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight">
              Your makeup collection is out of control.
            </h2>
            <h3 className="text-5xl md:text-7xl font-extrabold text-accent leading-tight">
              Let's organize it. ✨
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="hero" size="lg" className="text-base font-semibold">
              Download on the App Store
            </Button>
            <Button variant="pink" size="lg" className="text-base font-semibold">
              Get it on Google Play
            </Button>
          </div>

          {/* Phone Mockup */}
          <div className="pt-12 pb-8">
            <img 
              src={heroPhone} 
              alt="Girly app interface" 
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
          </div>

          {/* Features Section */}
          <div className="max-w-5xl w-full pt-16">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
              Take back control
            </h3>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-5xl">💄</div>
                <h4 className="text-xl font-bold text-foreground">Track your collection</h4>
                <p className="text-muted-foreground">
                  See exactly what makeup you own and avoid duplicate purchases
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-5xl">💰</div>
                <h4 className="text-xl font-bold text-foreground">Set spending limits</h4>
                <p className="text-muted-foreground">
                  Create budgets for healthier beauty shopping habits
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-5xl">✨</div>
                <h4 className="text-xl font-bold text-foreground">Expiry reminders</h4>
                <p className="text-muted-foreground">
                  Never forget when it's time to replace your favorites
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="pt-20 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to glow up your routine?
            </h3>
            <p className="text-lg text-muted-foreground">
              Join thousands organizing their beauty collection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button variant="hero" size="lg" className="text-base font-semibold">
                Download on the App Store
              </Button>
              <Button variant="pink" size="lg" className="text-base font-semibold">
                Get it on Google Play
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-sm text-muted-foreground border-t border-border mt-20">
        <p>© 2025 Girly. Made with 💗 for makeup lovers everywhere.</p>
      </footer>
    </div>
  );
};

export default Index;
