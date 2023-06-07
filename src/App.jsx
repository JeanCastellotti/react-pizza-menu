import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'

function App() {
  return (
    <div className="min-h-screen  border-b-[1.6rem] border-b-[#edc84b] bg-[#f7f2e9] p-[3.2rem] pb-24 text-[#252525]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-[4.8rem]">
        <Header />
        <Menu />
        <Footer />
      </div>
    </div>
  )
}

export default App
