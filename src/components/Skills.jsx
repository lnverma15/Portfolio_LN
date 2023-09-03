

// import React, { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import PropTypes from 'prop-types';
// import { Container, Row, Col } from 'react-bootstrap';
// // import Header from './Header';
// import endpoints from '../constants/endpoints';
// import FallbackSpinner from './FallbackSpinner';
// // import Footer from './Footer';
// import '../css/skills.css';

// const styles = {
//   cardContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   card: {
//     width: 250,
//     height: 250,
//     margin: 10,
//     padding: 10,
//     textAlign: 'center',
//     border: '1px solid #ccc',
//     borderRadius: 5,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   iconStyle: {
//     height: 75,
//     width: 75,
//     margin: '0 auto',
//   },
//   title: {
//     margin: '10px 0',
//     fontWeight: 'bold',
//   },
//   ratingScale: {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//   ratingItem: {
//     width: 20,
//     height: 20,
//     margin: '0 2px',
//     backgroundColor: '#ccc',
//     borderRadius: '50%',
//   },
//   checkedRatingItem: {
//     backgroundColor: 'gold',
//   },
// };

// function Skills(props) {
//   const { header } = props;
//   const [data, setData] = useState(null);

//   const renderSkillsIntro = (intro) => (
//     <h4 style={styles.introTextContainer}>
//       <ReactMarkdown children={intro} />
//     </h4>
//   );

//   useEffect(() => {
//     fetch(endpoints.skills, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);
//   }, []);

//   const renderRatingScale = (rating) => {
//     const filledStars = Math.floor(rating / 2);
//     const halfStar = rating % 2 === 1;

//     const stars = [];
//     for (let i = 0; i < 5; i += 1) {
//       if (i < filledStars) {
//         stars.push(<div key={i} style={{ ...styles.ratingItem, ...styles.checkedRatingItem }} />);
//       } else if (halfStar && i === filledStars) {
//         stars.push(
//           <div key={i} style={{ ...styles.ratingItem, background: 'linear-gradient(to right, gold 50%, #ccc 50%)' }} />,
//         );
//       } else {
//         stars.push(<div key={i} style={styles.ratingItem} />);
//       }
//     }

//     return <div style={styles.ratingScale}>{stars}</div>;
//   };

//   const renderSkillCards = (skills) => (
//     <div style={styles.cardContainer}>
//       {skills.map((rows) => (
//         <div key={rows.title} style={styles.card}>
//           <img style={styles.iconStyle} src={rows.icon} alt={rows.title} />
//           <h5 style={styles.title}>{rows.title}</h5>
//           {renderRatingScale(rows.rating)}
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <>
//       {/* <Header title={header} /> */}
//       {data ? (

//         <div className="section-content-container">
//           <Container>
//             {/* {renderSkillsIntro(data.intro)} */}
//             {data.skills?.map((rows) => (
//               <div key={rows.title}>
//                 <br />
//                 <center>
//                   <h3>{rows.title}</h3>
//                 </center>
//                 <br /><br /><br />
//                 <Row>
//                   <Col>
//                     {renderSkillCards(rows.items)}
//                   </Col>
//                 </Row>
//               </div>
//             ))}
//           </Container>
//         </div>
//       ) : <FallbackSpinner />}
//       <br /><br /><br /><br /><br />
//     </>
//   );
// }

// // Skills.propTypes = {
// //   header: PropTypes.string.isRequired,
// // };

// export default Skills;





import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 250,
    height: 250,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  iconStyle: {
    height: 75,
    width: 75,
    margin: '0 auto',
  },
  title: {
    margin: '10px 0',
    fontWeight: 'bold',
  },
  ratingScale: {
    display: 'flex',
    justifyContent: 'center',
  },
  ratingItem: {
    width: 20,
    height: 20,
    margin: '0 2px',
    borderRadius: '50%',
  },
  checkedRatingItem: {
    background: 'gold',
  },
};

function Skills(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown children={intro} />
    </h4>
  );

  useEffect(() => {
    fetch(endpoints.skills, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  const renderRatingScale = (rating) => {
    const filledStars = Math.floor(rating / 2);
    const halfStar = rating % 2 === 1;

    // const starColors = ['#FF5733', '#339CFF', '#33FF41', '#FF33EC', '#FFC133']; // Different colors for stars
    // const starColors = [
    //   '#339CFF',
    //   '#2478D3',
    //   '#1655A6',
    //   '#0B48A2',
    //   '#082F6B',
    // ];


    const starColors = [
      'rgba(51, 156, 255, 0.7)',  // Light blue with 70% opacity
      'rgba(11, 72, 162, 0.7)',   // Dark blue with 70% opacity
      'rgba(51, 156, 255, 0.5)',  // Light blue with 50% opacity
      'rgba(11, 72, 162, 0.5)',   // Dark blue with 50% opacity
      'rgba(51, 156, 255, 0.3)',  // Light blue with 30% opacity
    ];







    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      const starColor = i < filledStars ? starColors[i] : '#ccc';

      if (i < filledStars) {
        stars.push(
          <div
            key={i}
            style={{ ...styles.ratingItem, ...styles.checkedRatingItem, backgroundColor: starColor }}
          />
        );
      } else if (halfStar && i === filledStars) {
        stars.push(
          <div
            key={i}
            style={{
              ...styles.ratingItem,
              background: `linear-gradient(to right, ${starColor} 50%, #ccc 50%)`,
            }}
          />
        );
      } else {
        stars.push(
          <div
            key={i}
            style={{ ...styles.ratingItem, backgroundColor: starColor }}
          />
        );
      }
    }

    return <div style={styles.ratingScale}>{stars}</div>;
  };

  const renderSkillCards = (skills) => (
    <div style={styles.cardContainer}>
      {skills.map((item) => (
        <div key={item.title} style={styles.card}>
          <img style={styles.iconStyle} src={item.icon} alt={item.title} />
          <h5 style={styles.title}>{item.title}</h5>
          {renderRatingScale(item.rating)} {/* Use the rating from JSON data */}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Your Header component */}
      {data ? (
        <div className="section-content-container">
          <Container>
            {/* {renderSkillsIntro(data.intro)} */}
            {data.skills?.map((category) => (
              <div key={category.title}>
                <br />
                <center>
                  <h3>{category.title}</h3>
                </center>
                <br /><br /><br />
                <Row>
                  <Col>
                    {renderSkillCards(category.items)}
                  </Col>
                </Row>
              </div>
            ))}
          </Container>
        </div>
      ) : <FallbackSpinner />}
      <br /><br /><br /><br /><br />
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;


