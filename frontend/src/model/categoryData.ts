export interface ICategoryData {
    status: string,
    total_results: number,
    results: ICategory[];
}

export interface ICategory {
    _id: string;
    name: string;
}