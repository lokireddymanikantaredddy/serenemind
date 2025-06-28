export function Footer() {
  return (
    <footer className="w-full bg-secondary/50">
      <div className="container mx-auto max-w-5xl px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} SereneMind Psychology. All rights reserved.</p>
      </div>
    </footer>
  );
}
