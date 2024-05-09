// Singleton para que solo sea un instancia del web socket
import { Server } from 'http';
import { WebSocket, WebSocketServer } from 'ws';

interface Options {
    server: Server;
    path?: string;
}
export class WssService {
    // un guion bajo se refiere a una propiedad privada
    private static _instance: WssService;
    private wss: WebSocketServer;

    private constructor(options: Options) {
        const { server, path = '/ws' } = options;   //localhost:3000/ws

        this.wss = new WebSocketServer({ server, path });
        this.start();
    }

    static get instance(): WssService {
        if (!WssService._instance) {
            throw 'WssService is not initilized';
        }

        return WssService._instance;
    }

    static initWss(options: Options) {
        WssService._instance = new WssService(options);
    }

    public sendMessage(type: string, payload: Object) {
        this.wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type, payload }));
            }
        })
    }

    public start() {
        this.wss.on('connection', (ws: WebSocket) => {
            console.log('Cliente connect');

            ws.on('close', () => console.log('Cliente disconect'));
        });
    }


}