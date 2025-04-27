function Header() {
    return (
      <header style={{
        padding: '1rem 2rem',
        background: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(217, 218, 234, 0.37)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        color: '#AFDDE5',
        textAlign: 'center',
        width: '100%',
        maxWidth: '800px',
        margin: '2rem auto',
        fontWeight: '600',
        fontSize: '2.5rem',
        animation: 'zoomIn 0.6s ease'
      }}>
        BMI Calculator
      </header>
    );
  }
  
  export default Header;
  