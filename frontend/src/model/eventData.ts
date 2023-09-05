export interface IPricing {
    category_name: string;
    pay: number;
}

export interface ILocation {
    place: string;
    city: string;
    adress: string;
    latitude: number;
    longitude: number;
}

export interface IEvent {
    _id: string
    name: string;
    description: string;
    date: string;
    show_time: string;
    category: string;
    images: string[];
    owner: string;
    location_information: ILocation;
    pricing_type: string;
    pricing_list: IPricing[];
}

export interface IEventData{
    status:string
    total_results:number,
    total_pages?:number,
    results:IEvent[]
}
