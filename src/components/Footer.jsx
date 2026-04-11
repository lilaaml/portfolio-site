const Footer = () => {
  return (
    <footer className="border-t border-border mt-24 py-8 text-center text-sm text-muted-foreground w-full">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-primary font-medium">Lila Amelia</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
