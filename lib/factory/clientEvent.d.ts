/**
 * アプリケーションクライアントイベントファクトリー
 * クライアントサイドで発生したイベントを生成する
 * クライアントサイドからapiを通じて生成される想定
 * @namespace factory/clientEvent
 */
export interface IClientEvent {
    id: string;
    client: string;
    occurredAt: Date;
    url: string;
    label: string;
    category: string;
    action: string;
    message: string;
    notes: string;
    useragent: string;
    location: number[];
    transaction?: string;
}
export declare function create(args: {
    id: string;
    client: string;
    occurredAt: Date;
    url?: string;
    label: string;
    category?: string;
    action?: string;
    message?: string;
    notes?: string;
    useragent?: string;
    location?: number[];
    transaction?: string;
}): IClientEvent;
