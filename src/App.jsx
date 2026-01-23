import "./index.css";

// Component = UI + Logic
// Props - Arg & Parameter - Properties
export default function App() {
  // Logic Starts

  // Logic Ends
  return (
    // UI Starts
    <div className="App">
      <User
        name="Arjun🎉🎉"
        pic="https://static.vecteezy.com/system/resources/thumbnails/037/915/454/small_2x/ai-generated-a-man-in-a-suit-confidence-with-folded-arms-professional-job-interview-attire-image-photo.jpeg"
      />
      <User
        name="Monisha🎉🎉"
        pic="https://media.istockphoto.com/id/1386217759/photo/portrait-of-a-confident-young-businesswoman-standing-against-an-urban-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=1UaNF9w7N4-YDcx9w_Z1CKJuVHoQbKPK4jxx8Sd4H_Y= "
      />
      <User
        name="Surya🎉🎉"
        pic="https://static.vecteezy.com/system/resources/thumbnails/047/971/259/small_2x/handsome-male-model-posing-wearing-a-back-suit-photo.jpg"
      />
    </div>
    // UI Ends
  );
}

function User({ name, pic }) {
  return (
    // UI Starts
    <div>
      <img src={pic} alt="men" />
      <p className="user-greet">
        Hello <span className="user-name">{name}</span>
      </p>
    </div>
    // UI Ends
  );
}

// function Msg(props) {
//   const { name } = props;

//   return (
//     <div>
//       <h1 className="user-msg">Hello, {name} 🎊</h1>
//     </div>
//   );
// }

// function Msg(props) {
//   console.log(props, typeof props);
//   // let name = "NK";

//   return (
//     <div>
//       <h1 className="user-msg">Hello, {props.name} 🎊</h1>
//     </div>
//   );
// }

// function print(name) {
//   return `Hello, ${name}`;
// }

// print('nk')
// print('pusha')
// print('tara')

// Component Rules
// 1. Start with Capital (PascalCase)
// 2. Return JSX

// JSX - JavaScript XML
// Babel -> JSX -> JS
// class -> reserverd keyword

// // Component = UI + Logic
// export default function App() {
//   // Logic Starts
//   let name = "Suriya";

//   // Logic Ends
//   return (
//     // UI Starts
//     <div className="App">
//       <input type="text" placeholder="Tell me your fav color" />
//       <h1 className="user-msg">Hello, Vikas 🎊</h1>
//     </div>
//     // UI Ends
//   );
// }

// // JSX - JavaScript XML
// // Babel -> JSX -> JS
// // class -> reserverd keyword
