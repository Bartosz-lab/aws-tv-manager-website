import { User } from "./user";
import { Location } from "./location";

export interface Tv {
    id: number;
    name: string;
    ip: string;
    config: string;
    supervisor: number;
    location: number;
    avaiable: boolean;
    lastSeen: string;
}

export interface TvView {
    id: number;
    name: string;
    ip: string;
    config: string;
    supervisor: User;
    location: Location;
    avaiable: boolean;
    lastSeen: string;
}

export function TvViewToTv(view: TvView): Tv {
    return {
        id: view.id,
        name: view.name,
        ip: view.ip,
        config: view.config,
        supervisor: view.supervisor.id ,
        location: view.location.id,
        avaiable: view.avaiable,
        lastSeen: view.lastSeen,
    }
    
}