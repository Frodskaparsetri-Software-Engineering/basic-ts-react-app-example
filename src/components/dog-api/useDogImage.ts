import { FetchDataResponse, useFetchData } from "./useFetch";

export interface DogApiDogImage {
    message: string;
    status: string;
}

export function useDogImage(dog: string): FetchDataResponse<DogApiDogImage> {
    return useFetchData<DogApiDogImage>(`https://dog.ceo/api/breed/${dog}/images/random`);
}