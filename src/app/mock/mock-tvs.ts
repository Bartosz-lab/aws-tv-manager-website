import { TvView } from '../models/tv';

export const TVS: TvView[] = [
    { 
        id: 1, 
        name: 'tv 1', 
        ip: '10.213.214.1',
        config: 'website',
        supervisor: { id: 1, name: 'Jan', surname: 'Niski', phone: '123456789', email: ''},
        location: { id: 1, address: 'Wrocław'},
        avaiable: false, 
        lastSeen: ''
    }, { 
        id: 2, 
        name: 'tv 2', 
        ip: '10.213.214.2', 
        config: 'website',
        supervisor: { id: 1, name: 'Jan', surname: 'Niski', phone: '123456789', email: ''},
        location: { id: 1, address: 'Wrocław'},
        avaiable: true, 
        lastSeen: ''
    }, { 
        id: 3, 
        name: 'tv 3', 
        ip: '10.213.214.3', 
        config: 'website',
        supervisor: { id: 1, name: 'Jan', surname: 'Niski', phone: '123456789', email: ''},
        location: { id: 1, address: 'Wrocław'},
        avaiable: false, 
        lastSeen: ''
    }, { 
        id: 4, 
        name: 'tv 4', 
        ip: '10.213.214.4', 
        config: 'website',
        supervisor: { id: 1, name: 'Jan', surname: 'Niski', phone: '123456789', email: ''},
        location: { id: 1, address: 'Wrocław'},
        avaiable: true, 
        lastSeen: ''
    }
]