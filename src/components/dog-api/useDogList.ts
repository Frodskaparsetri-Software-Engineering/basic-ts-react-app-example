import { FetchDataResponse, useFetchData } from "./useFetch";

export interface DogApiDogList {
    message: string[];
    status: string;
}


export function useDogList(): FetchDataResponse<DogApiDogList> {
    return useFetchData<DogApiDogList>("https://dog.ceo/api/breeds/list");
}