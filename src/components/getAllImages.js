// import {StaticQuery, graphql } from "gatsby"
// import React from "react"

// export default (props) => ({
//   render(){  
//     return(<StaticQuery
//         query={graphql`
//             query MyQuery {
//                 allPrismicProductImage(limit: 10) {
//                 edges {
//                     node {
//                     id
//                     data {
//                         main_image {
//                         alt
//                         copyright
//                         url
//                         }
//                     }
//                     }
//                 }
//                 }
//             }
//         `}
//         render={data => (
//             <>
//             { React.Children.map(this.props.children, child => {
//                 return React.cloneElement(child, {
//                     productImages:data
//                 });
//                 })
//             }
//             </>
//         )}
//     />);
//     }})