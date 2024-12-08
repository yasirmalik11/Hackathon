import Image from "next/image";
import banner1 from "./image/shop-hero-2-png-picture-1.png";
import banner from "./image/shop-hero-2-png-picture-1.png";
import banner2 from "./image/hero-cover-1.png";
import card1 from "./image/fixed-height.png";
import card2 from "./image/product-cover-5.png";
import card3 from "./image/product-cover-5 (1).png";
import card4 from "./image/product-cover-5 (2).png";
import card5 from "./image/product-cover-5 (3).png";
import card6 from "./image/product-cover-5 (4).png";
import card7 from "./image/product-cover-5 (5).png";
import card8 from "./image/product-cover-5 (6).png";
import card9 from "./image/unsplash_dEGu-oCuB1Y.png";
import card10 from "./image/unsplash_hHdHCfAifHU.png";
import card11 from "./image/unsplash_tVEqStC2uz8.png";







export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <div className="banner">
        <div className="content">
          <h5>SUMMER 2020</h5>
          <h1>NEW COLLECTION</h1>
          <p>
            We know how <span className="highlight">Yasir</span> objects will
            act, but things on a small scale.
          </p>
          <button className="shopNow">SHOP NOW</button>
        </div>
        <div className="image">
          <Image
            src={banner}
            alt="Right Image"
            style={{ width: '100%', height: '70%' }}
          />
        </div>
      </div>

      {/* Editor's Pick Section */}
      <div className="editorPick">
        <h3>EDITOR’S PICK</h3>
        <p>Problems trying to resolve the conflict between</p>
      </div>


      


 {/* Editor's Pick Section */}
 <div className="editorPick">
        <h3>EDITOR’S PICK</h3>
        <p>Problems trying to resolve the conflict between</p>
      </div>


      {/* Cards Section */}
    <section style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
  {/* Card 1 */}
  <div
    className="card"
    style={{
      width: "18rem",
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <Image
      src={card1}
      alt="Right Image"
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <h5 className="card-title">Graphic Design</h5>
      <p className="card-text">English Department</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0, marginRight: "8px" }}>$16.48 $6.48</p>
      </div>
      {/* Color Dots on New Line, Single Row */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
        <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="card"
    style={{
      width: "18rem",
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <Image
      src={card2}
      alt="Right Image"
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <h5 className="card-title">Graphic Design</h5>
      <p className="card-text">English Department</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0, marginRight: "8px" }}>$20.99 $10.99</p>
      </div>
      {/* Color Dots on New Line, Single Row */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
        <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="card"
    style={{
      width: "18rem",
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <Image
      src={card3}
      alt="Right Image"
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <h5 className="card-title">Graphic Design</h5>
      <p className="card-text">English Department</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0, marginRight: "8px" }}>$30.00 $15.00</p>
      </div>
      {/* Color Dots on New Line, Single Row */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
        <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div
    className="card"
    style={{
      width: "18rem",
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <Image
      src={card4}
      alt="Right Image"
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <h5 className="card-title">Graphic Design</h5>
      <p className="card-text">English Department</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0, marginRight: "8px" }}>$40.99 $20.99</p>
      </div>
      {/* Color Dots on New Line, Single Row */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
        <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
      </div>
    </div>
  </div>
</section>










      {/* Cards Section */}
      <section style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-between" }}>
  {/* Card 1 */}
  <div
    className="card"
    style={{
      width: "18rem",
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <Image
      src={card5}
      alt="Right Image"
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <h5 className="card-title">Graphic Design</h5>
      <p className="card-text">English Department</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0, marginRight: "8px" }}>$16.48 $6.48</p>
      </div>
      {/* Color Dots on New Line, Single Row */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
        <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="card"
    style={{
      width: "18rem",
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <Image
      src={card6}
      alt="Right Image"
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <h5 className="card-title">Graphic Design</h5>
      <p className="card-text">English Department</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0, marginRight: "8px" }}>$20.99 $10.99</p>
      </div>
      {/* Color Dots on New Line, Single Row */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
        <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="card"
    style={{
      width: "18rem",
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <Image
      src={card7}
      alt="Right Image"
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <h5 className="card-title">Graphic Design</h5>
      <p className="card-text">English Department</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0, marginRight: "8px" }}>$30.00 $15.00</p>
      </div>
      {/* Color Dots on New Line, Single Row */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
        <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div
    className="card"
    style={{
      width: "18rem",
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <Image
      src={card8}
      alt="Right Image"
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <h5 className="card-title">Graphic Design</h5>
      <p className="card-text">English Department</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0, marginRight: "8px" }}>$40.99 $20.99</p>
      </div>
      {/* Color Dots on New Line, Single Row */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
        <span style={{ width: "10px", height: "10px", backgroundColor: "red", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "blue", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%" }}></span>
        <span style={{ width: "10px", height: "10px", backgroundColor: "yellow", borderRadius: "50%" }}></span>
      </div>
    </div>
  </div>
</section>










      <div className="banner1">
        <div className="content">
          <h5>SUMMER 2020</h5>
          <h1>Vita Classic Product</h1>
          <p>
            We know how large objects will act, We know how are objects will act, We know
          </p>
          <div className="add"><p>$16.48</p>
            <button className="shopNow">ADD TO CARD</button>
          </div>
        </div>
        <div className="banner1">
          <Image
            src={banner1}
            alt="Right Image"
            style={{ width: '100%', height: '70%' }}
          />
        </div>
      </div>







      <div className="banner2">
  <div className="image">
    <Image
      src={banner2}
      alt="Right Image"
      style={{ width: '100%', height: '100%' }}
    />
  </div>

  <div className="content">
    <h5>SUMMER 2020</h5>
    <h1>Part of the Neural Universe</h1>
    <p>
      We know how large objects will act, but things on a small scale.
    </p>
    
    <div className="buttons">
      <button className="shopNow">BUY NOW</button>
      <button className="learnMore">READ MORE</button>
    </div>
  </div>
</div>

 {/* Editor's Pick Section */}
 <div className="editorPick">
        <h3>Featured Posts</h3>
        <p>Problems trying to resolve the conflict between 
          <br />
         the two major realms of Classical physics: Newtonian mechanics </p>
      </div>

{/* card */}
<section style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
  {/* Card 1 */}
  <div
    className="card"
    style={{
      width: "25rem",
      height: "auto",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <Image
      src={card9}
      alt="Right Image"
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <div>Google Trending New</div>
      <h5 className="card-title">
        Loudest à la Madison <br /> #1(L'integral)
      </h5>
      <p className="card-text">
        We focus on ergonomics and meeting <br />
        you where you work. It's only a <br />
        keystroke away.
      </p>
      {/* Price section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0, marginRight: "8px" }}>$16.48 $6.48</p>
      </div>
      {/* Icons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <span style={{ cursor: "pointer" }}>🕰️ 8 Dec 2024</span> {/* Clock Icon */}
        <span style={{ cursor: "pointer" }}>💬 10 comments</span> {/* Comment Icon */}
      </div>
      {/* Button on a new line */}
      <div>
        <button
          style={{
            width: "30%",
            padding: "8px 12px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px", // Ensures the button is separated from the icons
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="card"
    style={{
      width: "25rem",
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <Image
      src={card10}
      alt="Right Image"
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <div>Google Trending New</div>
      <h5 className="card-title">
        Loudest à la Madison <br /> #1(L'integral)
      </h5>
      <p className="card-text">
        We focus on ergonomics and meeting <br />
        you where you work. It's only a <br />
        keystroke away.
      </p>
      {/* Price section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0, marginRight: "8px" }}>$16.48 $6.48</p>
      </div>
      {/* Icons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <span style={{ cursor: "pointer" }}>🕰️ 8 Dec 2024</span> {/* Clock Icon */}
        <span style={{ cursor: "pointer" }}>💬 10 comments</span> {/* Comment Icon */}
      </div>
      {/* Button on a new line */}
      <div>
        <button
          style={{
            width: "30%",
            padding: "8px 12px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px", // Ensures the button is separated from the icons
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="card"
    style={{
      width: "25rem",
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <Image
      src={card11}
      alt="Right Image"
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <div>Google Trending New</div>
      <h5 className="card-title">
        Loudest à la Madison <br /> #1(L'integral)
      </h5>
      <p className="card-text">
        We focus on ergonomics and meeting <br />
        you where you work. It's only a <br />
        keystroke away.
      </p>
      {/* Price section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0, marginRight: "8px" }}>$16.48 $6.48</p>
      </div>
      {/* Icons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <span style={{ cursor: "pointer" }}>🕰️ 8 Dec 2024</span> {/* Clock Icon */}
        <span style={{ cursor: "pointer" }}>💬 10 comments</span> {/* Comment Icon */}
      </div>
      {/* Button on a new line */}
      <div>
        <button
          style={{
            width: "30%",
            padding: "8px 12px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px", // Ensures the button is separated from the icons
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>








    </>
  );
}
