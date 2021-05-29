import './App.css';
import Merhaba from './MyComponent';
import Hello from './MyComponentClass';
import Sayac from './Sayac';
import Dugme from './Dugme';
import Dugmem from './Dugmem';
import Dikkat from './MyState';

function App() {
  const ad = "React";
  return (
    <div className="app">
      <h1 className="yesil">Hello World! Ben {ad} :)</h1>
      <h1>Hello World! Ben {ad} :)</h1>
      <Merhaba name="Galip" />
      <Hello />
      <p>-----------------------------------------------</p>
      <Sayac />
      <Sayac />
      <Sayac />
      <Sayac />
      <p>-----------------------------------------------</p>
      <Dugme name="Ali" />
      <Dugme name="Can" />
      <Dugme name="Cem" />
      <p>-----------------------------------------------</p>
      <Dugmem ad="Ali" />
      <Dugmem ad="Can" />
      <Dugmem ad="Cem" />
      <p>-----------------------------------------------</p>
      <Dikkat deger="Kaygan Zemin" />
      <Dikkat deger="" />
    </div>
  );
}

export default App;
