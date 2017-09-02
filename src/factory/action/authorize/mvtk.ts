/**
 * mvtk authorization factory
 * ムビチケ着券情報ファクトリー
 * @namespace factory/authorization/mvtk
 */

import { ActionStatusType, ActionType } from '../../action';
import * as AuthorizeActionFactory from '../authorize';

export interface IAgent {
    typeOf: string;
    id: string;
}

export interface IRecipient {
    typeOf: string;
    id: string;
}

// tslint:disable-next-line:no-suspicious-comment
// TODO ムビチケ着券OUTに変更
export interface IResult {
    price: number;
}

// tslint:disable-next-line:no-suspicious-comment
// TODO ムビチケ着券INに変更
export interface IObject {
    price: number;
    seatInfoSyncIn: ISeatInfoSyncIn;
}

export interface ISeatInfoSyncIn {
    /**
     * 興行会社コード
     */
    kgygishCd: string;
    /**
     * 予約デバイス区分
     */
    yykDvcTyp: string;
    /**
     * 取消フラグ
     */
    trkshFlg: string;
    /**
     * 興行会社システム座席予約番号
     */
    kgygishSstmZskyykNo: string;
    /**
     * 興行会社ユーザー座席予約番号
     */
    kgygishUsrZskyykNo: string;
    /**
     * 上映日時
     */
    jeiDt: string;
    /**
     * 計上年月日
     */
    kijYmd: string;
    /**
     * サイトコード
     */
    stCd: string;
    /**
     * スクリーンコード
     */
    screnCd: string;
    /**
     * 購入管理番号情報
     */
    knyknrNoInfo: IKnyknrNoInfo[];
    /**
     * 座席情報（itemArray）
     */
    zskInfo: IZskInfo[];
    /**
     * 作品コード
     */
    skhnCd: string;
}

/**
 * 券種情報
 */
export interface IKnshInfo {
    knshTyp: string;
    miNum: number;
}

/**
 * 購入管理番号情報
 */
export interface IKnyknrNoInfo {
    knyknrNo: string;
    pinCd: string;
    knshInfo: IKnshInfo[];
}

/**
 * 座席情報
 */
export interface IZskInfo {
    zskCd: string;
}

/**
 * ムビチケ着券情報
 */
export interface IAction extends AuthorizeActionFactory.IAction {
    result: IResult;
    object: IObject;
}

export function create(params: {
    id: string;
    actionStatus: ActionStatusType;
    result: IResult;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    startDate: Date;
    endDate?: Date;
}): IAction {
    return {
        id: params.id,
        actionStatus: params.actionStatus,
        typeOf: ActionType.AuthorizeAction,
        purpose: {
            typeOf: AuthorizeActionFactory.AuthorizeActionPurpose.Mvtk
        },
        result: params.result,
        object: params.object,
        agent: params.agent,
        recipient: params.recipient,
        startDate: params.startDate,
        endDate: params.endDate
    };
}
