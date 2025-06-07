declare module 'phoenix' {
  export class Channel {
    join(): {
      receive(event: String, callback: (response: unknown) => void): unknown;
    };
    on(
      event: string,
      callback: (payload: {message: string; numbers: number[]}) => void,
    ): void;
    push(event: string, payload: object): unknown;
    leave(): void;
  }

  export class Socket {
    constructor(endpoint: string, options?: unknown);
    connect(): void;
    disconnect(code?: number, reason?: string): void;
    channel(topic: string, params?: object): Channel;
  }
}
