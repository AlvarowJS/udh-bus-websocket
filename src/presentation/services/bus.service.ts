import { Bus } from "../../domain/interfaces/bus";
import { WssService } from './wss.service';

export class BusService {
    constructor(
        private readonly wssService = WssService.instance,
    ) { }

    private readonly bus: Bus[] = [
        {
            latitude: -9.928456, longitude: -76.237162
        }
    ];

    public get coordenates(): Bus[] {
        this.onSendingCoordenates();
        return this.bus;
        // return this.bus
    }


    private onSendingCoordenates() {
        this.wssService.sendMessage('on-working-changed', this.coordenates);
    }
}