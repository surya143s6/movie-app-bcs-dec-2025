import { User } from "./User.1";

export function Userlist() {
  const userdetails = [
    {
      name: "Arjun🎉🎉",
      pic: "https://static.vecteezy.com/system/resources/thumbnails/037/915/454/small_2x/ai-generated-a-man-in-a-suit-confidence-with-folded-arms-professional-job-interview-attire-image-photo.jpeg",
    },
    {
      name: "Monisha🎉🎉",
      pic: "https://media.istockphoto.com/id/1386217759/photo/portrait-of-a-confident-young-businesswoman-standing-against-an-urban-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=1UaNF9w7N4-YDcx9w_Z1CKJuVHoQbKPK4jxx8Sd4H_Y= ",
    },
    {
      name: "Surya🎉🎉",
      pic: "https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg",
    },
  ];

  return (
    <div className="App">
      {userdetails.map(({ name, pic }) => (
        <User name={name} pic={pic} />
      ))}
    </div>
  );
}
