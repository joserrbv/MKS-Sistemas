import Navbar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card/card';


export default function Home() {
  return (
    <main>
      <Navbar/>
      <div>
        <Card/>
      </div>
      <Footer/>
    </main>
  );
}
