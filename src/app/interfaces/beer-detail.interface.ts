export interface IBeerDetail {
    id: number;
    beerName: string;
    brewery: string;
    photoUrl?: string;
    location?: string;
    style?: string;
    abv?: string;
    ibu?: string;
    glassware?: string;
    comments?: string;
    rating?: number;
    url?: string;
}
