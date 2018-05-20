import * as pecorinoFactory from '@motionpicture/pecorino-factory';
import { IOrder } from '../../../order';
import * as GiveActionFactory from '../give';

export enum ObjectType {
    Pecorino = 'Pecorino'
}
export interface IObject {
    typeOf: ObjectType;
    amount: number;
}
export type IResult = any;
/**
 * 付与先インターフェース
 * 振込取引を実行するのでPecorino口座情報が必要
 */
export interface IToLocation {
    typeOf: pecorinoFactory.account.AccountType.Account;
    accountNumber: string;
    /**
     * PecorinoAPIエンドポイント
     * 入金処理実行時にAPIエンドポイントが必要となる
     */
    pecorinoEndpoint: string;
}
/**
 * 目的は注文
 * 注文に対するインセンティブとしてPecorinoが付与される仕組み
 */
export type IPurpose = IOrder;
export type IPotentialActions = any;
export interface IAttributes extends GiveActionFactory.IAttributes<IObject, IResult> {
    purpose: IPurpose;
    toLocation: IToLocation;
}

/**
 * Pecorino付与アクションインターフェース
 */
export type IAction = GiveActionFactory.IAction<IAttributes>;
