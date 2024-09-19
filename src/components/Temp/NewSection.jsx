

const NewSection = ({ children, title, button }) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
            <button>{button}</button>
        </section>
    )
}

export default NewSection







// const Section = ({ children, title }) => {
//     return (
//       <section style={{ width: "900px", margin: "0 auto", padding: "20" }}>
//         <h2>{title}</h2>
//         {children}
//       </section>
//     );
//   };
  
//   export default Section;