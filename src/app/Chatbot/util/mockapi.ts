// import api from '@/shared/api/base-api';
// import moment from 'moment';

// import { requestApiFavoriteAutoComplete } from '@/entities/favorite/useQueryFavorites';
// import { API_GPT, API_RSOS } from '@/shared/config';
// import { getCountryCode, timeRemaining } from './utils';
// import { AdvancedSearchParamsType } from '@/types/newConjunctions';
// import { SortOrderType, SortType } from '@/types/newConjunctions';
// import { DataResponseType } from '@/types/index';
// import { requestApiGetConjunctions } from '@/entities/conjunctions/api/get-conjunctions';

// interface SatelliteNoradIdResponse {
//   satellite_norad_id?: string;
//   message: string;
//   error?: string;
// }

// type NewAdvancedSearchParamsType = AdvancedSearchParamsType & {
//   country?: string;
// };

// interface SatelliteInfoResponse {
//   satellite_info?: any;
//   message: string;
//   error?: string;
// }

// interface SatelliteNameResponse {
//   satellite_name?: string;
//   message: string;
//   error?: string;
// }

// interface SimilarSatellite {
//   norad_id: string;
//   [key: string]: any;
// }

// interface MultipleSatellitesResponse {
//   similar_satellites?: SimilarSatellite[];
//   total_count?: number;
//   message: string;
//   error?: string;
// }

// interface ConjunctionDataResponse {
//   conjunction_data?: {
//     total_count: number;
//     conjunctions: Conjunction[];
//   };
//   message: string;
//   error?: string;
// }

// interface Conjunction {
//   conjunction_id: string;
//   primary_satellite: string;
//   primary_satellite_name: string;
//   secondary_satellite: string;
//   secondary_satellite_name: string;
//   collision_probability: number;
//   collision_time: string;
//   creation_date: string;
//   miss_distance: number;
// }

// interface MockApiArgs {
//   function_name: string;
//   function_args: any;
// }

// async function getSingleSatelliteNoradId({
//   satelliteName,
// }: {
//   satelliteName: string;
// }): Promise<SatelliteNoradIdResponse> {
//   if (!satelliteName) {
//     return { error: 'Invalid satellite name', message: 'Please specify the satellite name' };
//   }

//   try {
//     const results = await requestApiFavoriteAutoComplete(satelliteName);

//     if (Object.keys(results).length < 1) {
//       return { message: 'Invalid Satellite Name. No satellites found with this name.' };
//     }

//     if (Object.keys(results).length > 1) {
//       return {
//         message:
//           'Invalid Satellite Name. Multiple Satellites found with this name. Do not assume satellite. Please specify the satellite',
//       };
//     }

//     const satellite_norad_id = Object.keys(results)[0].replace('"', '');

//     return { satellite_norad_id, message: '' };
//   } catch (error) {
//     console.error('Error occurred while fetching satellite data:', error);
//     return {
//       error: 'Failed to fetch satellite data',
//       message: 'An error occurred while fetching satellite data.',
//     };
//   }
// }

// async function getSingleSatelliteInfo({
//   satelliteName,
//   satelliteNoradId,
// }: {
//   satelliteName: string;
//   satelliteNoradId: string;
// }): Promise<SatelliteInfoResponse> {
//   if (!satelliteName) {
//     return { error: 'Invalid satellite name', message: 'Please specify the satellite name' };
//   }
//   if (!satelliteNoradId) {
//     return { error: 'Invalid satellite id', message: 'Please specify the satellite norad id' };
//   }

//   try {
//     const response = await api.GET<null, DataResponseType<string>>(
//       `${process.env.SPACEMAP_PLATFORM_API_URI}${API_GPT}?satellite=${satelliteName}&id=${satelliteNoradId}`
//     );

//     const satellite_info = response.data.data;

//     return { satellite_info, message: '' };
//   } catch (error) {
//     console.error(error);
//     return {
//       error: 'Failed to fetch satellite data',
//       message: 'An error occurred while fetching satellite data.',
//     };
//   }
// }

// async function getSingleSatelliteName({
//   satelliteNoradId,
// }: {
//   satelliteNoradId: string;
// }): Promise<SatelliteNameResponse> {
//   if (!satelliteNoradId) {
//     return {
//       error: 'Invalid satellite norad id',
//       message: 'Please specify the satellite norad id',
//     };
//   }

//   try {
//     const results = await requestApiFavoriteAutoComplete(satelliteNoradId);

//     if (Object.keys(results).length < 1) {
//       return { message: 'Invalid Satellite Name. No satellites found with this id.' };
//     }

//     if (Object.keys(results).length > 1) {
//       return { message: 'Invalid Satellite Name. Multiple Satellites found with this id.' };
//     }

//     const satellite_name = results[Object.keys(results)[0]].objectname;

//     return { satellite_name, message: '' };
//   } catch (error) {
//     console.error('Error occurred while fetching satellite data:', error);
//     return {
//       error: 'Failed to fetch satellite data',
//       message: 'An error occurred while fetching satellite data.',
//     };
//   }
// }

// async function getMultipleSatellites({
//   constellationName,
//   objectType,
//   country,
// }: {
//   constellationName?: string;
//   objectType?: string;
//   country?: string;
// }): Promise<MultipleSatellitesResponse> {
//   if (!constellationName && !objectType && !country) {
//     return { error: 'Invalid parameters', message: 'Please specify at least one parameter' };
//   }

//   try {
//     const response = await api.GET<null, DataResponseType<any>>(
//       `http://platformapi-sandbox.spacemap42.com${API_RSOS}?objectname=${
//         constellationName ?? ''
//       }&objtypes=${objectType ?? ''}&countries=${country ? getCountryCode(country) : ''}`
//     );

//     const results = response.data.data;

//     const total_count = Object.keys(results).length

//     const similar_satellites: SimilarSatellite[] = [];

//     for (const key in results) {
//       if (results[key]['decay'] != null) {
//         continue;
//       }
//       results[key]['id'] = key;
//       similar_satellites.push(results[key]);
//       if (similar_satellites.length >= 100) break; // Break loop after pushing 5 names
//     }

//     return {
//       similar_satellites,
//       total_count,
//       message: 'Unless the user asks for information on a specific satellite, only give information about the total count.',
//     };
//   } catch (error) {
//     console.error('Error occurred while fetching satellite data:', error);
//     return { error: 'Failed to fetch satellite data', message: 'There are no satellites fitting this description.' };
//   }
// }

// async function getSatelliteConjunctionData({
//   satelliteNoradId,
//   startDate,
//   endDate,
//   distance,
//   sort,
//   order,
//   country,
// }: {
//   satelliteNoradId: string;
//   startDate?: string;
//   endDate?: string;
//   distance?: number;
//   sort?: SortType;
//   order?: SortOrderType;
//   country?: string;
// }): Promise<ConjunctionDataResponse> {
//   if (!satelliteNoradId) {
//     return { error: 'Invalid satellite', message: 'Please specify the satellite' };
//   }

//   try {
//     const queryParams: NewAdvancedSearchParamsType = {
//       primary: satelliteNoradId,
//       secondary: '',
//       tcaStart: startDate ? moment(startDate, 'YYYY-MM-DD').toISOString() : moment().toISOString(),
//       //      tcaEnd: endDate ? moment(endDate, 'YYYY-MM-DD').toISOString() : moment().add(24, 'hours').toISOString(),
//       dcaLower: 0,
//       dcaUpper: distance || 10,
//       page: 0,
//       limit: 3,
//       sort: sort || 'tca',
//       order: order || 'asc',
//       country: country ? getCountryCode(country) : '',
//     };

//     const results = await requestApiGetConjunctions(queryParams);

//     const conjunctions: Conjunction[] = [];
//     for (const conjunction in results.conjunctions) {
//       conjunctions.push({
//         conjunction_id: results.conjunctions[conjunction]['CONJUNCTION']['MESSAGE_ID'],
//         primary_satellite: results.conjunctions[conjunction]['OBJECT1']['OBJECT_DESIGNATOR'],
//         primary_satellite_name: results.conjunctions[conjunction]['OBJECT1']['OBJECT_NAME'],
//         secondary_satellite: results.conjunctions[conjunction]['OBJECT2']['OBJECT_DESIGNATOR'],
//         secondary_satellite_name: results.conjunctions[conjunction]['OBJECT2']['OBJECT_NAME'],
//         collision_probability:
//           results.conjunctions[conjunction]['CONJUNCTION']['COLLISION_PROBABILITY'],
//         collision_time: results.conjunctions[conjunction]['CONJUNCTION']['TCA'],
//         creation_date: results.conjunctions[conjunction]['CONJUNCTION']['CREATION_DATE'],
//         miss_distance: results.conjunctions[conjunction]['CONJUNCTION']['MISS_DISTANCE'] * 0.001,
//       });
//     }

//     if (results.totalCount !== 0) {
//       const conjunction_data = {
//         total_count: results.totalCount,
//         conjunctions,
//       };

//       return {
//         conjunction_data,
//         message:
//           'From the data in the results, provide the user with just the primary satellite and collision time unless asked otherwise.',
//       };
//     } else {
//       return {
//         message: 'There are no conjunctions involving this satellite',
//       };
//     }
//   } catch (error) {
//     console.error('Error occurred while fetching satellite collision data:', error);
//     return {
//       error: 'Failed to fetch satellite collision data',
//       message: 'An error occurred while fetching satellite collision data.',
//     };
//   }
// }

// async function getRecentSatelliteConjunctionData(): Promise<ConjunctionDataResponse> {
//   try {
//     const queryParams: NewAdvancedSearchParamsType = {
//       primary: '',
//       secondary: '',
//       tcaStart: moment().toISOString(),
//       //      tcaEnd: moment().add(24, 'hours').toISOString(),
//       dcaLower: 0,
//       dcaUpper: 10,
//       page: 0,
//       limit: 3,
//       sort: 'tca',
//       order: 'asc',
//       country: '',
//     };

//     console.log(queryParams);

//     const results = await requestApiGetConjunctions(queryParams);

//     console.log(results);
//     const conjunctions: Conjunction[] = [];
//     for (const conjunction in results.conjunctions) {
//       conjunctions.push({
//         conjunction_id: results.conjunctions[conjunction]['CONJUNCTION']['MESSAGE_ID'],
//         primary_satellite: results.conjunctions[conjunction]['OBJECT1']['OBJECT_DESIGNATOR'],
//         primary_satellite_name: results.conjunctions[conjunction]['OBJECT1']['OBJECT_NAME'],
//         secondary_satellite: results.conjunctions[conjunction]['OBJECT2']['OBJECT_DESIGNATOR'],
//         secondary_satellite_name: results.conjunctions[conjunction]['OBJECT2']['OBJECT_NAME'],
//         collision_probability:
//           results.conjunctions[conjunction]['CONJUNCTION']['COLLISION_PROBABILITY'],
//         collision_time: results.conjunctions[conjunction]['CONJUNCTION']['TCA'],
//         creation_date: results.conjunctions[conjunction]['CONJUNCTION']['CREATION_DATE'],
//         miss_distance: results.conjunctions[conjunction]['CONJUNCTION']['MISS_DISTANCE'] * 0.001,
//       });
//     }

//     const conjunction_data = {
//       total_count: results.totalCount,
//       conjunctions,
//     };

//     return {
//       conjunction_data,
//       message:
//         'From the data in the results, provide the user with just the primary satellite and collision time unless asked otherwise',
//     };
//   } catch (error) {
//     console.error('Error occurred while fetching satellite collision data:', error);
//     return {
//       error: 'Failed to fetch satellite collision data',
//       message: 'An error occurred while fetching satellite collision data.',
//     };
//   }
// }

// async function getConstellationConjunctionData({
//   constellationName,
//   startDate,
//   endDate,
//   distance,
//   sort,
//   order,
//   country,
// }: {
//   constellationName: string;
//   startDate?: string;
//   endDate?: string;
//   distance?: number;
//   sort?: SortType;
//   order?: SortOrderType;
//   country?: string;
// }): Promise<ConjunctionDataResponse> {
//   if (!constellationName) {
//     return { error: 'Invalid constellation', message: 'Please specify the constellation' };
//   }

//   try {
//     const queryParams: NewAdvancedSearchParamsType = {
//       primary: constellationName,
//       secondary: '',
//       tcaStart: startDate ? moment(startDate, 'YYYY-MM-DD').toISOString() : moment().toISOString(),
//       //      tcaEnd: endDate ? moment(endDate, 'YYYY-MM-DD').toISOString() : moment().add(24, 'hours').toISOString(),
//       dcaLower: 0,
//       dcaUpper: distance || 10,
//       page: 0,
//       limit: 3,
//       sort: sort || 'tca',
//       order: order || 'asc',
//       country: country ? getCountryCode(country) : '',
//     };

//     const results = await requestApiGetConjunctions(queryParams);

//     const conjunctions: Conjunction[] = [];
//     for (const conjunction in results.conjunctions) {
//       conjunctions.push({
//         conjunction_id: results.conjunctions[conjunction]['CONJUNCTION']['MESSAGE_ID'],
//         primary_satellite: results.conjunctions[conjunction]['OBJECT1']['OBJECT_DESIGNATOR'],
//         primary_satellite_name: results.conjunctions[conjunction]['OBJECT1']['OBJECT_NAME'],
//         secondary_satellite: results.conjunctions[conjunction]['OBJECT2']['OBJECT_DESIGNATOR'],
//         secondary_satellite_name: results.conjunctions[conjunction]['OBJECT2']['OBJECT_NAME'],
//         collision_probability:
//           results.conjunctions[conjunction]['CONJUNCTION']['COLLISION_PROBABILITY'],
//         collision_time: results.conjunctions[conjunction]['CONJUNCTION']['TCA'],
//         creation_date: results.conjunctions[conjunction]['CONJUNCTION']['CREATION_DATE'],
//         miss_distance: results.conjunctions[conjunction]['CONJUNCTION']['MISS_DISTANCE'] * 0.001,
//       });
//     }

//     const conjunction_data = {
//       total_count: results.totalCount,
//       conjunctions,
//     };

//     return {
//       conjunction_data,
//       message:
//         'From the data in the results, provide the user with just the primary satellite and collision time unless asked otherwise',
//     };
//   } catch (error) {
//     console.error('Error occurred while fetching constellation collision data:', error);
//     return {
//       error: 'Failed to fetch constellation collision data',
//       message: 'An error occurred while fetching constellation collision data.',
//     };
//   }
// }

// export function callMockAPI({ function_name, function_args }: MockApiArgs): Promise<any> {
//   switch (function_name) {
//     case 'get_satellite_conjunction_data':
//       return getSatelliteConjunctionData(function_args);
//     case 'get_single_satellite_norad_id':
//       return getSingleSatelliteNoradId(function_args);
//     case 'get_single_satellite_name':
//       return getSingleSatelliteName(function_args);
//     case 'get_multiple_satellites':
//       return getMultipleSatellites(function_args);
//     case 'get_single_satellite_info':
//       return getSingleSatelliteInfo(function_args);
//     case 'get_recent_satellite_conjunction_data':
//       return getRecentSatelliteConjunctionData();
//     case 'get_constellation_conjunction_data':
//       return getConstellationConjunctionData(function_args);
//     default:
//       return Promise.resolve({ error: 'unknown function', message: 'function not found' });
//   }
// }
export {}
