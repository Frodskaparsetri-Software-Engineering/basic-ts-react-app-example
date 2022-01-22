import { useEffect } from "react";
import { useDogImage } from "./dog-api/useDogImage";

type DogImageProps = {
    dog: string;
}

export function DogImage(props: DogImageProps) {
    const dogImg = useDogImage(props.dog);

    useEffect(() => {
        dogImg.refetch();
    }, [props.dog]);

    if (dogImg.loading) {
        return <p>fetching dog list...</p>
    }

    if (dogImg.error) {
        return <p>no image found</p>
    }

    return <img src={dogImg.data?.message} />


}