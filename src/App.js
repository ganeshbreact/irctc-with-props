import logo from './logo.svg';
import './App.css';
import Cards from"./Cards.js";

function App() {
  return (
    <div className="App"
    style={{display:"flex", flexWrap:"wrap",gap:"20px"}}
    >
      <Cards imgLink="https://www.irctc.co.in/nget/assets/images/exterior.jpg" title="Maharajas' Express" aboutPackage="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years."
      readmore="http://www.the-maharajas.com/"  />

      <Cards imgLink="https://www.irctc.co.in/nget/assets/images/Thailand.jpg" title="International Packages" aboutPackage="Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience." readmore="https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=International&sector=All" />

      <Cards imgLink="https://www.irctc.co.in/nget/assets/images/Kashmir.jpg" title="Domestic Air Packages" aboutPackage="Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!" readmore="https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=Domestic&sector=All" />

      <Cards imgLink="https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg" title="Bharat Gaurav Tourist Train" aboutPackage="IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage." readmore="https://www.irctctourism.com/bharatgaurav" />

      <Cards imgLink="https://www.irctc.co.in/nget/assets/images/Manali.jpg" title="Rail Tour Packages" aboutPackage="IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available." readmore="https://www.irctctourism.com/#/tourpkgs" />
      
    </div>
  );
}

export default App;
