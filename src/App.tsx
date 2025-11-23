import Galaxy from './components/Galaxy'

function App() {

  return (
    <>
      <div className="bg-[#060010] relative h-screen w-screen">
        {/* Background */}
        <div className="h-screen w-screen absolute top-0 left-0 overflow-hidden">
          <Galaxy
            density={0.5}
            glowIntensity={0.1}
            saturation={0.5}
            starSpeed={0.2}
            repulsionStrength={0.2}
            rotationSpeed={0.05}
            speed={0.5}
          />
        </div>

      </div>
    </>
  )
}

export default App
