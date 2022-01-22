import { useEffect, useState } from "react";
import { fetchData } from "./fetchData";

export type FetchDataResponse<TData> = {
    loading: boolean;
    error: string | null;
    data: TData | null | undefined;
    refetch: () => Promise<void>;
}

export function useFetchData<TData>(url: string): FetchDataResponse<TData> {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<TData | null>();

    useEffect(() => {
        refetch();
    }, []);

    const refetch = async () => {
        setLoading(true);
        const data = await fetchData<TData>(url)
        setData(data.data);
        setError(data.error);
        setLoading(false);
    };

    return { loading, data, error, refetch };
}