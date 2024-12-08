import React from 'react'
import '../globals.css';
import Image from "next/image";
import card1 from "../image/card-item (1).png";
import card2 from "../image/card-item (2).png";
import card3 from "../image/card-item (3).png";
import card4 from "../image/card-item.png";
import card5 from "../image/col-md-4 (1).png";
import row from "../image/row.png";
import card9 from "../image/product-cover-5 (3).png";
import card6 from "../image/product-cover-5 (4).png";
import card7 from "../image/product-cover-5 (5).png";
import card8 from "../image/product-cover-5 (6).png";






export default function Shop() {
  return (
    <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "1200px",
        margin: "20px auto", // Centered on the page
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Shop Section */}
      <div style={{ fontWeight: "bold", fontSize: "24px", color: "#343a40" }}>
        Shop
      </div>

      {/* Breadcrumb */}
      <div style={{ fontSize: "14px", color: "#6c757d" }}>
        <span style={{ cursor: "pointer", color: "#007BFF" }}>Home</span> &gt; Shop
      </div>
    </div>
    









    
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "15px",
        padding: "20px",
      }}
    >
      {/* Card 1 */}
      <div
        style={{
          width: "18rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          src={card1}
          alt="Card 1"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>

      {/* Card 2 */}
      <div
        style={{
          width: "18rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          src={card2}
          alt="Card 2"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>

      {/* Card 3 */}
      <div
        style={{
          width: "18rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          src={card3}
          alt="Card 3"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>

      {/* Card 4 */}
      <div
        style={{
          width: "18rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          src={card4}
          alt="Card 4"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>

      {/* Card 5 */}
      <div
        style={{
          width: "18rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          src={card5}
          alt="Card 5"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
    </div>


    


    <div className="filter-bar">
      <div className="left-section">
        <span>Showing all 12 results</span>
        <div className="view-options">
          <button>Views:</button>
          <button>Grid View</button>
          <button>List View</button>
        </div>
      </div>
      <div className="right-section">
        <select>
          <option value="popularity">Popularity</option>
          <option value="rating">Rating</option>
          <option value="newest">Newest</option>
        </select>
        <button>Filter</button>
      </div>
    </div>



    <Image 
        src={row} 
        alt="Right Image" 
        style={{ width: '100%', height: '70%' }} 
      />











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
      src={card9}
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
      src={card9}
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
      src={card9}
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



    
    </>
  )
}
