// import { useFilterStore, useInteractObjectStore } from '@/shared/stores';
// import { useNavigate } from 'react-router-dom';

// export const useFocus = () => {
//   const navigate = useNavigate();

//   const focus_satellite = (satellite_id) => {
//     const addActive = useInteractObjectStore.getState().addActive;
//     addActive(satellite_id);
//   };

//   const focus_satellites = (satellite_ids, tool_args) => {
//     const toggleCustomEnabled = useFilterStore.getState().toggleCustomEnabled;
//     const initializeCustomSelection = useFilterStore.getState().initializeCustomSelection;
//     initializeCustomSelection(satellite_ids, tool_args);
//     toggleCustomEnabled();
//     if(satellite_ids.length < 20) {
//       const addActive = useInteractObjectStore.getState().addActive;
//       satellite_ids.map((satellite_id) =>  {
//         addActive(satellite_id);
//       })
//     }
//   };

//   const focus_conjunction = async (conjunction_data) => {
//     const { conjunction_id } = conjunction_data;
//     navigate(`/conjunction?id=${conjunction_id}`);
//   };

//   return {
//     focus_conjunction,
//     focus_satellite,
//     focus_satellites,
//   };
// };
export {}
