import { Bus } from "../../domain/interfaces/bus";

export class BusService {
    private readonly bus:Bus [] = [
        {
            latitude: -9.928456, longitude: -76.237162
        }
    ];

    public get coordenates():Bus[] {
        return this.bus
    }
}