// import styled from "styled-components";

// export default function ConjunctionBox({ conjunction_data, onClicker }) {
//     const options = {
//         month: "long",    
//         day: "2-digit",   
//         hour: "2-digit",  
//         minute: "2-digit",
//         second: "2-digit" 
//     } as const;
//     return (
//         <ConjunctionBoxWrapper>
//             <Table>
//                 <thead>
//                     <tr>
//                         <th>PRIMARY<br />SECONDARY</th>
//                         <th>TCA(UTC)</th>
//                         <th>DCA(km)</th>
//                         <th>PoC_Max</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {conjunction_data.map((row) => {
//                         return (
//                             <tr onClick={() => onClicker(row)}>
//                                 <td>{row.primary_satellite_name}<br />{row.secondary_satellite_name}</td>
//                                 <td>{new Date(row.collision_time).toLocaleString('en-US', options).replace('at', ',').slice(0,-2)}</td>
//                                 <td>{row.miss_distance.toFixed(3)}</td>
//                                 <td>{row.collision_probability.toExponential().replace(/e\+?/, ' x 10^')}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </Table>
//         </ConjunctionBoxWrapper>
//     );
// }

// const Header = styled.div`
//     background-color: #edc844;
//     border-radius: 20px 20px 0px 0px;
//     display: flex;
//     flex-direction: column;
//     font-weight: 600;
//     align-items: center;
//     padding: 5px 0px;
// `;

// const Body = styled.div`
//     background-color: #f4f4f4;
//     border-radius: 0px 0px 20px 20px;
//     padding: 5px 7px 10px;
// `;

// const ConjunctionBoxWrapper = styled.div`
//     width: 22em;
//     margin-top: 0.5rem;
// `;

// const Table = styled.table`
//     width: 100%;
//     border-collapse: collapse;
//     font-weight: 700;

//     td {
//         cursor: pointer;
//     }
        
//     th, td {
//         border: 1px solid #ddd;
//         padding: 5px;
//         font-size: 10px;
//     }

//     th {
//         background-color: #000;
//         text-align: center;
//         color: #fff;
//         font-size: 12px;
//     }

//     tr:nth-child(even) {
//         background-color: #f9f9f9;
//     }

//     tr:hover {
//         background-color: #f1f1f1;
//     }
// `;
export {}
