import Navbar from 'react-bootstrap/Navbar';

export default function Footer({ reports }) {
  return (
    <Navbar
      fixed="bottom"
      style={{
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'plum',
      }}
    >
      <p>{reports.length} Locations World Wide</p>
    </Navbar>
  );
}
