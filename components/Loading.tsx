// import React, { useState, useEffect } from 'react';

// const Loading = () => {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 10000);

//         return () => {
//             clearTimeout(timer);
//         };
//     }, []);

//     return loading ? (
//         <div className="loading-container">
//             <video className="loading-video" autoPlay loop muted>
//                 <source src="/assets/videos/loading.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//         </div>
//     ) : null;
// };

// export default Loading;


