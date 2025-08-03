export default function Home() {
  return (
    <main
      style={{
        backgroundColor: 'orange',
        height: '100vh',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          border: '4px solid white',
          padding: '30px 50px',
          borderRadius: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 0 25px rgba(0, 0, 0, 0.4)',
        }}
      >
        <h1 style={{ textAlign: 'center', fontSize: '2em', color: 'white', margin: 0 }}>
          Chào mừng bạn đến với website AZHSK.VN
        </h1>
      </div>
    </main>
  );
}
