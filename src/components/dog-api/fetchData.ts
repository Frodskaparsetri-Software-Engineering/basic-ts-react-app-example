type FetchDataResponse<TData> = {
    data: TData | null;
    error: string;
}

export async function fetchData<TData>(url: string): Promise<FetchDataResponse<TData>> {
    const response = await fetch(url);

    const body = await response.json();

    if (!response.ok) {
        return { data: null, error: body.message }
    }

    const data = body as TData;

    return { data, error: "" };
}