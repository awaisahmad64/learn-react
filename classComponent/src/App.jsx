const containerStyles = {
  border: '1px solid #ebebeb',
  boxShadow: '0 3px 3px 0 rgba(50, 50, 50, .35)',
  width: '350px',
  height: '380px',
  margin: '0 auto',
  padding: '1rem',
};
const headerStyle = {
  borderBottom: '1px solid #ebebeb',
  marginBottom: '1rem',
};
function App() {
  return (
    <>
      <header style={headerStyle}>this is header</header>
      <div style={containerStyles}>Hello</div>
    </>
  );
}

export default App;
