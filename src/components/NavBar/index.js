import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#fff", borderBottom: "1px solid #eff2f5" }}>
        <Container>
          <Navbar.Brand href="/">
            <div style={{ fontSize: '2rem', fontWeight: "650" }}>
              <span style={{ color: '#1e24c4' }}>Super</span><span style={{ color: '#f34d76' }}>Mind</span>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;