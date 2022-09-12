export interface HoursItem {
    closes_at:  string,
    is_closed: boolean,
    opens_at:  string,
}

export interface ProductItemData {
    address: string,
    description: string,
    hours: {
        friday: HoursItem,
        monday: HoursItem,
        saturday: HoursItem,
        sunday: HoursItem,
        thursday: HoursItem,
        tuesday: HoursItem,
        wednesday: HoursItem,
    },
    id: number,
    logo: string,
    name: string,
    phone_number: string,
    review: string,
    type: string,
    uid: string,
}