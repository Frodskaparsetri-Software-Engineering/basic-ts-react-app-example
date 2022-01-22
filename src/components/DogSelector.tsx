import { useDogList } from "./dog-api/useDogList";

type DogSelectorProps = {
    onSelected: (dog: string) => void;
}

export function DogSelector(props: DogSelectorProps) {
    const dogList = useDogList();

    if (dogList.loading) {
        return <p>fetching dog list...</p>
    }

    return (
        <div>
            <input list="dogs" onChange={(e) => props.onSelected(e.target.value)} />
            <datalist id="dogs">
                {dogList.data?.message.map((breed) =>
                    <option key={breed} value={breed} />
                )}
            </datalist>
        </div>);
}