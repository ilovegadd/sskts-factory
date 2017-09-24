/**
 * チケット印刷アクションファクトリー
 * @namespace action.transfer.print.ticket
 */

import * as ActionFactory from '../../../action';
import { IExtendId } from '../../../autoGenerated';
import * as PrintActionFactory from '../print';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export interface ISearchConditions {
    agentId: string;
    ticketToken: string;
}

export interface ITicket {
    ticketToken: string;
}

export interface IObject extends ITicket {
    typeOf: string;
}

export type IResult = any;

export interface IAttributes extends PrintActionFactory.IAttributes {
    result?: IResult;
    object: IObject;
}

export type IAction = IExtendId<IAttributes>;

export function createAttributes(params: {
    actionStatus: ActionFactory.ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
    startDate: Date;
    endDate?: Date;
}): IAttributes {
    return PrintActionFactory.createAttributes(params);
}
